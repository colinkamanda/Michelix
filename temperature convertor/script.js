const celsiusEL=document.getElementById("celsuis");
const fareinheitEL=document.getElementById("farenheit");
const kelvinEL=document.getElementById("kelvin");






function convertemp(event){
const currentTemp= +event.target.value 
switch (event.target.name) {        
    case "celsuis":
        fareinheitEL.value= (currentTemp * 1.8+32).toFixed(2)
        kelvinEL.value= (currentTemp + 273.32).toFixed(2)
        break;

    case "farenheit":
        celsiusEL.value=((currentTemp)/1.8).toFixed(2)
        kelvinEL.value=((currentTemp-32)/1.8+273.32).toFixed(2)
        break;

    case "kelvin":
        celsiusEL.value=(currentTemp-273.32).toFixed(2)
        fareinheitEL.value=((currentTemp-273.32)*1.8+32).toFixed(2)
    default:
        break;
}
}