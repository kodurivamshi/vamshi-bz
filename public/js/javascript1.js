// page fully loaded
//  1. get data from server - url ? /data
//  2. show data in html 

$(document).ready(function(){
    $("#bt").click(function(){
	$.getJSON("/data", function(d){
		alert(JSON.stringify(d));
		$("#name").text(d.name);
		$("#college").text(d.college);
		$("#regno").text(d.regno);
	})
    $("#name").css({"background-color":"black","color":"white"})
        $("#regno").css({"color":"skyblue","background-color":"black","color":"white"})
        $("#college").css({"font-weight":"bolder","font-style":"italic"})
        $("#divi").css({"background-image" :"url(img/g.jpg)"})
    })
})
