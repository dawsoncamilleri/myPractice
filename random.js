document.getElementById("image").addEventListener("click",hello);

var cars = ["", "acorn4.jpg", "acorn2.jpg", "acorn.png"];

var i = 0;
function loadimage(){
    var x = document.getElementById("image");
  x.setAttribute("src", 'acorn.png');
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
 
}


//linear
//function hello(){
//    alert(i);
//    var x = document.getElementById("image");
//  x.setAttribute("src", cars[i]);
//    x.setAttribute("width", "304");
//    x.setAttribute("height", "228");
//    x.setAttribute("alt", "The Pulpit Rock");
//    document.body.appendChild(x);
//    i++;
//    if(i == 2){
//        i = 0;
//    }
//}
//

//random
function hello(){
        var b = Math.floor((Math.random() * 3)+ 1);

    alert(b);
    var x = document.getElementById("image");
  x.setAttribute("src", cars[b]);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
    var x2 = document.getElementById("image").src;
    var names = x2.replace(/^.*[\\\/]/, '');
    alert(names);
 if(names == cars[1]){
        alert("back to where we started");
    }

if(names == cars.slice(-1)){
    alert('same as before');
}
        cars.push(names);

}



//object images
/*
 var user = {
      name: "John",
      age: 30,
      isAdmin: true,
      images: ["", "acorn4.jpg", "acorn2.jpg", "acorn.png"],
      
    };
function hello(){
        var b = Math.floor((Math.random() * 3)+ 1);

    alert(b);
    var x = document.getElementById("image");
  x.setAttribute("src", user.images[b]);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);

 
}
*/

   




 //   document.getElementById('image2').innerHTML = '<img src = ' + user.images[b] + '>';


               
    