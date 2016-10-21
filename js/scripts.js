$(document).ready(function(){
  $("form#choices").submit(function(event) {
    var front = $("select#frontEnd").val();
    var back = $("select#backEnd").val();
    var mobile = $("select#mobile").val();
    var large = ($("select#largeCompany").val());
    var interactive = $("select#interactive").val();


    var choice = function(){

        if (front === "Yes") {
          return ("Design");
        }
      };






      $("#result").text(choice);
      $("#hidden").show();
  event.preventDefault()
  });
});
