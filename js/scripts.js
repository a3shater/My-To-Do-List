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
    if ($("#itm").val().trim().length == 0) {
      if (confirm("are you sure you need to add empty task?").valueOf()) {
        $("#list").append(`<div class='items'>${$("#itm").val()}</div>`);
        myToggle();
      }
    } else {
      $("#list").append(`<div class='items'>${$("#itm").val()}</div>`);
      myToggle();
    }
  });

  $("#itm").keypress(function (e) {
    if (e.key == "Enter") {
      if ($("#itm").val().trim().length == 0) {
        if (confirm("are you sure you need to add empty task?").valueOf()) {
          $("#list").append(`<div class='items'>${$("#itm").val()}</div>`);
          myToggle();
        }
      } else {
        $("#list").append(`<div class='items'>${$("#itm").val()}</div>`);
        myToggle();
      }
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
