function FahrenheitToCelsius (fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 /9);
    return celsius;
}
let TemperatureF = prompt('Enter Fahrenheit');
let TemperatureC = FahrenheitToCelsius(TemperatureF);
alert(`${TemperatureF} Farenheit = ${TemperatureC.toFixed(2)} Celsius`);