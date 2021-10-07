

// var a;
// var b = 2;

// a = 7;
// b = a;

// console.log(a)
// uninitialized
// var a;
// var b;
// var b;


// initializing these three variables
// var a = 5;
// var b = 10;
// var c = "I am a" ;
// // Do not change code below for new answer
// a = a + 1;
// b = b + 5;
// c = c + " girl"
//   console.log(c);

// adding two numbers
// var sum = 10 + 0
// console.log(sum)
// same for multiplying and subtrraction

// incrementing numbers
// applies to adding one Number
// var myVar = 87;
// myVar++
// console.log(myVar);

// remainder operation
// this is used to know if a number is even or odd
// var remainder
// remainder = 11 % 3
// console.log(remainder);

// compound assignment
// var a = 3;
// var b = 17;
// var c = 12;
// // only modify code below this line
// a += 12;
// b += 9;
// c += 7;
// instead of saying a=a+3 or b=b+17

// compound assignment with compound arguement
// same for * symbol that is times/multiply

// var myStr = "I am a \"double quoted\" string inside \"double quotes\" ";


// console.log(myStr);


// var myStr="FirstLine\n\t\\SecondLine\nThirdLine"
// console.log(myStr);

// computing string
// var ourStr = "I come first. ";
// ourStr += "I come second.";
// console.log(ourStr);


// var myStr = "This is a sentence. "
// myStr += "This is a second sentence."
// console.log(myStr);


// var ourName = "freeCodeCamp. "
// var ourStr = "Hello, our name is" + ourName + ", how are you?"


// var myName= "Bolu";
// var myStr= "My name is " + myName + " and I am well now!"

// console.log(myStr);

// Appending Variables to strings


// link of a string
// var firstNameLength = 0;
// var firstName = "Ada"
// firstNameLength = firstName.length;
// console.log(firstName.length);

// var firstNameLength = 0;
// var firstName = "MoyosoreKelani";
// firstNameLength = firstName. length;
// console.log(firstName. length);

// finding the link of a string
// bracket notation to find a string in a character

// put of
// var lastLetterOfFirstName = 0;
// var firstName = "Maryam";

// lastLetterOfFirstName = firstName [firstName.length - 2];
// console.log(firstName. length -2);

// var myStr = "Jello World";
// var myStr1 = "Hello Nigeria";
// myStr = "Hello World";
// console.log(myStr1);

// function
// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
//     // Your code below this line
//     var result = "";

// result += "The " + myAdjective + " " + myNoun +" " + myVerb + " to my store " +myAdverb
//     // Your code above this line
  
//     return result;

// }

// console.log(wordBlanks("dog", "big", "ran", "quickly")); 
// console.log(wordBlanks("dog", "small", "ran", "quickly")); 


// var ourArray = ["John", 23];
// var myArray = ["Quincy", 1];
// console.log(ourArray);

// var ourArray = [50, 60, 70];
// // put the index of the object inside another var
// var ourData = ourArray [0];

// // set up
// var myArray = [50, 60, 70]

// // change code below this

// var myData = myArray[0];
// console.log(myData);

// to put element inside array
// var ourArray = [18, 64, 99];
// ourArray [1] = 45;
// // console.log(ourArray);

// var myArray = [18, 64, 99];
// myArray [0] = 55;
// console.log(myArray);

// var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12]]]
// // only change code below

// var myData = myArray[2] [1];
// console.log(myData);

// manipulate array with push function

// var ourArray = ["Stimpson", "j", "cat"];
//  ourArray.push( ["Amaka", "Joy"]
//  )
//  console.log(ourArray);

// var myArray = [["Chi", "Hollandia"], ["Mummy", "Ada"]];
// myArray.push (["dog", "cow"])


// console.log([myArray]);

// we use pop to remove the last element


// var ourArray = [1, 2, 3];
// var removedFromOurArray =  ourArray.pop()


// console.log(removedFromOurArray);

// var myArray = [["John", 23], ["cat", 2]];
// var removedFromOurArray = myArray.pop ();
// console.log(myArray);
// ans = delete d last array = [["John", 23]]

// shift function is similar to pop function
// first element is removed instaed of last element

// var ourArray = ["Ade", "Chibuzor", ["Moyo"]];
// var removedFromOurArray = ourArray.shift ();
// console.log(ourArray)

// answer = ['Cibuzor', ['Moyo']] so Ade has been shifted off


// shift function
// var ourArray = [["John", "Ayo"], ["Amina", "Emeka"]];
// var removedFromOurArray = ourArray.shift();
// console.log(ourArray);

// unshift is used to add element at the begining and 
// also remove d first elment
// var ourArray =  ["Stimson", "Y", "Cat"];
// ourArray.shift();
// ourArray.unshift ("Happy")
// console.log(ourArray);

// shopping list nested arrays

