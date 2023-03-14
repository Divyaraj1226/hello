var password="123"
var email= "ramu@gmail.com"
function accesstopage()
{
    var usergivenUSID = document.getElementById("userEmail").value
    var usergivenUSp = document.getElementById("userpass").value

    if(usergivenUSID==email&&usergivenUSp==password)
    {
        var fom = document.forms
        fom[0].action="./HTML/blog.html"
        fom[0].elements[2].type ="submit"
    }
    else if(usergivenUSID!=email&&usergivenUSp==password)
    {
        document.getElementById("status").innerHTML="EmailId is wrong"
        document.getElementById("emailDiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,red,purple)"
        document.getElementById("passdiv").style.borderColor="blue"
    }
    else if(usergivenUSID==email&&usergivenUSp!=password)
    {
        document.getElementById("status").innerHTML="Password is wrong"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,purple,red)"
        document.getElementById("emailDiv").style.borderColor="blue"
    }
    else
    {
        document.getElementById("status").innerHTML="Mail andPassword is wrong"
        document.getElementById("passdiv").style.borderColor="red"
        document.body.style.backgroundImage="linear-gradient(90deg,red,red)"
        document.getElementById("emailDiv").style.borderColor="red"
    }
}
    function visiblePass()
    {
        var fom = document.forms
        fom[0].elements[1].type="text"
        document.getElementById("visible").style.transform="rotateY(360deg)"
        document.getElementById("visible").style.transition="transform 0.2s"
        var img = document.images
        img[0].src="./ASSET/LOGO/openeye.jpg"
    }
    function inVisiblePass()
    {
        var fom = document.forms
        fom[0].elements[1].type="password"
        var img = document.images
        img[0].src ="./ASSET/LOGO/closeEye.jpg"
        document.getElementById("visible").style.transform="rotateY(-360deg)"
        document.getElementById("visible").style.transition="transform 0.2s"
      
    }


