$(".burger").click(function(){
    $(".menu").toggleClass("menu-active")
})
$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".menu").length == 0 && $target.closest(".burger").length == 0) {
      $(".menu").removeClass("menu-active");
    }
});