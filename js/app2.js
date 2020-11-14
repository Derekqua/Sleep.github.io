// JavaScript source code
$("#overlay1").hide();
$(".pic1").hide();
$(".pic2").hide();
$(".pic3").hide();
$(".pic4").hide();
$(".price").hide();

$("#p1").hover(function () {

    $(".pic1").show();
    $(".pic2").hide();
    $(".pic3").hide();
    $(".pic4").hide();
    
    $("#overlay1").toggle(1000);

});
$("#p2").hover(function () {
    $(".pic1").hide();
    $(".pic2").show();
    $(".pic3").hide();
    $(".pic4").hide();
    $("#overlay1").toggle(1000);

});

$("#p3").hover(function () {
   
    $(".pic1").hide();
    $(".pic2").hide();
    $(".pic3").show();
    $(".pic4").hide();
    $("#overlay1").toggle(1000);

});

$("#p4").hover(function () {
    $(".c1").hide();
    $(".pic1").hide();
    $(".pic2").hide();
    $(".pic3").hide();
    $(".pic4").show();
    $("#overlay1").toggle(1000);

});

function show() {
    $(".cart").hide();
    $(".price").toggle(1000);


}

function calculate()
{
    var sizep = 0;
    var sizep2 = 0;
    var sizep3 = 0;
    var sizep4 = 0;
    var sizet = "";
    var sizet2 = "";
    var sizet3 = "";
    var sizet4 = "";


    var form = document.forms["form"]
    var p1 = form.elements["n1"].value;
    var p2 = form.elements["n2"].value;
    var p3 = form.elements["n3"].value;
    var p4 = form.elements["n4"].value;
    

    var size = document.getElementsByName("r");
    for (i = 0; i < size.length; i++) {
        if (size[i].checked)
            sizet = size[i].value;
    }
    
    if (sizet == "medium") {
        sizep = 28;
        document.getElementById("fo").innerHTML ="Price: $" + sizep
    }
    else if (sizet == "large") {
        sizep = 50;
        document.getElementById("fo").innerHTML = "Price: $" +  sizep
    }
    
    var size2 = document.getElementsByName("r2");
    for (i = 0; i < size2.length; i++) {
        if (size2[i].checked)
            sizet2 = size2[i].value;
    }
    
    if (sizet2 == "medium") {
        sizep2 = 23;
        document.getElementById("foo").innerHTML = "Price: $" +  sizep2
    }
    else if (sizet2 == "large") {
        sizep2 = 40;
        document.getElementById("foo").innerHTML = "Price: $" +  sizep2
    }
    

    var size3 = document.getElementsByName("r3");
    for (i = 0; i < size3.length; i++) {
        if (size3[i].checked)
            sizet3 = size3[i].value;
    }
    
    if (sizet3 == "medium") {
        sizep3 = 18;
        document.getElementById("fos").innerHTML = "Price: $" +  sizep3
    }
    else if (sizet3 == "large") {
        sizep3 = 30;
        document.getElementById("fos").innerHTML = "Price: $" +  sizep3
    }
    

    var size4 = document.getElementsByName("r4");
    for (i = 0; i < size4.length; i++) {
        if (size4[i].checked)
            sizet4 = size4[i].value;
    }
    
    if (sizet4 == "medium") {
        sizep4 = 80;
        document.getElementById("fop").innerHTML = "Price: $" + sizep4
    }
    else if (sizet4 == "large") {
        sizep4 = 120;
        document.getElementById("fop").innerHTML = "Price: $" +  sizep4
    }
    

    total = p1 * sizep + p2 * sizep2 + p3 * sizep3 + p4 * sizep4 + 10
    document.getElementById("pr1").innerHTML = p1 + " x Fish Oil";
    document.getElementById("pr2").innerHTML = p2 + " x Optimum Nuitrition";
    document.getElementById("pr3").innerHTML = p3 + " x Melatonin Pills";
    document.getElementById("pr4").innerHTML = p4 + " x Whey Protein";

    document.getElementById("price").innerHTML = "Total Price: $" + total;
    document.getElementById("fprice").innerHTML = "Total Price: $" + total;

   
}

function checkout()
{
    var name = document.getElementById("username").value;
    var add = document.getElementById("address").value;
    console.log(name, add);
    alert(name + '. Order Succesfull! Item will be delivered to ' + add);

}