// var listItems = [["cereal", 3], ["milk", 2], ["Banana", 3], ["Juice", 5]]
// console.log(listItems);

// our reusuablefunction
// function ourReusuableFunction(){
//     console.log("Heyy, World");

// }
// always call out your function
// ourReusuableFunction();

// always change code here
// function yourReusableFunction() {
//     console.log ("Hi world")
// }
// yourReusableFunction()

// passing values into funcions with arguments

// PARAMETERS

// function ourFuntionWithArgs (a, b) {
//     console.log(a - b);
// }
// // This is the arguments passed into our function
// ourFuntionWithArgs (10, 5)

// function FuntionWithArgs (a, b) {
//     console.log(a + b);
// }
// // This is the arguments passed into our function
// FuntionWithArgs (10, 5)


// scopes refers to the visibility of variables globally

// var myGlobal = 10;
// function fun1() {
// oopsGlobal = 5;
// }
// function fun2() {
// var output = "";
// if (typeof myGlobal != "undefined") {
//     output += "myGlobal " + myGlobal;
// }
// if (typeof oopsGlobal != "undefined"){
//     output += " oopsGlobal: " + oopsGlobal;
// }
// console.log(output);
// }
// fun1 ();
// fun2 ();


// local scopes function

// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }

// myLocalScope()

// local and glocal variable
// local variable is always inside the function
// var outerWear = "T-Shirt";
// function myOutput(){
//     var outerWear = "sweater";
//     return outerWear;
// }
// console.log(myOutput());
// console.log(outerWear)

// function minusSeven (num) {
//     return num - 7;
// }
// console.log(minusSeven(10));

// function timesFive (num) {
//     return num * 5
// }

// console.log (timesFive(7))

// var sum = 0;
// function addThree() {
//     sum = sum + 3;
// }
//  function addFive() {
//     //  i use +=because i want to still add  num to the var
//      sum +=5;
//      return sum * 4
//  }
// console.log(addFive());

// assignment operator
// var changed = 0;

// function change(num) {
//     return (num + 5)/3;
// }

// changed = change (10);
// console.log(changed);

// var processed = 0;

// function processedArg(num) {
//     return(num + 3)/5;
// }
// processed = processedArg(7);

// console.log(processed);

// Stand in Line
// function nextInLine (arr, item) {
//     arr.push(item);
//     return arr.shift();
// }

// var textArr = [1,2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(textArr));
// console.log(nextInLine(textArr, 6));
// console.log("After: " + JSON.stringify (textArr));


// // Boolean values
// // true or false no quotation
// function welcomeToBoolean () {
//     return false;
// }

// if statement tells the javascript to execute the conditions in curly bracis
// function ourTrueOrFalse(isItTrue) {
//     if (isItTrue) {
//         return "Yes, it's true"
//     }
//     return "No, it's false"
// }

// function TrueOrFalse(wasThatTrue) {
//    if  (wasThatTrue) {
//        return "Yes, that was true";
//    }
//    return "That was false";
// }

// console.log(TrueOrFalse(false));

// comparison operators of equals to

// function testEqual(val) {
//     if (val == 12){
//         return "Equal"
//     }
//     return "Not Total"
// }
// console.log(testEqual(10));

// comparison of strict
// function testStrict(val) {
//     if (val===7) {
//         return "Equal";
//     }
//     return "Not Equal"
// }
// console.log(testStrict(3));

// will be true with 2 equals sign
// 3===3
// 3==='3'

// practice Comparing Different values
// function compareEquality (val) {
//     if (val != 99){
//         return "Not Equal"
//     }
//     return "Equal"
// }
// console.log(compareEquality(10));

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "Over 100";
//     }
// if (val > 10) {
//     return "Over 10";
// }
// return "10 or Under"
// }
// console.log (testGreaterThan(10));

// Comparison with Less than or greater Equality
// function testGreaterorOrEqual(val){
//     if (val >= 20) {
//         return "20 or Over";
//     }
//     if (val >= 10) {
//         return "10 or Over";
//     }
//     return "Less than 10";
// }
// console.log(testGreaterorOrEqual(10));

// function testLessThan(val){
//         if (val < 25) {
//             return "Under 25";
//         }
//         if (val < 55) {
//             return "Under 55";
//         }
//         return "Over 55";
//     }
//     console.log (testLessThan(10));

// use of And
// function testLogicalAnd(val) {
//     if (val <= 20 && val >= 25){
// return "Yes"
//     }
//     return "No"
// }
// console.log(testLogicalAnd(10));



// Or operator
// function testLogicalOr(val) {
//     // only change code below function box
//     if (val < 10 || val > 20) {
//         return "Outside";

//     }
//     return"Inside";
// }

// console.log(testLogicalOr(15));

