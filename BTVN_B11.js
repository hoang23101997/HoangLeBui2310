// Write a program to create a traffic light.
// Note: When you click on red button, the red light is displayed
// When you click on  yellow button, the yellow light is displayed
// When you click on  green button, the green light is displayed
document.getElementById('redButton').onclick = redlight;
document.getElementById('yellowButton').onclick = yellowlight;
document.getElementById('greenButton').onclick = greenlight;
function redlight () 
{
    clearLights ();
    document.getElementById('redLight').style.backgroundColor = "red";
}
function yellowlight ()
{
    clearLights ();
    document.getElementById('yellowLight').style.backgroundColor = "yellow";
}
function greenlight ()
{
    clearLights ();
    document.getElementById('greenLight').style.backgroundColor = "green";
}
function clearLights() {
    document.getElementById('redLight').style.backgroundColor = "black";
    document.getElementById('yellowLight').style.backgroundColor = "black";
    document.getElementById('greenLight').style.backgroundColor = "black";
  }

