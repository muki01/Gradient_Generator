const color1 = document.getElementById('color1')
const color2 = document.getElementById('color2')
const randomBtn = document.getElementById('randomBtn')
const body = document.querySelector('.container')
const message = document.getElementById('message')
let gradient = document.getElementById("gradientType");
let gradientType = "linear-gradient(90deg";
const hexcodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', ]

// EVENTS
gradient.addEventListener('input', function () {
  let gradientNumber = gradient.options[gradient.selectedIndex].value;
  gradientType = gradientNumber == 1 ? "linear-gradient(90deg" : gradientType;
  gradientType = gradientNumber == 2 ? "linear-gradient(180deg" : gradientType;
  gradientType = gradientNumber == 3 ? "radial-gradient(circle" : gradientType;
  changeColor()
  updateColorMessage()
})
color1.addEventListener('input', function () {
  changeColor()
  updateColorMessage()
})

color2.addEventListener('input', function () {
  changeColor()
  updateColorMessage()
})

randomBtn.addEventListener('click', function () {
  applyRandomColor()
})

// click to #message copy to clipboard
message.addEventListener('click', function () {
  navigator.clipboard.writeText(message.innerText);
})


// CUSTOM FUNCTION
function updateColorMessage() {
  message.innerText = `background : ${gradientType}, ${color1.value} ${sliderOne.value}%, ${color2.value} ${sliderTwo.value}%);`
}

function changeColor() {
  body.style.background = `${gradientType}, ${color1.value} ${sliderOne.value}%, ${color2.value} ${sliderTwo.value}%)`
  updateColorMessage()
}

function getRandomColor() {
  let randomColor = '#'
  while (randomColor.length < 7) {
    randomColor += hexcodes[Math.floor(Math.random() * hexcodes.length)]
  }
  return randomColor
}

function applyRandomColor() {
  let firstRandom = getRandomColor()
  let secondRandom = getRandomColor()

  body.style.background = `${gradientType}, ${firstRandom} ${sliderOne.value}%, ${secondRandom} ${sliderTwo.value}%)`
  color1.value = firstRandom
  color2.value = secondRandom
  updateColorMessage()
}


/////////////////////////////////////////////////////////////////////////////////////////

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let minGap = 4;

sliderOne.addEventListener('input', function () {
  if (sliderTwo.value - sliderOne.value <= minGap) {
    sliderOne.value = sliderTwo.value - minGap;
  }
  changeColor()
  updateColorMessage()
})

sliderTwo.addEventListener('input', function () {
  if (sliderTwo.value - sliderOne.value <= minGap) {
    sliderTwo.value = sliderOne.value + minGap;
  }
  changeColor()
  updateColorMessage()
})


// RUN AT LOAD
applyRandomColor();