// Else statement
// function testElse(val) {
//     var result = "";
//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         result = "5 or smaller"
//     }
//     // change code below
// return result;
// }
// console.log(testElse(4));

// Else if Statement
// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "Between 5 and 10";
//     }
// }
    
// console.log(testElseIf(7));

// function orderMyLogic(val) {
//     if (val < 5) {
//         // var result;
//         return "Less than 10";
//     } else if (val < 5) {
//         return "Less than 5";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }

// console.log(orderMyLogic(3));

// you can calso change Else statements

// function testSize(num) {
//     if (num < 5) {
//         return "Tiny"
//     } else if (num < 10) { 
//         return "small"
//     } else if (num < 15) {
//         return "medium"
//     } else if (num < 20) {
//         return "Large"
//     } else {
//         return "Huge"
//     }

//     }

// console.log(testSize(19));

// Gold code
// var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double-Bogey", "Go-home"]

// function golfScore(par, strokes) {
//     if (strokes== 1) {
// return names[0]
//     } else if (strokes <=par - 2) {
//         return names[1]
//     } else if (strokes== par - 1) {
//       return names[2]  
//     } else if (strokes== par) {
// return names[3]
//     }else if (strokes== par +1) {
// return names[4]
//     }else if (strokes== par +2) {
// return names[5]
//     }else if (strokes>= par +3) {
//         return names[6]
//     }
    
// }
// console.log(golfScore(5, 8));

// Switch Statements
// function caseInSwitch(val) {
//     var result;
//     switch(val) {
//         case 1:
//             answer ="alpha";    
//             break;
//             case 2:
//                 answer = "beta"
//                 break;
//                 case 3:
//                     answer ="gamma";
//                     break
//                     case 4:
//                     answer ="delta";
//                     break;
                
//     }
//     return answer; 
// }

// console.log(caseInSwitch(1));

// Default like
// function switchOfStuff(val) {
//     var answer = "";
//     switch (val) {
//         case "a":
//         answer = "apple"
//         break ;
//         case "b":
//             answer = "bird";
//             break;
//             case "c":
//                 answer = "car";
//                 break;
//                 default:
//                     answer = "stuff"
//                    break;
//     }
//     return answer;
// }

// console.log(switchOfStuff(2))

// multiple statements
// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             case 2:
//                 case 3:
//                     answer = "Low"
//                     break;
//                     case 4:
//                     case 5:
//                         case 6:
//                             answer = "Medium";
//                             break;
//                             case 7:
//                     case 8:
//                         case 9:
//                             answer = "High";
//                             break;


//     }return answer;
// }
// console.log(sequentialSizes(8));


// switch statement with if and else statement
// function chainToSwitch(val) {
//     var answer = "";
// // cgange code here
// switch(val) {
//     case "bob":
//     answer = "Marley";
//     break;
//     case "42":
//         answer = "The answer";
//         break;
//         case "1":
//             answer = "There is no #1";
//             break;
//             case "99":
//                 answer ="Missed me by this much";
//                 break;
//                 case "7":
//                 answer = "At  nine o clock";
//                 break;
// }

// } 

// Returning Boolean from function
// function isLess(a,b) {
//     return a < b;
// }

// console.log(isLess(10, 15));

// returning early function
// function abTest(a,b) {
//     // Only change code here
// if (a < 0 || b < 0) {
//     return undefined;
// }
//     // only change code above this line
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
// // change values below to test your code
// console.log(abTest(2, 2));

// card counting

// var count = 0;

// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//      count++;
//         break;
//      case 10:
//         case "J":
//         case "Q":
//          case "K":
//          case "A":
//          count--;
//             break;
//     }
//     var holdbet = 'Hold'
//     if (count > 0) {
//         holdbet = 'Bet'
//     }
//     return count + " " + holdbet;
// }
// cc(2); cc('K'); cc(10); cc('K'); cc('A')
// console.log(cc(4));

// build Javascript with objects
// var ourDog= {
// "name": "Camper",
// "legs": 4,
// "tails": 1,
// "friends": ["everything"]
// };

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "tails": 2,
//     "friends": []
// };

// Accessing properties of objects
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };

// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;
// console.log(testObj);

// Accessing Objects with brackets
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };
// var entreeValue = testObj["an entree"]
// var drinkValue = testObj["the drink"]
// console.log(entreeValue);

// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas",
// };

// var playerNumber = 16;
// var player = testObj[playerNumber]
// var moyonumber =20
// console.log(moyonumber);
// we use dot notation to change objects
// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };
// // change var statements here
//     ourDog.name = "Happy player";


// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// // add an element object
// // myDog['bark'] = "woof!"
// delete myDog.tails

// console.log(myDog);

// using objects
// function phoneticLookup(val) {
//     var result = "";
      
//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "Charlie": "Chigaco",
//         "delta": "Denver",
//     };
// result = lookup[val];

