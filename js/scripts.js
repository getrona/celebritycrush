$(document).ready(function() {
  $("form#celebrities").submit(function(event) {
    var sexInput = $('select#orient').val();
    var genderInput = $('select#gender').val();
    var nameInput = $('input#name').val();
    var ageInput = parseInt($('input#age').val());
    var attraction = $('select#attrc').val();
  if(ageInput > 50 && sexInput === "Hetero" && genderInput === "Male") {
    $("#result,#jlo").show();
  } else if (ageInput > 50 && sexInput === "Homo" && genderInput === "Male") {
    $("#result,#denzel").show();
  } else if (ageInput > 50 && sexInput === "Homo" && genderInput === "Female") {
    $("#result,#jlo").show();
  } else if (ageInput > 50 && sexInput === "Hetero" && genderInput === "Female") {
    $("#result,#denzel").show();
  } else {
    $("#result,#beyonce");
  }
    event.preventDefault();
   });
  });
