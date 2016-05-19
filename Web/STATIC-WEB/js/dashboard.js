$(".navigation a").off("click").on('click', function(e) {
	$(".navigation li").removeClass("active");
	$(e.target).closest(".navigation li").addClass("active");
	
	var lii = $(".navigation li.active");
	var pagename = $(".navigation li.active").attr("data-pagename");
	$('#iframe').attr('src', pagename+".html");
}); 