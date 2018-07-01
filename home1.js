//var img = document.getElementById("img");
 var person = prompt("Please enter your name",'Harry Potter');
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
    if (person == '' || person == null){
        document.getElementById("demo").innerHTML =
        "Hello " + ' Customer ' + "! How are you today?";
    }


var count = 0;



var text = document.getElementById("wuu");

document.getElementById("wuu").addEventListener("click", yo);
//document.getElementById("img").addEventListener("click", showImage);

function yo(){
    count++;
    if(count==2){
        text.style.color="blue";
        count = 0;
    }
    else{
            text.style.color="red";
    }
}

//function showImage() 
//{ 
var x = document.getElementById("img");
  x.setAttribute("src", "image.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
//}

document.getElementById("img").addEventListener("mouseover", enlarge);
document.getElementById("img").addEventListener("mouseout", small);
document.getElementById("wuu2").addEventListener("click", textSmall);
document.getElementById("wuu3").addEventListener("click", openList1);


function enlarge(){
    var x = document.getElementById("img");
  x.setAttribute("src", "image.jpg");
    x.setAttribute("width", "500");
    x.setAttribute("height", "700");
    x.setAttribute("alt", "The Pulpit Rock");
}



function small(){
    var x = document.getElementById("img");
  x.setAttribute("src", "image.jpg");
    x.setAttribute("width", "100");
    x.setAttribute("height", "100");
    x.setAttribute("alt", "The Pulpit Rock");
}

function textSmall(){
    document.getElementById("wuu2").style.fontSize = "30px";

}


function openList1() {
    var list = document.getElementById("hides");
        var buttonss = document.getElementById("wuu3");

    if (list.style.display == "none"){
        list.style.display = "block";
                buttonss.textContent = 'hide';

    }else{
        list.style.display = "none";
                buttonss.textContent = 'show';

    }
}

//document.getElementById("first").addEventListener("click", bgc);
//
//function bgc(){
//    document.body.style.backgroundColor = 'red';

//-------------------------------------------------
//            document.body.style.backgroundColor = 'rgb(255,160,122)';
//   var myElement = document.getElementById('bods');    
//    
//    if(myElement.style.backgroundColor == 'rgb(217, 54, 0)')
//    {
//        myElement.style.backgroundColor = "RGB(240, 128, 128)";
//    }
//    else
//    {
//        myElement.style.backgroundColor = "#D93600";
//    }
//}


