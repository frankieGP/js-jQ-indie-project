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
        }else if (back === "Yes") {
        return ("PHP");
      } else if (mobile === "Yes") {
        return ("JAVA");
      } else if (large === "Yes") {
        return ("C#");
      } else if (interactive === "Yes") {
        return ("Ruby");
        }


        };






      $("#result").text(choice);
      $("#hidden").show();
  event.preventDefault()
  });
});
