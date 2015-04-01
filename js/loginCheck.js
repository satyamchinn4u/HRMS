// JavaScript Document
//alert(localStorage.getItem("HRMSemail"));

if(typeof(localStorage.getItem("HRMSemail"))=='undefined' || localStorage.getItem("HRMSemail") === null ||(!localStorage["HRMSemail"])){
var siteurl=document.URL;

if (siteurl.search('index.html')<0)
{
window.location='index.html';
}


}else
{

if (siteurl.search('dashboard.html')<0)
{
window.location='dashboard.html';	
}
}
$("#userLogout").click(function(){
	
	
	if(localStorage.getItem("HRMSemail"))
	{
	localStorage.clear();
	window.location='index.html';
	}
});