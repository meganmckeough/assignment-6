$(document).ready(start); //ensure DOM loaded 

function start (){
	// console.log("Ready"); //ensure js file working and linked
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"]; //array of list of cities
	$(cities).each(function () { //append array into drop down
		$("select").append("<option value='" + this + "'>" + this + "</option>"); 
	});
	$("select").change(function(){ //listen for change in the drop down
		var city = $("select").val();	//store city information, pull value
		changeBackground(city, cities); //call function to change background based on var city and using array	
	// console.log(city);
	});
}

function changeBackground(city, cities) { //function to change background and select color based on drop down
	if (city === cities[0]) { 
		$("body").attr("class", "nyc");
		$("select").attr("id", "nycDrop");
	}
	else if (city === cities[1]) {
		$("body").attr("class", "sf");
		$("select").attr("id", "sfDrop");
	}
	else if (city === cities[2]) {
		$("body").attr("class", "la");
		$("select").attr("id", "laDrop");
	}
	else if (city === cities[3]) {
		$("body").attr("class", "austin");
		$("select").attr("id", "atxDrop");
	}
	else if (city === cities[4]) {
		$("body").attr("class", "sydney");
		$("select").attr("id", "sydDrop");
	}
	else {
		alert("Please try again!");
	}
}


