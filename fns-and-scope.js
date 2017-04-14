//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
  if (name === 'Tyler') {
return true;
  }
  return false;
}  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName(name){
    name1 = prompt('Your Name');
    return name1;
  }//Code Here


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
var name1 = getName();

  alert('Welcome, ' + name1);
}

//Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// Arguments is the function. Paramater is a varable inside the parentheses in a function.//Answer Here


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


// null, undefined, 0, '', NaN, false  //Answer Here



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  return 'Cory';
}  //Code Here



//Now save the function definition of myName into a new variable called newMyName



var newMyName = myName;  //Code Here

//Now alert the result of invoking newMyName
alert(newMyName());


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn(){
return function(){
  return name;};
}
  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();  //Code Here

//Now invoke innerFn.
