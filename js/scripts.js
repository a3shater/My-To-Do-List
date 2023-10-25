function myToggle() {
  if ($("#list").children().length >= 1) {
    $("#content").show(1000);
    $("#empty").hide(1000);
  } else {
    $("#content").hide(1000);
    $("#empty").show(1000);
  }
}
$(function () {
  myToggle();
  $("#rv").click(function () {
    $("div.items").remove();
    myToggle();
  });

  $("#add").click(function () {
    $("#list").append(`<div class='items'>${$("#itm").val()}</div>`);
    myToggle();
  });

  $("#itm").keypress(function (e) {
    if (e.key == "Enter") {
      $("#list").append(`<div class='items'>${$("#itm").val()}</div>`);
      myToggle();
    }
  });

  $(document).on("dblclick", ".items", function () {
    this.remove();
    myToggle();
  });

  $(document).on("click", ".items", function () {
    $(this).toggleClass("active");
  });
});
