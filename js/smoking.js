// Accordion Menu
var accordians =
    document.getElementsByClassName("accordian");

for (var i = 0; i < accordians.length; i++) {
    accordians[i].onclick = function () {
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

//Cigarette Cost Calculator
function cigCalc() {
    var p = document.getElementById("price").value;
    var n = document.getElementById("number").value;

    var final = (p / 20) * n;
    var final2 = final * 360;

    document.getElementById("savePrice").innerHTML = "Assuming 1 pack has 20 cigarettes, you will save $" + final2 + " in 1 year!";
}