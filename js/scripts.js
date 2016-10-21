$(document).ready(function(){
  $("form#choices").submit(function(event) {
    var front = $("select#frontEnd").val();
    var back = $("select#backEnd").val();
    var mobile = $("select#mobile").val();
    var large = ($("select#largeCompany").val());
    var interactive = $("select#interactive").val();


    var choice = function(){

        if (front === "Yes") {
        return ("CSS/Design");
        }else if (back === "Yes") {
        return ("PHP/Drupal");
      } else if (mobile === "Yes") {
        return ("Java/Android");
      } else if (large === "Yes") {
        return ("C#/.NET");
      } else if (interactive === "Yes") {
        return ("Ruby/Rails");
      }
    };






    $("#result").text(choice);
    $("#hidden").fadeIn();
    event.preventDefault()
  });
});
