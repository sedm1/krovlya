$(".burger").click(function(){
    $(".menu").toggleClass("menu-active")
})
$(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".menu").length == 0 && $target.closest(".burger").length == 0) {
      $(".menu").removeClass("menu-active");
    }
});
$("ul.tabs__caption").on("click", "li:not(.active)", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.tabs")
    .find("div.tabs__content")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});