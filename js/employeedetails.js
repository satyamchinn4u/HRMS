$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	var empcode = getUrlVars()["empcode"];
	if(empcode)
	{
	$.getJSON(serviceURL + 'getemployee.php?empcode='+empcode, displayEmployee);
	}else
	{
		$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
	}
});

function displayEmployee(data) {
	var employee = data.item;
//	console.log(employee);
	var image=employee.picture;
	var gender=employee.gender;
//	console.log(gender);
	if(image === undefined || image == null || image.length <= 0 || image=="")
	{
				if(gender=='m')
				{
				var path="http://hrms.ctrls.com/img/men_icon_young.png";
				}else if(gender=='f')
				{
				var path="http://hrms.ctrls.com/img/women_icon_young.png";
				} else
				{
				var path="http://hrms.ctrls.com/img/no_image.png";	
				}
	$('#employeePic').attr('src', path);
	}else
	{		
	$('#employeePic').attr('src', 'http://hrms.ctrls.com/profilepics/' + image);

	}
	if(employee.firstName!='' || employee.lastName!=""){ $('#fullName').text(employee.firstName + ' ' + employee.lastName); }
	else
	{
	$('#fullName').text(employee.fullName);	
	}
	$('#employeeTitle').text(employee.title);
	$('#city').text(employee.city);
	//console.log(employee.officePhone);
	if (employee.managerId>0) {
		$('#actionList').append('<li><a href="employeedetails.html?empcode=' + employee.managerId + '"><h3>View Manager</h3>' +
				'<p>' + employee.reporting + '</p></a></li>');
	}
	if (employee.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + employee.reportCount + '</p></a></li>');
	}
	if (employee.email) {
		$('#actionList').append('<li><a href="mailto:' + employee.email + '"><h3>Email</h3>' +
				'<p>' + employee.email + '</p></a></li>');
	}
	if (employee.department) {
		$('#actionList').append('<li><h3>Department</h3>' +
				'<p>' + employee.department + '</p></a></li>');
	}
	if (employee.officePhone) {
		$('#actionList').append('<li><a href="tel:' + employee.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + employee.officePhone + '</p></a></li>');
	}
	if (employee.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + employee.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + employee.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + employee.officePhone + '"><h3>SMS</h3>' +
				'<p>' + employee.officePhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
