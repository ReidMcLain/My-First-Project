function GetValue()
{
    var myarray= new Array("Reid","Daniel","Luke","William","John","Blake","David");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
};

function reidSmile()
{
var smile =":)"
document.getElementById("message1").innerHTML = smile;
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function guessYourWeight()
{
const rndInt = randomIntFromInterval(100, 300)
document.getElementById("message2").innerHTML = rndInt;
};
