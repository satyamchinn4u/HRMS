var serviceURL = "http://hrms.ctrls.com/mobile/test/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			var image=employee.picture;
			var gender=employee.gender;
			if(image === undefined || image == null || image.length <= 0 || image=="")
			{
				if(gender=='m')
				{
				var path='<img src="http://hrms.ctrls.com/img/men_icon_young.png"/>';
				}else if(gender=='f')
				{
				var path='<img src="http://hrms.ctrls.com/img/women_icon_young.png"/>';
				} else
				{
				var path='<img src="http://hrms.ctrls.com/img/no_image.png"/>';	
				}
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					path +
					'<h4>' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
	}else
	{
	$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="http://hrms.ctrls.com/profilepics/' + employee.picture + '"/>' +
					'<h4>' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');	
	}
		});
		$('#employeeList').listview('refresh');
	});
}

function calculateAge(birthMonth, birthDay, birthYear)
{
  todayDate = new Date();
  todayYear = todayDate.getFullYear();
  todayMonth = todayDate.getMonth();
  todayDay = todayDate.getDate();
  age = todayYear - birthYear;

  if (todayMonth < birthMonth - 1)
  {
    age--;
  }

  if (birthMonth - 1 == todayMonth && todayDay < birthDay)
  {
    age--;
  }
  return age;
}