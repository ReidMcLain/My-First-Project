function GetValue()
{
    var myarray= new Array("Reid","Daniel","Luke","William","John","Blake","David");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
};

function reidSmile()
{
var smile ="( ͡° ͜ʖ ͡°)"
document.getElementById("message1").innerHTML = smile;
};

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
};

function guessYourWeight()
{
const rndInt = randomIntFromInterval(120, 220)
document.getElementById("message2").innerHTML = rndInt;
};

function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function setBGColor() {
document.body.style.backgroundColor = get_random_color();
};