// return result;
// }
// // Change this value to test
// console.log(phoneticLookup("Charlie"));
 
// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"

// };
// function checkObj(checkProp) {
//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     } else{
//         return "Not found"
//     }
// }

// console.log(checkObj("gift"));

// manipulating complex object

// var myMusic = [
//     {
//         "artist": "Billy Joel",
//         "title": "Piano Man",
//         "release_year": 1973,
//         "formats": [
//             "CD",
//             "8T",
//             "LP",

//         ],
//         "gold": true

//     },

//     {
// "artist": "Beau Carnes",
// "title": "Ceeal Man",
// "release_year": 2003,
// "formats": [
//     "YouTube video"
// ]
//     }
// ]

// Annested arrays


// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },

//     {
// type: "trees",
// list:[
//     "fir",
//     "pine",
//     "birch"

// ]
//     }
// ]

// // mention the name the object after getting the index which is lists
// var secondTree = myPlants[1].list[1]; 
// console.log(secondTree);

// Record collection
// var collection = {
//     "2548": {
//         "album": "Slippery When wet",
//         "artist": "Bon Jovi",
//         "tracks": [
//             "Let It Rock",
//             "Give love a Bad name"
//         ]

//     },

//     "2468": {
//         "album": "1999",
//         "artist": "Prince",
//         "tracks": [
//             "1999",
//             "Litle Red Corvette"
//         ]
//     },

//     "12345": {
//         "artist": "Robert Palmer",
//         "tracks": []

//     },
//     "5439": {
//         "album": "ABBA gold"
//     }
    
// };
// // keep a copy of the collection for tests
// var collectionCopy = JSON.parse(JSON.stringify(collection));
// // only change code below this
// function updateRecords (id, prop, value) {
// if (value ==="") {
//     delete collection[id][prop];
// }else if (prop ==="tracks") {
//   collection[id][prop] = collection[id][prop] || []; 
//   collection[id][ prop].push(value);
//     } else {
//         collection[id][prop] = value;
//     }

//     return collection;
// }
// updateRecords(2468, "tracks", "test");
// console.log(updateRecords(5439, "artist", "ABBA"));

// Loop
// var myArray = [];

// var i = 0;
// while(i < 5) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);


// ForLoop
// Initialisation starts before any 
// var ourArray = [];

// for (var i = 1; i < 5; i++) {
//     ourArray.push(i);
// }
// console.log(ourArray);


// Iterate odd with Loop
// var ourArray = [];

// for (var i = 0; i < 10; i +=2) {
//     ourArray.push(i);
// }
// console.log(ourArray);

// var myArray = []
// for (var i = 1; i < 10; i +=2) {
//     myArray.push(i);
// }
// console.log(myArray);
// count backward
// var ourArray = [];
// for (var i = 10; i > 0; i -= 2) {
//     ourArray.push(i);

// }

// console.log(ourArray);
// var ourArr = [9, 10, 11, 12];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i]
// }
// console.log(ourTotal);


// nested Array
// function multiplyAll(arr) {
//     var product = 1;

//     for (var i= 0; i < arr.length; i++){
//         for (var j=0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
       
//     }
    
//     return product;
// }


// var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(product);

// Iterate Do
// var myArray = [];
// var i = 10;

// // Only change code below this line
// // while Loop will run one time
// do  {
//  myArray.push(i);
//  i++ 
// } while (i < 5)

// console.log(i, myArray);

// Profile LookUp

// "firstName"


// // decimal function
// function randomFraction() {

//     return Math.random();
// }

// console.log(randomFraction());

// var randomNumberBetween0and19 = Math.floor(Math.random () * 20);

// function randomWholeNum() {


//     return Math.floor (Math.random() * 10)
// }

// console.log(randomWholeNum());
// function randomRannge (myMin, myMax) {

//     return Math.floor (Math.random () * (myMax - myMin + 1)) + myMin;
// }

// var myRandom = randomRannge (5, 15);

// console.log(myRandom);

// function convertToInteger (str) {
// return parseInt(str)
// }
// console.log(convertToInteger("56"));

// function convertToInteger (str) {
// return parseInt (str, 2)
    
// }
// convertToInteger ("10011")

// condition? statement tenary operation

// function checkEqual (a, b) {
//     return a === b ? true : false;

//     return a=== b;
// }
// console.log(checkEqual(1, 2));

// function checkSign(num) {
//     return num > 0 ? "positive" :  num < 0 ? "negative" : "zero"
// }

// console.log(checkSign(0));

// using let and var
// let doesnot allow u declare variable twicevar catName = "Quincy"
// let catName = "queen";
// let quote;

//  catName = "Beau";

// function catTalk() {
// "use strict";

//  catName = "Oliver";
// quote = catName + " says Meows!"


// }
// catTalk()

function chcekScope() {
    "use strict"
}


