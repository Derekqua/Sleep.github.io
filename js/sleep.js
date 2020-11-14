// JavaScript source code
//DropDownlist

//slider
$(document).on('ready', function () {
    $('.regular').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
    });
});

//modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//================================================================================================================
//form
function getdate() {

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0!
	var yyyy = today.getFullYear();


	var maxdate = dd + 7;
	var maxyyyy = yyyy;
	var maxmm = mm;

	if (maxdate > 31) {
		maxdate -= 31;
		maxmm += 1;
		if (maxmm > 12) {
			maxmm = 1;
			maxyyyy += 1;
		}
	}
	if (maxdate < 10) {
		maxdate = '0' + maxdate;
	}

	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
	}
	if (maxmm < 10) {
		maxmm = '0' + maxmm;
	}

	var total = yyyy + '-' + mm + '-' + dd;

	var max = maxyyyy + '-' + maxmm + '-' + maxdate;

	document.getElementById("iDate").setAttribute("min", total);
	document.getElementById("iDate").setAttribute("max", max);
}
// Set up an associative array. The key represents the item, the value represents the price 
//Bed Size
var prices = new Array();
prices["None"] = 0;
prices["Single"] = 400;
prices["Super Single"] = 450;
prices["Queen"] = 500;
prices["King"] = 550;

//matresss
prices["foam"] = 60;
prices["latex"] = 180;
prices["zero"] = 110;
//StoragBed
var pizzaPrices = new Array();
pizzaPrices["small"] = 50;
pizzaPrices["medium"] = 110;
pizzaPrices["large"] = 180;


// function to find the price based on the drop down selection
function getPrice() {
	var price = 0;
	//Get a reference to the form id="orderform"
	var theForm = document.forms["orderForm"];
	//Get a reference to the select id="product"
	var selectedProduct = theForm.elements["cakeType"];
	//set price equal to value user chose
	price = prices[selectedProduct.value];
	//finally we return price
	return price;
}
// function to display the order info
function calculateTotal() {

	var price = 0;
	var mp = 0;
	// get a reference to the form id="orderform"
	var theForm = document.forms["orderForm"];
	// get a reference to the selected id="product"
	var selectedProduct = theForm.elements["cakeType"].value;
	var pizzaSize = theForm.elements["size"];
	// set price equal to value user chose
	price = prices[selectedProduct];
	//matress
	var matress = theForm.elements["matress"].value;
	mp = prices[matress];

	for (var i = 0; i < pizzaSize.length; i++) {
		if (pizzaSize[i].checked) {
			pizzaSizePrice = pizzaPrices[pizzaSize[i].value]; //pizza size
			break;
		}
	}
	price = price + pizzaSizePrice + mp;

	// get the quantity entered 
	var qty = document.getElementById("quantity").value;
	price = price * qty;
	// display output
	var divobj = document.getElementById("totalPrice");

	divobj.innerHTML = "Total price for your order is $" + price;
}

function submitForm() {
	var selectedDate = document.getElementById("iDate").value;
	var time = document.getElementById("iTime").value;
	var n = document.forms["myForm"]["Name"].value;

	// get a reference to the form id="orderform"
	var theForm = document.forms["orderForm"];
	// get a reference to the selected id="product"
	var selectedProduct = theForm.elements["cakeType"].value; //caketype
	alert("Thank you for your order, " + n + "." + "You will receive your " + selectedProduct + " bed at " + time + " on " + selectedDate);

}
function clearMessage() {

	var divobj = document.getElementById("totalPrice");
	divobj.innerHTML = "";
	document.getElementById("myForm").reset();

}




