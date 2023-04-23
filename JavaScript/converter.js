const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const resultado = document.getElementById("resultado");

celsiusInput.addEventListener("input", () => {
  fahrenheitInput.disabled = true;
  kelvinInput.disabled = true;
  if (celsiusInput.value === "") {
    fahrenheitInput.disabled = false;
    kelvinInput.disabled = false;
  }
});

fahrenheitInput.addEventListener("input", () => {
  celsiusInput.disabled = true;
  kelvinInput.disabled = true;

  if (fahrenheitInput.value === "") {
    celsiusInput.disabled = false;
    kelvinInput.disabled = false;
  }
});

kelvinInput.addEventListener("input", () => {
  celsiusInput.disabled = true;
  fahrenheitInput.disabled = true;
  if (kelvinInput.value === "") {
    celsiusInput.disabled = false;
    fahrenheitInput.disabled = false;
  }
});

addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (celsiusInput.value != "") {
    let celsiusF = celsiusInput.value * 1.8 + 32;
    let celsiusK = parseFloat(celsiusInput.value) + 273.15;
    resultado.textContent = `${celsiusInput.value} C° se equivale a ${celsiusF} °F  e também ${celsiusK} K°`;
 
  } else if (fahrenheitInput.value != "") {
    let fahrenheitC = ((fahrenheitInput.value - 32) / 1.8).toFixed(2);
    //let fahrenheiK = (parseFloat(fahrenheitInput.value) + 459.67) * 5/9; tambem funciona
    let fahrenheitK = ((parseFloat(fahrenheitInput.value) + 459.67) / 1.8).toFixed(2);
    resultado.textContent = `${fahrenheitInput.value} F° se equivale a ${fahrenheitC} °C e também ${fahrenheitK} K°`;
 
  } else if (kelvinInput.value != "") {
    let kelvinC = (parseFloat(kelvinInput.value) - 273.15).toFixed(2);

    let kelvinF = (parseFloat(kelvinInput.value * 1.8) - 459.6).toFixed(2);

    resultado.textContent = `${kelvinInput.value} K° se equivale a ${kelvinC} °C  e também ${kelvinF} f°`;
  }
  addEventListener("reset",(evento)=>{
    document.getElementById("form").reset();
    resultado.textContent = "";
    celsiusInput.disabled = false;
    kelvinInput.disabled = false;
    fahrenheitInput.disabled = false;

  })
});
