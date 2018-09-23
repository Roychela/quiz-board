// for radio buttons; value="1" for correct, value="9" for wrong


//BUSINESS LOGIC : DRY CODE
var arrayUser = [];
var score = 0;
var complete = 0;
var calculate = function(){
  for (i = 1; i <= 5; i++) {
    var response = $("input:radio[name=js"+i+"]:checked").val();
    arrayUser.push(response);
    if (arrayUser[i-1] == "1") {
      score += 20;
    } // end if
    if (arrayUser[i-1] !== undefined) {
      complete += 1
    }
  } // end for

}
// END BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    calculate();
    var message = ""
    var remark =""
    if (complete === 5) {
      message = "Your score is:";
      $("#display").text(score);
      if (score <= 20) {
        // remark = "Bad";
        $("#remark").append("<img src='images/bad.png' alt=''>");
      } else if (score <= 60) {
        // remark = "Average";
        $("#remark").append("<img src='images/average.png' alt=''>");
      } else if (score <= 80) {
        // remark = "Good";
        $("#remark").append("<img src='images/good.png' alt=''>");
      } else {
        // remark ="Excellent";
        $("#remark").append("<img src='images/excellent.png' alt=''>");
      }
    } else {
      message = "Please answer all the questions and submit again!";
    }
    $("#message").text(message);
    // $("#remark").text(remark);
    $(".carousel").remove();

  }) // end submit

}) //END USER INTERFACE

function reload() {
  location.reload();
}
