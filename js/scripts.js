// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Wheel Spin
const wheel = document.querySelector('.wheel');
const spinbtn = document.querySelector("#spin");
const spinDegree = Math.ceil(2 + Math.random() * 60) * 45;

function spinWheel() {
	wheel.style.transform = "rotate(" + spinDegree + "deg)";
}

spinbtn.addEventListener("click", spinWheel);

// Cuisine Selection
const cuisineID = spinDegree % 360 / 45;
let cuisineName;
if (cuisineID === 0) {
	cuisineName = 'Chinese';
	cuisineDish = ['Kung Pao Chicken', 'Sweet and Sour Pork', 'Mapo Tofu', 'Hot Pot', 'Peking Duck']
} else if (cuisineID === 1) {
	cuisineName = 'Vietnamese';
	cuisineDish = ['Pho', 'Banh Mi', 'Goi Cuon', 'Bun Thit Nuong', 'Ca Kho To']
} else if (cuisineID === 2) {
	cuisineName = 'Korean';
	cuisineDish = ['Bibimbap', 'Kimchi', 'Bulgogi', 'Japchae', 'Tteokbokki']
} else if (cuisineID === 3) {
	cuisineName = 'Italian';
	cuisineDish = ['Pizza', 'Spaghetti Carbonara', 'Lasagna', 'Risotto', 'Tiramisu']
} else if (cuisineID === 4) {
	cuisineName = 'FastFood';
	cuisineDish = ['Burger', 'Fried Chicken', 'Hot Dog', 'Sandwich', 'Fries']
} else if (cuisineID === 5) {
	cuisineName = 'French';
	cuisineDish = ['Croissant', 'Ratatouille', 'Bouillabaisse', 'Coq au Vin', 'Crème Brûlée']
} else if (cuisineID === 6) {
	cuisineName = 'Mexican';
	cuisineDish = ['Tacos', 'Burrito', 'Guacamole', 'Enchilada', 'Churros']
} else if (cuisineID === 7) {
	cuisineName = 'Japanese';
	cuisineDish = ['Sushi', 'Ramen', 'Tempura', 'Udon', 'Miso Soup']
} else {
	cuisineName = 'Unknown';
	cuisineDish = ['Unkown']
}

//Box Display and Page Scroll
const showBox = document.querySelector('.gifthide');
function showGift() {
	showBox.classList.toggle('gifthide')
	showBox.classList.toggle('gift')
	if (window.innerWidth >= 834) {
		window.scroll({
			top: 400,
			left: 0,
			behavior: 'smooth'
		});
	}

};
wheel.addEventListener("transitionend", showGift);

// Box Popout & Result Display
const showDishbtn = document.querySelector(".gifthide")
const showPlate = document.querySelector(".platehide")
const hideWheel = document.querySelector(".wheel")
const showResult = document.querySelector(".resultshide")

function showDish1() {
	showPlate.classList.toggle('plate')
	showPlate.classList.toggle('platehide')
}
function showDish2() {
	hideWheel.classList.toggle('wheelhide')
	hideWheel.classList.toggle('wheel')
}
function showDish3() {
	showResult.classList.toggle('results')
	showResult.classList.toggle('resultshide')
}
function showDish4() {
	const selectedDish = cuisineDish[Math.floor(Math.random() * cuisineDish.length)];
	const orderDish = document.getElementById('order').textContent = 'Order: ' + selectedDish;
	dishName = selectedDish;
}

async function showDish() {
	await showDish1();
	showDish2();
	showDish3();
	showDish4();
	showGift();
}
showDishbtn.addEventListener("click", showDish)

// Reset
const resetDish = document.getElementById('resetdish');
const reset = document.getElementById('resetall');
function resetAll() {
	location.reload();
}
resetDish.addEventListener("click", showDish4)
reset.addEventListener("click", resetAll)

//Jump to Grubhub
const dishLinks = {
	"Kung Pao Chicken": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Kung%20Pao%20Chicken&latitude=42.93294143&longitude=-70.82079316&preciseLocation=true&geohash=drtshrtyebm5&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true&includeOffers=true",
	"Sweet and Sour Pork": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=sweet%20and%20sour%20pork&latitude=42.3631401&longitude=-71.06882477&preciseLocation=true&geohash=drt2yzcr0meq&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Mapo Tofu": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Mapo%20Tofu&latitude=42.3631401&longitude=-71.06882477&preciseLocation=true&geohash=drt2yzcr0meq&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Hot Pot": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Hot%20Pot&latitude=42.3631401&longitude=-71.06882477&preciseLocation=true&geohash=drt2yzcr0meq&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Peking Duck": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=%27peking%20Duck&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Pho": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Pho&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Banh Mi": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Banh%20Mi&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Goi Cuon": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Goi%20Cuon&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Bun Thit Nuong": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Bun%20Thit%20Nuong&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Ca Kho To": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=ca%20Kho%20To&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Bibimbap": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Bibimbap&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Kimchi": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Kimchi&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Bulgogi": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Bulgogi&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Japchae": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Japchae&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Tteokbokki": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Tteokbokki&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Pizza": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Pizza&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Spaghetti Carbonara": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Spaghetti%20carbonara&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Lasagna": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Lasagna&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=truea",
	"Risotto": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Risotto&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Tiramisu": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Tiramisu&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Burger": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Burger&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Fried Chicken": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Fried%20chicken&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Hot Dog": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Hot%20Dog&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Sandwich": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Sandwich&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Fries": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Fries&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Croissant": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Croissant&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Ratatouille": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Ratatouille&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Bouillabaisse": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Bouillabaisse&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Coq au Vin": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Cog%20au%20Vin&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Crème Brûlée": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=cr%C3%A8me%20Br%C3%BBl%C3%A9e&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Tacos": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Tacos&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Burrito": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Burrito&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Guacamole": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Guacamole&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Enchilada": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Enchilada&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Churros": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Churros&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Sushi": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Sushi&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Ramen": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Ramen&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Tempura": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Tempura&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Udon": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Udon&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
	"Miso Soup": "https://www.grubhub.com/search?orderMethod=delivery&locationMode=DELIVERY&facetSet=umamiV6&pageSize=36&hideHateos=true&searchMetrics=true&queryText=Miso%20Soup&latitude=42.34254837&longitude=-71.14001465&preciseLocation=true&geohash=drt2vhjrjx07&includeOffers=true&sortSetId=umamiv3&sponsoredSize=3&countOmittingTimes=true",
};

const jumpBtn = document.getElementById('order');
function jumpTo() {
	let link = dishLinks[dishName];
	console.log(link);
	window.open(link, '_blank');
}
jumpBtn.addEventListener('click', jumpTo)


