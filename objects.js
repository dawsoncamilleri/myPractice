//let user = new Object(); // "object constructor" syntax


//normal
//--------------------------------------------------------------------------------
/*var count = 0;
    var user = {
      name: "John",
      age: 30,
      isAdmin: true,
      image:"<image width = '100px' src = 'acorn.png'>",
      name2: "lukw",
      age2: 32,
      isAdmin2: true,
      image2:"<image width = '100px' src = 'acorn.png'>",
        name3: "fred",
      age3: 42,
      isAdmin3: true,
      image3:"<image width = '100px' src = 'acorn.png'>", 
       hello:function(){
           alert("hello");
       }
    };
    var item = document.getElementById("texts");
    for(let key in user) {
     // alert( user[key] ); // John, 30, true
        count++;
        if(count == 13){
            break;
        }
                item.innerHTML +=  " " + user[key] + "<br>";

    }

user.hello();*/
//-------------------------------------------------------------------------------------
//
//
//
////correct
function Cars(name,age,image,listsss){
    this.name = ' name: ' + name;
    this.age = ' age: '+ age;
    this.image = image;
        this.listsss = listsss + '<br>';

  /*  var ans = parseInt(this.age.substring(4,6));
    alert(ans);*/
    
  //  this.yearsUntilRetire = yearsLeft;
}

function yearsLeft(){
    var ans1 = 100 - this.age.substring(5,8);
    return ans1;
}

var car1 = new Cars("john", 12, "<image width = '100px' src = 'acorn.png'>",['penuts','salad','mayonaise']);
var car2 = new Cars("eric", 22, "<image width = '100px' src = 'acorn.png'>");
var car3 = new Cars("wayne", 32, "<image width = '100px' src = 'acorn.png'>");

var item = document.getElementById("texts");
var i = 0;
for(let key in car1) {
      //  i++;
     //   if(i == 4){
     //                       item.innerHTML += "<br>";
    //        i=0;
  //      }
  //  else{
                item.innerHTML +=  " " + car1[key] + "<br>";

   // }

    

}

for(let key in car2) {
   i++;
        if(i == 4){
                            item.innerHTML += "<br>";
                                i=0;

        }
    else{
                item.innerHTML +=  " " + car2[key] + "<br>";

    }
}


for(let key in car3) {
      i++;
        if(i == 4){
                            item.innerHTML += "<br>";
                                i=0;

        }
    else{
                item.innerHTML +=  " " + car3[key] + "<br>";

    }

}

//var anss = car2.yearsUntilRetire();
//alert(anss);


var btnSubmit = document.getElementById('submit');
var nameTxt = document.getElementById('name');
var emailTxt = document.getElementById('email');
var ageTxt = document.getElementById('age');
var idTxt = document.getElementById('id');
// Content for all persons
var allPersonsElem = document.getElementById('allPersons');
var count = 0;
var persons = [];
// Parameterised Constructor
function Person(fullName, email, age, id)
{
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.id = id;
}

function addPerson()
{
    var name = nameTxt.value;
    var email = emailTxt.value;
    var age = ageTxt.value;
    var id = idTxt.value;
    
    nameTxt.value = '';
    emailTxt.value = '';
    ageTxt.value = '';
    idTxt.value = '';
    
    if((name == '') || (email == '') || (age == '') || (id == '') )
    {   
        alert('All fields need to inserted!');
        return;
    }
    
    var exists = false;
    alert(id);
    //alert(persons[0].id);
    for(i = 0; i < persons.length; i++)
    {
        if(id == persons[i].id)
        {
            exists = true;
        }
    }
    
    if(exists)
    {
        alert('A person with your ID has already registered with us.');
    }
    else
    {
        // creating a new instance of person
        var newPerson = new Person(name, email, age, id);
        count++;
        persons.push(newPerson);
       /* for(var i = 0; i < persons.length; i++){
            var varsss2 = persons[i].id;
            var varsss3 = persons[i].fullName;
            var varsss4 = persons[i].age;
            var varsss5 = persons[i].email;
            var finals = varsss2 + varsss3 + varsss4 + varsss5;

            alert(finals);
        }
        *///var varsss2 = persons[0].;
        //alert(varsss2);
        allPersonsElem.innerHTML += '<br>Person: ' + count + '<br>Full Name: ' + newPerson.fullName + '<br>Email: ' + newPerson.email + '<br>Age: ' + newPerson.age + '<br>ID: ' + newPerson.id + '<br>';

        
//        switch(newPerson.age) {
//    case '18':
//        alert('good to go');
//        break;
//    case '21':
//        alert('nice age');
//        break;
//    default:
//        alert('qnzqnzl');
//}
        
    }
    

}




btnSubmit.addEventListener('click', addPerson);