`use strict`

alert('Hello! Welcome ')



function myFunction() {
  var person = prompt("Please enter your name", "Harry Potter");
  if (person !== null) {
    document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
  }
}

function myFunction1() {
  var ask = prompt('do you have an account?');
  if (ask == 'yes') {

    var r = confirm("good");
  }




  else if (ask == 'no') {
    
    return myFunction2();
    function myFunction2(){
      want = prompt('would you like to have one?');
    
      
      
      while (want == 'no'){
        return myFunction2();}
          if (want == 'yes') {
            var r = confirm("good");
            }
        }
        
      }
    }
  







  














