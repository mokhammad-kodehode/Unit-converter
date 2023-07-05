const inputEl = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");
const meterEl = document.getElementById("meter");
const literEl = document.getElementById("liter");
const kiloEl = document.getElementById("kilo");
const section = document.getElementById("section-for");
const mainSection = document.getElementById("section");
const switchTheme = document.getElementById("theme-switch-checkbox");

const section1 = document.getElementById("section-for");
const section2 = document.getElementById("section-for");
const section3 = document.getElementById("section-for");

// const sections = [
//     section1,
//     section2,
//     section,
// ]

// sections.forEach( section => {
//     section.classList.remove("sectionfor");
//     section.classList.add("sections-dark");
// });

const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;

switchTheme.addEventListener("change", function () {
  if (switchTheme.checked) {
    mainSection.classList.remove("secs");
    mainSection.classList.add("dark-section");
  } else {
    mainSection.classList.remove("dark-section");
    mainSection.classList.add("secs");
  }
});

convertBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  const meterSum = inputValue * meter;
  const feetSum = inputValue / meter;
  const meterFeet = `${inputValue} meters = ${meterSum.toFixed(3)} feet |
   ${inputValue} feet = ${feetSum.toFixed(3)} meter`;
  meterEl.textContent = meterFeet;

  const literSum = inputValue * liter;
  const gallonSum = inputValue / liter;
  const literGal = `${inputValue} liter = ${literSum.toFixed(3)} gallons |
   ${inputValue} gallons = ${gallonSum.toFixed(3)} liter`;
  literEl.textContent = literGal;

  const kiloSum = inputValue * kilo;
  const poundSum = inputValue / kilo;
  const kiloPound = `${inputValue} liter = ${kiloSum.toFixed(3)} gallons |
   ${inputValue} gallons = ${poundSum.toFixed(3)} liter`;
  kiloEl.textContent = kiloPound;
});
