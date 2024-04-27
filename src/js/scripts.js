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
	console.log(cuisineName, selectedDish);
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
	window.scroll({
		top: 400,
		left: 0,
		behavior: 'smooth'
	});
};
wheel.addEventListener("transitionend", showGift);

// Dish Selection
const showDishbtn = document.querySelector(".gifthide")
const showPlate = document.querySelector(".platehide")
const hideWheel = document.querySelector(".wheel")
const selectedDish = cuisineDish[Math.floor(Math.random() * cuisineDish.length)];
function showDish1() {
	showPlate.classList.toggle('plate')
	showPlate.classList.toggle('platehide')
}
function showDish2() {
	hideWheel.classList.toggle('wheelhide')
	hideWheel.classList.toggle('wheel')
}
async function showDish() {
	await showDish1();
	showDish2();
}
showDishbtn.addEventListener("click", showDish)


