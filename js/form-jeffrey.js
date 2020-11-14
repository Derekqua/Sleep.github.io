// JavaScript source code
function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var bmr = 10 * weight + 6.35 * height - 5 * age;
    alert(bmr);
}

$(document).ready(function () {
    $("input[type='button']").click(function () {
        var radioValue = $("input[name='gender']:checked").val();
        var weight = $("#weight").val();
        var height = $("#height").val();
        var age = $("#age").val();
      
        if (radioValue == "male") {
            var s = 5;
        }
        if (radioValue == "female") {
            var s = -161;
        }
        var bmr = 10 * weight + 6.25 * height - 5 * age + s;
        $("#output").html("Your estimated daily caloric expenditure is : " + bmr + "Kcal/day");


    });
});