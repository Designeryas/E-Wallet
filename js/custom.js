$(document).ready(function () {
  // const height_img = $('.man-city-logo img').height();
  // $('.world-cup-logo img').css({'height': height_img})
  // $(window).on('resize', function(){
  //     const height_img = $('.man-city-logo img').height();
  //     $('.world-cup-logo img').css({'height': height_img})
  // });
  $('#send #send_step2 .back').click(function(e) {
    e.preventDefault();
    $("#send_step1").removeClass("d-none");
    $("#send_step2").addClass("d-none");
    console.log("clicked")
    // var url = $(location).attr("href");
    // var isStepTwo = $("#send_step1").hasClass("d-none");
    // if(isStepTwo) {
    //     console.log("in if")
    // } else {
    //     console.log("in else")
    //     parts = url.split("/");
    //     last_part = parts[parts.length - 1];
    //     url = url.replace(last_part, "Home.html");
    //     $(location).attr("href", url);
    // }
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
function receiveNextStep() {
  $("#receive_step1").addClass("d-none");
  $("#receive_step2").removeClass("d-none");
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
