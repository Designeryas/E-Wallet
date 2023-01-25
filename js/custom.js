$(document).ready(function () {
  // const height_img = $('.man-city-logo img').height();
  // $('.world-cup-logo img').css({'height': height_img})
  // $(window).on('resize', function(){
  //     const height_img = $('.man-city-logo img').height();
  //     $('.world-cup-logo img').css({'height': height_img})
  // });
  $('#send .back').click(function(e) {
    e.preventDefault();
    var url = $(location).attr("href");
    var isStepTwo = $("#send_step1").has("d-none");
    if(isStepTwo) {
        $("#step1").removeClass("d-none");
        $("#step2").addClass("d-none");
    } else {
        parts = url.split("/");
        last_part = parts[parts.length - 1];
        url = url.replace(last_part, "Home.html");
        $(location).attr("href", url);
    }
  })
});
function qrcodeClicked() {
  console.log("clicked");
}
function nextStep() {
  $("#step1").addClass("d-none");
  $("#step2").removeClass("d-none");
}
function sendNextStep() {
  $("#send_step1").addClass("d-none");
  $("#send_step2").removeClass("d-none");
}
function register() {
  console.log("new url", url);
}

$("#register_form").submit(function (e) {
    e.preventDefault();
  var url = $(location).attr("href");
  parts = url.split("/");
  last_part = parts[parts.length - 1];
  url = url.replace(last_part, "Home.html");
  $(location).attr("href", url);
});
