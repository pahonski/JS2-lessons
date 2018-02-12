window.onload = function () {
var Hamburger = {
	price: 0,
	calories: 0,

	SIZE_SMALL: {
		price: 50,
		calories: 20
	},
	SIZE_LARGE: {
		price: 100,
		calories: 40
	},
	STUFFING_CHEESE: {
		price: 10,
		calories: 20
	},

	STUFFING_SALAD: {
		price: 20,
		calories: 5
	},

	STUFFING_POTATO: {
		price: 15,
		calories: 10
	},
	
	calc: function(size){
		this.price += Hamburger[size].price;
		this.calories += Hamburger[size].calories;
		
		var checkedBoxes = document.querySelectorAll('input[name=add]:checked');
		for(var i = 0; i < checkedBoxes.length; i++){
			var add = checkedBoxes[i].id;
			this.price += Hamburger[add].price;
			this.calories += Hamburger[add].calories;
		}
		
		Hamburger.result(this.price, this.calories);
	},	
	
	result: function(price, calories){
		document.getElementById('price').innerHTML = price;
		document.getElementById('calories').innerHTML = calories;
	},
	
	resetData: function(){
		this.price = 0;
		this.calories = 0;
		Hamburger.result(this.price, this.calories);
	}	
}

document.getElementById('form').addEventListener('submit', function(e){
	Hamburger.resetData();
	Hamburger.calc(document.querySelector('input[name="size"]:checked').value);
	e.preventDefault();
});
 }