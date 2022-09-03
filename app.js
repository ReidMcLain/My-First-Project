function GetValue()
{
    var myarray= new Array("Reid","Daniel","Luke","William","John","Blake","David");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}
