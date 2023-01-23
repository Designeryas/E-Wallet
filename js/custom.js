$(document).ready(function(){
    // const height_img = $('.man-city-logo img').height();
    // $('.world-cup-logo img').css({'height': height_img})
    // $(window).on('resize', function(){
    //     const height_img = $('.man-city-logo img').height();
    //     $('.world-cup-logo img').css({'height': height_img})
    // });
})
function qrcodeClicked() {
    console.log("clicked")
}
function nextStep() {
    $('#step1').addClass('d-none');
    $('#step2').removeClass('d-none');
}
function sendNextStep() {
    $('#send_step1').addClass('d-none');
    $('#send_step2').removeClass('d-none');
}