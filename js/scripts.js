// for radio buttons; value="1" for correct, value="9" for wrong


//BUSINESS LOGIC : DRY CODE
var arrayUser = [];
var score = 0;
var calculate = function(){
  for (i = 1; i <= 5; i++) {
    var response = $("input:radio[name=js"+i+"]:checked").val();
    arrayUser.push(response);
    if (arrayUser[i-1] == "1") {
      score += 20;
    }
  }
}
// END BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    calculate();
    $("#display").text(score);
  }) // end submit

}) //END USER INTERFACE
