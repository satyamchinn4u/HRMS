// JavaScript Document
$(document).on('click','#CustLoginBtn',function(){



	
	$("#CustLoginBtn").attr("disabled","disabled");
	$("#newReg").hide(100);
	
	var URL='http://hrms.ctrls.com/mobile/test/';
	var email=$("#email").val();
	var password=$("#password").val();
	
	$.getJSON( "http://hrms.ctrls.com/mobile/test/login.php", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
		items.push( "<li id='" + key + "'>" + val + "</li>" );
		});
		$( "<ul/>", {
		"class": "my-new-list",
		html: items.join( "" )
		}).appendTo( "body" );
		});
/*	$.ajax({
		
				url:'http://hrms.ctrls.com/mobile/test/login.php',
				type: 'jsonp',
				crossDomain: true,
				data:{email:email,password:password},
				crossDomain: true,
				success: function(data){
				
				if(data!='0' && data)
				{
				window.localStorage.setItem('HRMSemail',data);
				window.location='dashboard.html';
				}else
				{
					$("#CustLoginBtn").removeAttr('disabled');
						$("#newReg").show(100);
				alert('Invalid Username Or password');	
				
				}
										
   		   }
							
						});*/
	
	
});