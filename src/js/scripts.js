// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


const wheel = document.querySelector('.wheel');
const spinbtn = document.querySelector("#spin");
const value = Math.ceil(Math.random()*1440)

function pickdish() {
    wheel.style.transform = "rotate("+value+"deg)";
    value += Math.ceil(Math.random()*1440);}


spinbtn.addEventListener("click", pickdish);