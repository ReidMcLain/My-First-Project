function GetValue()
{
    var myarray= new Array("Reid","Daniel","Luke","William","John","Blake","David");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)

function reidSmile()
{
var smile =":)"
document.getElementbyId("message1").innerHTML = smile;
}
