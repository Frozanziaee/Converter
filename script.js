
let meterTofeet = 3.281     //feet
let literToGallon = 0.264   //gallon
let kiloToPound = 2.204     //pound

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthConverter = document.getElementById("length-converter")
const valumeConverter = document.getElementById("volume-converter")
const massConverter = document.getElementById("mass-converter")

convertBtn.addEventListener("click", function(){
    let baseValue =inputEl.value

    lengthConverter.textContent = `${baseValue} meters = ${(baseValue * meterTofeet).toFixed(3)} feet | ${baseValue} 
    feet = ${(baseValue / meterTofeet).toFixed(3)} meters`

    valumeConverter.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} 
    gallons = ${(baseValue /literToGallon).toFixed(3)} liters`

    massConverter.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} 
    pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`

    inputEl.value = ""
    
})
