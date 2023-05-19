// console.log('Hello');


//*Valur and variable in javascript

// var myname = 'Abhishek';
// console.log(myname);
// cons1ole.log(typeof(myname));

// var myFriend = "Abhishek" + "Sharma";
// console.log (myFriend);
// console.log(typeof(myFriend));
//console.log(false -  true);

//**Interview Question */
//** Question1 - Difference b/w null and undefined? */
//**Null - eg. */
// var myname = null;
// console.log(myname);
// console.log(typeof(myname));  

//*Udefined Eg. */
//* when we dont assign the value to the variable called undefined
// var iamstandby;
// console.log(iamstandby);
// console.log(typeof(iamstandby));

//*Question - 2
//* What is NaN(not a number)?
//* NaN eg. --when we minus the two strings and the value given in the output called nan.
//*console.log("Abhi" - "Sharma");
//* Its show the output NaN because when we subtract the two string the output will be NaN
//* NaN is the property of the global object, in other word it is a variable in global scope
//*eg. of NaN---

// var myname = "Abhishek";
// var myPhonenumber = "9805882744";
// console.log(isNaN(myname));
// console.log(isNaN(myPhonenumber));
// if(isNaN(myname)){
//     console.log("please enter a valid phone number");
// } 

// console.log(NaN === NaN);
//console.log(Number.NaN === NaN);
// console.log(isNaN(NaN));
 //console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));

//*Question-3
//* What is difference b/w == & ===?
//* Answer- == define the equality b\w two numbe ror compare two variable  and give the output in Boolean Expression
//*         === compare two variable and also give the type of operator then give the boolean expression in the form of True\False. 


//***  Expression & Operator 
//* 1. Assignment operator
        //* (= The assignment operator assigns a value to its left operand based on the value of its right operand)

    //    var x = 5;
    //     var y = 5;
    //   console.log("is both the x and y are equal or not" + x == y ); //output show false because we use the + oprator in the console that concatinate the x or y into the x+y value that why its show the false output

    //  console.log( x == y); //ist shows the true because x is equal to y

    //*2. Arithmetic Operator
            //* an arthimetic operator takes numerical value(either litegrals or variable) as their operands and
            //* return a single numeric value

          //console.log(3+3);
            //console.log(10-5);
            //console.log(20/5);
           //console.log(5*6);

         //console.log("Remainder Remain " + 81%8); //*this % sign called modular operator means how much remainder left

          //Incremnet Operator & Decremen Operator(x++ & ++x, x-- & --x)
          // Increment Operator x++ 
          //IF WE USE POSTFIX, with operator after operand(for example, x++)
          //the incremnet operator incremnets and returns the value before incremneting
          // eg.
          // var num = 15;
          // var newNum = num++;
          // console.log(num);
          // console.log(newNum);
          //   //*postfix incremnet operator means the expression is evaluated first using the orignal value of  the variable and then the variavle is incremneted


            //If used prefix with operator before operand for example ++x
            //* the increment operator incrment and returns the value after incermenting.

            //* Pefix increment operator means the variable is incremented first anf then the expression is evaluated using the new value of the variable

        //   var num = 15;
        //   var newNum = ++num + 5;
        //  console.log(num);
        //   console.log(newNum);

          //*Decremnt operator    x-- , --x
          //psotfix x--
          // var num = 15;
          // var newNum = num-- + 5;
          // console.log(num);
          // console.log(newNum);

          //   Prefix --x
          // var num = 15;
          // var newNum = --num + 5;
          // console.log(num);
          // console.log(newNum);

          //*3. Comparison Operator -- A comparison operator compares its operands and returns a logical value based on whether the comparison is true
            //*Equal operato(==)
            //* Not Equal Operator(!=)
            //*Greater Than (>)
            //*Less Than(<)
            //*Greater Than or equal(>=)
            //*Less than or equal (<=)
        //*var a = 30;
          //*var b = 10;
          //*console.log(a==b);
         //* console.log( a!=b);
         //*console.log(a>b);
        //* console.log(a<b);
       //* console.log(a>=b);
       //* console.log(a<=b);

       //*4. logical Operator-- Logical operator are typically used with boolen(logical) values when they are they return a boolean value
           

      //* var a = 30;
       //*var b = -20;

        //* type -- Logical AND(&&)
        //*console.log(a>b && b>0); //* in and operator the both input will be right then its shows us the output

        //*Logical OR (||)(we use many operation but if any one opertion will be true its shows the output true for all)
       //* console.log((a<b) || (b>0) || (b>0) );

       //*Logical NOT(!)
       //*The logical NOT(!) operator( logical complement, negation) takes truth to falsity and vice versa
       //*console.log(!((a>0) || (b<0)));
      //* console.log(!false);

      //*5. String Concatenation Operator -- The concatination operator (+) concantinates two string value together returning another string that is the union of the two operand string
     //* console.log("Abhishek" + "Sharma")
      //*var myName = "Abhishek";
      //*console.log(myName + "kumar");
      //*console.log(myName + "Sharma");

      //*Challenge--
      //*1. What willl be the output of 3**3?
      //*2. What will be the output when we add a number and a string?
      //*3. Write a program to swap two number?
      //*4. Write a program to swap two number without using third variable?

     //*1.Ans- console.log(3**3); //*output will be 27(3*3*3)This is called Exponentitation Operator(**)

    //*2.Ans-- console.log(12 + "abhishek"); output will be 12abhishek

 //*   var a = 5;
    //*var b = 10;

   //*3.Ans- 
   //* var c = b;
  //*  b = a;
   //* a = c;
   //* console.log("the value of a is" + a);
   //* console.log("the value of b is" + b);
  
   //*4. Write a program to swap two number without using third variable
  //* var a = 5;
   //*var b = 10;
    //*a = a + b; 
    //*b = a - b; 
    //*a = a - b;
    //*console.log("the value of a is" + a);
    //*console.log("the value of b is" + b);

    //*Control Statement & Loops*/
    //* If-Else--
    //*           The if statemnet executes a statement if a specified condition is truthly.
    //*           If the condition is falsy, another statement can be executed
    //*Example--
     //*var tomr = 'sunny';

     //*if (tomr == 'rain'){
        //*console.log( 'take a umbrella' );

     //*} else{
        //*console.log('No need to take umbrella');
     //*}
      
    //Example--is year a leap year or not?

                //  var year = 2020;
                //     debugger;
                //   if (year % 4 === 0) {
                //         if (year % 100 === 0) {
                //             if (year % 400 === 0) {
                //                 console.log('This Year ' + year + ' is a leap year')
                                
                //             } else {
                //                  console.log('This year ' + year + ' is not a leap year');     
                //             }
                            
                //         } else {
                //             console.log('This year ' + year + ' is a Leap year');
                            
                //         }
                   
                //   } else {
                //         console.log('This year ' + year  +' is not a  leap year');
                        
                //     }


    //* What is truthy and falsy value in js?

    //* We have total five falsy value in java script
    //* 0,"",undefined,null,NaN,

  //  if (score = 0) {
  //      console.log('We loss the match');
  //  } else {
  //      console.log('we won the match');
  //  }


   //* Conditional (ternary ) operator
   //*The condition operator is the only javascript operator that take three operands

   //* variablename =(condition) ? value1:value2

        //*    var age = 17;
        //*    console.log(( age >= 18) ? "you can vote" : " you can not vote");

        //*Swich Statement-- 
        //*                 Evaluates an expressions , matching the expression value to a case clause and executes statements associatedd with that case
        //* Example---
        //* Find the arean of circle , triangle and rectangle?

     //*   var area = "circle";
     //*   var PI = 3.142 , l =5, b = 4, r =3;

     //*   if (area == "circle") {
     //*       console.log("the area of the circle is : " + PI*r**2);
     //*   }
     //*   else if(area == "triangle"){
     //*       console.log("the area of the triangle is : " + (l*b)/2);

    //*    }
     //*   else if(area == "rectangle"){
     //*       console.log("the area of the rectangle is : " + (l*b));

     //*   } 
     //*    else {
     //*       console.log("Please enter the valid data");
            
     //*   }

     //* using switch statement-----

        //*   var area = "circle";
        //*var PI = 3.142 , l =5, b = 4, r =3;

        //*switch(area){
        //*case "circle":
        //*  console.log("the area of the circle is : " + PI*r**2);

         //*break;//* Break terminate the current loop switch or label statement and transfer program contol to the starement following terminated statement. 
            
         //*case "triangle":
         //*  console.log("the area of the triangle is : " + (l*b)/2);
                
         //*break;

         //*case "rectangle":
         //*   console.log("the area of the rectangle is : " + (l*b));

         //*                break;

        //*          default:
        //*          console.log("please enter valid data");   

        //*}


        //* While loop statement ---------
        //* while statement creates a loop that executes a specified statement as long as the test condition evaluates to true
        
        //* Example--

      //  var num = 0;
      //   //block scope - its happened the while condition is false and output show nothing because its dont enter in the block of console.
      //   while(num <= 10){
      //      console.log(num);
      //      num++;
      //   }

        //* Do While loop------------
        //Example----
        // var num = 0;

        // do{
        //    console.log(num);
        //    num++;
        // }while(num <= 10);

        //* For Loop----
      
        //*    for(var num = 0; num <= 10; num++){
         //*       debugger;
         //*       console.log(num);
         //*   }

         //*Challage For loop---

         //* Java script program to print  table for given number(8)?

        // for(var num = 1; num <=10 ; num++){
           
        //  var tableof = 8;
        //    console.log( tableof  + " * " + num + " = " +tableof*num);
        // }


        //* Function in Java Script-------
        //* A java script function is a block of code designed to perform a partcular task.


        //* Function Defination

        //* Before we use a function we need to define it

        // A function defination (also called a function declartion or function statement)
        // consist of the function keyboard followed by:

        //* The name of  the function.
        //* A lsit of parameter to the function enclosed in parentheses and seprated by  commas.
        //* The javascript statements that define the function enclosed in curley brackets, {.....}.

        //*Example

      //  function sum(){
      //       var a = 10; b = 20;
      //      var total = a+b;
      //      console.log(total);
      //   }
       
        


        //* Calling Funtion---
        //* Defining a funtion does not execute it.
        //* A javascript function is executed when "something" invokes it (calls it)

       //* sum( );//*calling sum function

        //* Function Parameter vs Function Arguments?
        //* Function Parameter are the names listed in the function defination
        //* Function arguments are the real values passed to the function at the time of calling.

        //*  function sum(a,b){ //*(a,b are the the parameter which are passes in the function)
        //*    var total = a+b;
        //*    console.log(total);
       //* }
       //* sum();
       //* sum(20,30)//*These are arguments
        //*sum(50,50)

        //* Function expression
        //* function expression  simply means
        //* create a function and put it into the variable
        
        // function sum(a,b){ //*(a,b are the the parameter which are passes in the function)
        //        var total = a+b;
        //       console.log(total);
        //     }
            
        //   var funExp = sum (20,30);//*These are arguments
        //    funExp;  // Function expression mean call a function and put into the variable and then call the variable with name of fumction expression.

           //*INTERVIEW QUESTION---
            //*WHY FUNCTION---
            //* You can reuse code: Define the code once,and use it many times. you can use the same code many times with different arguments to produce different results.
            //or---- A function is a group of resuable code which can be called anywhere in ypur program.This eliminates the need of writing the same code again and again.

           //* Return keyword----
           //* When js reaches a return statement,
           //* the function will stop executing

           //* The function often compute a return value.
           //* The function value is returned back to the caller

        //   function sum(a,b){
        //   return total = a+b;
        //  }
         
        //   var funExp = sum (20,30);
        //   console.log(funExp);

           //*Anonymous Function--
           //* A function expression is similar to and has the same syntax
           // as a function declaration one can define named
           // function expression(where the name of the expresssion might be used in the call stack for example)
           // or anonymous function expression.
            //Function without a name is called anonymous function

        //   var funExp =  function (a,b){
        //    return total = a+b;
        //  }
        //    var sum = funExp(5,15);
        //  console.log('the sum of two no is ' + sum);




         //* Welcome to ECMAScript-----------Modern javascript*/

         //*1. LET vs CONST vs VAR

        // var myName = "Sharma Technical";
        // console.log(myName);
        // myName = "Abhishek Sharma";
        // console.log(myName);

      //  let myName = "Sharma Technical";
      //   console.log(myName);
      //    myName = "Abhishek Sharma";
      //    console.log(myName);

         //* var --- function scope
         //* Block Scope----let & const
        //* let--we can create variable with my name and give them the value, but later on we can assign other value to that lets and variable we can create first With myName.
         //* const -- in const we can put value once into the variable we can not change these value later on.---- 

         
      //  const myName = "Sharma Technical";
      //   console.log(myName);
      //   myName = "Abhishek Sharma";
      //   console.log(myName);


      //  function biodata (){
      //   const myFirstname = "Abhishek";  //* using var we can we can acces value out of the block like we acces 'innerouter'
      //   console.log(myFirstname);    
      //   if(true){
      //      const myLastname = "Sharma";
      //      console.log("inner " + myLastname);
      //      console.log("inner " + myFirstname );

      //   }
      //     console.log("innerouter" + myLastname);//* but using let and const we can not use value which can define out of the block

      //  }
      // biodata();

      //*Template literals (Template Strings)-------
   //*Example---
      //*JavaScript program to print table for given number?

    //*  for(let num = 1; num <= 10; num++ ){
     //*    let tableof = 12;
       //*  console.log(tableof + " * " + num + " = " + tableof*num); instead using this we can use template literala eg.
     //*  console.log( ` ${tableof} * ${num} = ${tableof*num} ` );      
    //*  }


    //* Default parameter
    //* Default function parameter allow named parameter to be initialized with default values if no value or undefined is passed.



    //*Fat Arrow Function---
    
    //*Normal way of writing functiom
    // 

  //   function sum (){
  //    let a = 5; b = 10;
  //    let sum  = a+b;
  //        return ` the sum of two numbers  ${sum} `;


  //  }
  //  console.log(sum());

       
    //*how to convert in into Fat Arrow Function
    
  //  const sum = () => ` the sum of two numbers  ${(a=5)+(b=6)} `;

  //  console.log(sum());
    

   //*Array in JavaScript------
   //*when we use var we can stored omly one value at a time 
  // var friend1 = 'ramesh';
  // var friend2 = ' suresh';
   //var friend3 = ' prience';

   //* when we feel like storing multiple value in one variable then (in array we can store multiple data in single vairable)
   //* instead of var we will use an array

   //var myFriend = ['ramesh','suresh','prience'];

   //*in js we have an array class and 
   //* array are the prototypee of this class

   //* example-

   //var myFriend = new Array;
   //var myFriend = ['ramesh','suresh','prience'];

   //*Array subsection------ Traversal in array
   //*navigate through an array

   //*if we want to get the single data at a time and also
   //if we want to change the data

      // var myFriend = ['ramesh','suresh','prience'];
      // console.log(myFriend[myFriend.length -1]);
      // console.log(myFriend.length);

       //* if we want to check the length of the array
       //* console.log(myFriend.length);

        //* we use for loop to navigate------

      //  var myFriend = ['ramesh','suresh','prience'];
      //   for( var i = 0; i<myFriend.length; i++){
      //      console.log(myFriend[i]);
      //  }

        //*After es6 we have for..in and for ..of loop too

        //*For-in...show the index no.in the output
      //   var myFriend = ['ramesh','suresh','prience'];

      //  for(let elements in myFriend){
      //   console.log(elements);
      // }

      //*For of...show the elements name on the output

  //    var myFriend = ['ramesh','suresh','prience'];
  //     for(let elements of myFriend){
  //     console.log(elements);
      
  //  }


      //*Array .Prototype. ForEach()---
      //* calls a function for each element in the array.

    //   var myFriend = ['ramesh','suresh','prience'];
    //   myFriend.forEach(function(element,index,array){
    //   console.log(element + ' index : ' + index + "");

    //  });

      //*Same using fat arrow--
    // var myFriend = ['ramesh','suresh','prience'];
    //  myFriend.forEach((element,index,array)=>{
    //     console.log(element + ' index : ' + index + " " + array);
         
    //   });


      //*Searching and Fillter in array---

      //*array.prototype,indexof()
      //*return the first index of an element within the array equal
      //* to an element or -1 if none is found . it search the element from the 0th index number

    //  var myFriend = ['ramesh','suresh','prience'];
    //   console.log(myFriend.indexOf('ramesh',0));
      

      //*Array.prototype.lastindex()
      //*retrns the last index of an element within the array equal
      //*to an element or -1 if none is found it search the element last to first

    // var myFriend = ['ramesh','suresh','prience','aksahy'];
    // console.log(myFriend.lastIndexOf('ramesh',3));

     //*Array.prototype.includes()
     //*Determines whether the array contains a value,
     //*returning true or false as appopriate.

    //  var myFriend = ['ramesh','suresh','prience','kasis', 'akash'];
    //  console.log(myFriend.includes('suresh' , 1));

    //*Array.prototype.find()----

    //*arr.find(callback(element[, index[,array]])[,thisArg])
    
    //*Returns the found element in the array if some element in the 
    //*array satisfies the testing function or undefined if not found.
    //* Only problem is that it return only one element

    // const  prices = [200,300.350,400,450.500,600];
    // console.log(prices.find((currVal)  => currVal < 400));

      //* Array.prototype.findindex()
      //* Returns the found index in the array, if an element in the
      //* array satisfies the testing function, or -1 if not found  (its give output in the form of index no. or if condition is not satisfied then is give output -1 )
      // const  prices = [200,300.350,400,450.500,600];
      // console.log(prices.findIndex((currVal)  => currVal < 400));

    //*Array.prototype.filter()
    //*Returns a new array containing all elements of the calling
    //*array for which the provided filtering function returns true. if the condition is not satisfied then its return the empty array

  //  const  prices = [200,300,350,400,450,500,600];
  //     const newPriceTag = prices.filter((elem) => {
  //      return elem >= 400;
  //     })
  //     console.log(newPriceTag);
    
    //* How to sort an array------

    //*Array.prototype.sort()

    //* This sort() method sorts the elements of an array in place and
    //*returns the sorted array. The default sort order is ascending built upon converting the elements into strings
    //*then comparing their sequence of UTF-16 code units values

    //const months = ['March', 'May', 'June','August','December', 'November','Janurary'];
  // console.log(months.sort());
    
   //   const aaray1 = [1 , 30, 20, 25, 4 ,40, 49];
  // console.log(aaray1.sort());

   //*However if numbers are sorted as strings
   //*25 is bigger than 100 becasue 2 is bigger than 1

   //*Because of this the sort() method will produce incorrect
   //* Result when sorting numbers




   //*Perform CRUD operation in array

   //*Array.prototype.push()
   //*The Push() method adds one or more elements to the end of an array and returns the new length of the array

//   const animals = ['pigs','goats','sheep'];
//   const count = animals.push('chicken','cat');
//  console.log(animals);
//    console.log(count);

   //*Array.prototype.unshift()
   //*The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
  //*Example.--

  // const animals = ['pigs','goats','sheep'];
  //  const count = animals.unshift('chicken','cat');
  //  console.log(animals);
  //  console.log(count);

   //*2nd example---

  //   const myNumber = [1,2,3,5];
  //  myNumber.unshift(4,5);
  //  console.log(myNumber);

   //*Array.prototype.pop()
   //*The pop() method removes the last element from an array and returns that removed \elements This method change the leggth of the array.

  // const plants = ['broccali','cauliflower','kale','tomato','cabbage'];
  // console.log(plants);
  // console.log (plants.pop());
  // console.log(plants);

  //*Array.prototype.shift()
  //*The shift method removes the first elements from an array and returns that removed elements. This method changes the length of the array.

//   const plants = ['broccali','cauliflower','kale','tomato','cabbage'];
//  console.log(plants);
//  console.log (plants.shift());
//  console.log(plants);

  //*Array.prototype.splice()
  //*Adds or removes elements of an array.

  //*Challenge Time
  //*1.Add Dec at the end of an array?
  //*2.What is the return value of splice method?  Give output in the form of an empty array.
  //*3.update march to Marh(update)?
  //*4.Delete june from an array?

 
  //*1.Ans--
//  const months = ['Jan','march','april','june','july'];

  // const newMonths = months.splice(months.length,0,'dec');// 0 is define the delete count means which elements we are deleting in a array
  // console.log(months);

//   //*2.Ans--
//  const months = ['Jan','march','april','june','july'];
//  const newMonths = months.splice(months.length,0,'dec');  
//  console.log(newMonths);

  //*3.Ans----

//  const months = ['Jan','march','april','june','july'];
//  const indexOfMonth = months.indexOf('march');
// if(indexOfMonth != -1){
//    const  updateMonth = months.splice(indexOfMonth,1,"March");
//   console.log(months);

// }else{
//        console.log('no such data found');
//}


//*4.Ans---
// const months = ['Jan','march','april','june','july'];
//   const indexOfMonth = months.indexOf('june');
//  if(indexOfMonth != -1){
//    const  updateMonth = months.splice(indexOfMonth,1);
//    console.log(months);
//    console.log(updateMonth);

//  }else{

//   console.log('no such data found');
//  }

//*Map and Reduce method  //*Class time 6.00.0 youtube Important topic

//*Array.prototype.map()
//*let newArray = arr.map(callback(CurrentValur[ index[ array]]){
  //return element for newArray, after executing something

//*}[thisArg]);
  
//* Returns a new array containing the results of calling a 
//*function on every element in this array

// const array1 = [1,4,9,16,26];

// let newArr = array1.map((currElem,index,arr) =>{
//   return currElem > 9;
// } )
// console.log(array1);
// console.log(newArr);


// const array1 = [1,4,9,16,26];
// let newArr = array1.map((currElem,index,arr) => {
//   return `index no = ${index} and the value is ${currElem}`

// })
// console.log(newArr);

//* it returns new array without mutating the orignal array

//*Challenge Time---
//*1. -- Find the square  root of each element in an array?

  //*let arr = [25,36,49,6,81];

 //*2.--- Multiply each element by 2 and return only those elements which are greater than 10?
 
  //* let arr = [2,3,4,6,8];


  //*1.Ans---
  //  let arr = [25,36,49,64,81];

  //  let arrsqr = arr.map((currElem)  => {
  //   return Math.sqrt(currElem);
  //  } )
  //  console.log(arrsqr);

   //*2.Ans----we can use the chaining too
//   let arr = [2,3,4,6,8];
//    let arr2 = arr.map((currElem) => currElem * 2).filter((currElem) => currElem > 10 ).reduce(( Accumulator,currElem)  => {
//    return Accumulator += currElem;
//  })
//   console.log(arr2);


  //*Array Reduce()---
  //*Flatten an array means to convert the 3d or 2d array into a single dimensional array 

  //*The reduce() method executes a reducer function(that you provide) on each element of the array, resulting in single output value.

  //* The reduce function takes four arguments:

  //*Accumulator //means add two elements 
  //* Current value
  //* Current Index
  //* Source Array*/

  //* let arr = [5,6,2];

   //let sum = arr.reduce(( Accumulator,currElem,index,arr)  => {   //*Instead of sum we can perform *,- /,+
    //  return Accumulator += currElem;
  // })
  // console.log(sum);*/

   //*How to fatten an array
   //converting 2d and 3d array into one dimensional array

    //* const arr = [
   //* ['Zone_1' , 'Zone_2'],
    //*['Zone_3'] , ['Zone_4'],
    /*['Zone_5'] , ['Zone_6'],
   //* ['Zone_7'] ,['Zone_8']
  //* ];
   //*let flatArr = arr.reduce((accum, currVal) => {
   //* return accum.concat(currVal);
  
   //*})
  
   //*console.log(flatArr);*/  



   //*STRINGS IN JAVASCRIPT--------

    //* A javascript  Strings is zero or more characters written inside quotes.

    //*JavaScript strings are used for storing and manipulating text.
    //*You can use single or double quotes
    //*Strings can be created as primitives,
    //from strings literals or as object using the strings() constructor


  //  let myName = "Abhishek Sharma";
  //  let myChannelName = 'abhishek sharma';
     
  //  let ytname = new String("Abhi Technical")  //*output in the form of array output -[strings :'Abhi Technical']

  //  console.log(myName);
  //  console.log(ytname);


   //*How to find the length of a strings?

   //*String.prototype.length
   //*Reflects the length of the string.

  
//  let myName = "Abhishek Sharma";
//   console.log(myName.length);


  //*ESCAPE Character--------

// let anySentences = "We are the so-called \"Vikings\"  from the north.";
//  console.log(anySentences);


 //* let anySentences = 'We are the so-called "Vikings"  from the north.';
 //* console.log(anySentences);

  //*If you dont want to mess, simply use the alternative quotes



  //* Finding a string in a string

  //*String.prototype.indexof(searchvalue [, fromindex])

  ///*The indexof() method returns the index of the position of the first occurrence of a specified text in a string

//  const muBioData = " I am the abhishek Technical";
//   console.log(muBioData.lastIndexOf("t" , 9));

 //* Searching for a string in a string

 //*String.prototype.search(regexp)
 //*The search() method searches a string for a specified value and returns the position of the match

//  const muBioData = " I am the Abhishek Technical";
//  let sdata  = muBioData.search("Abhishek");
 
//  console.log(sdata);

 //*The search() method cannot take a second start position argument


 //*Extracting String Parts-------

 // These are 3 methods for extracting a part of a string:

 //* slice(start, end)
 //* substring(start, end)
 //* substr(start, length)

 // The slice() Method
 // slice() extracts a part of a string and returns the extracted part in a new string.

 // The method takes 2 Parameter: the start position and the end position ( end not included).

// var str = "apple, bananaa, kiwi";

//  let res = str.slice(7,-1);
//  console.log(res);

 //*The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given and argument.

 //* Note 1-- The original array will not be changed.


 //*Challenge time------

 //* --- Display only 280 character of a string like the one used in Twitter?

  // let myTweets = "Hi My Name is Abhishek Sharma and i want to become a software developer and that my  goal  and i have to complete the cahllenge in 30 days for becoming a software developer to icerese my skill amd i have to face the interview again afte the 3 years the god will help me in the all way and full filled my all dreams i have to be patience and thats gives me the strength for fight with all my bads that was stopping me achieve my goals in the only 1 months";
  // let myActualTweet =myTweets.slice(0,280);
  // console.log(myActualTweet);
  // console.log(myActualTweet.length);

 //* The substring() Method
 //* Substring() is similar to slice()
 
 //* The diffrence is that substring( ) cannot acceot negative indexes.

//  var str = "apple, bananaa, kiwi";
//  let res = str.substring(8,-2);
//  console.log(res);

 //*If we give negative value then the charcaters are counted from the 0th pos.

 //*The substr() Method
 //* substr() is similar to slice().

 //* The difference is that the second parameter specifies the length of the extracted part.

//  var str = "apple, bananaa,kiwi";
//  let res = str.substr(7,-2);
//  //let res = str.substr(-4) //* This is for the count the string from the last. backward.
//  console.log(res);


//*Replacng.string.content()

//*String.prototype.replace(searchfor , replacewith)

//* The replace() method replace a specified value with another value in a string.

// let myBioData = `I am Abhishek Kumar sharma `;
// let replacedata = myBioData.replace("sharma","Sharma");
// console.log(myBioData);
// console.log(replacedata);



//*points to remember
//*1.: The replace() method does not change the string
//* it is called on. It returns a new string
//*2.: By default, the replace() method replaces only the first match
//*3.: By default the replace() method is case sensitive writing KUMAR(with upper case) will not work

//*EXtRACTING String Character--

//* There are 3 method for extracting string character


//*1.-charAt(position) -- mean character on which position
//*2.-charCodeAt(position)mean charcater at which psotion what code it is
//*Property access []

//*Two charAt() Method
//*The charAt() Method returns the character at a
//*specified index(position) in a string

// let str = "HELLO WORLD";
// console.log(str.charAt(9));


//*2.charCodeAt() Method
//*The charCodeAt() method returns the unicode of the character at a specified index in a string:
//*The methid returns a UTF-16 code(an integer between 0 and 65535)

//* The unicode standard provides a unique number number for every character no matter the platform, device, application or language UTF-8 is a popular unicide encoding which has 88 bit code units

// var str = "HELLO WORLD";
// console.log(str.charCodeAt(6));


//*Challenge Time-----
//* Return the Unicode of the last character in a string

// var str = "HELLO WORLD";
// let lastchar = str.length;
// console.log(str.charCodeAt(lastchar-1));

//*Property access[]------

//*ECMAScript 5 (2009) allows property access [ ] on strings

  //  var str = "HELLO WORLD";
  //  console.log(str[1]);


//*Other useful method--

// let myname = "Abhishek Sharma";
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());

//* The cancat method()
//*concat() joins two or more strings

// let fname = "abhishek";
// let lname = "sharma";

// console.log(fname + " " + lname);
// console.log(`${fname} ${lname}`);
// console.log(fname.concat(lname));
// console.log(fname.concat(" ",lname));

//*String.trim()
//*The trem method removes whitespace from both sides of a string

// var str = "             hello       ";
// console.log(str.trim());



//*Converting a string to an array.

//*A string can be converted to an array with the split() mrthod

// var txt = "a,b,c,d,e";
// console.log(txt.split(","));
// console.log(txt.split(" . "));
// console.log(txt.split(" | "));


//*DATE & TIME IN JAVASCRIPT----

 //*Date Methods(get & set)
 //*Time Methods(get & set)

//*JavaScript object responds a single moment in time in a platform- independent format, Date objects contain a number that reepresents millisecous since 1 january 1970 UTC

//* Creating Date Objects
//* There are 4 ways to create a  new date object

//*new Date()
//*new Date(year,month,day,hours,minutes,seconds,milliseconds) it taks 7 arguments
//*new Date(milliseconds)
//*we cannot avoid month selection
//*new Date(date string)

//*new Date()
//*Date object are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);
// console.log(new Date().toLocaleString());

//*Date.now()
//*returns the numeric value corresponding to the current time the number of milliseconds elapsed since january 1, 1970 00:00:00 UTC

// console.log(Date.now());

 //*new Date(year, month, ....)
//* 7 numbers specify year, month, day,hour,minute,second and milliseonds(in that order)
//*Note: Javascript counts months from 0 to 11.

//*January is 0, December is 11.

// var d = new Date(2018,11,24,10,33,30.0);
// console.log(d.toLocaleString());

//*new Date(datestring)
//*new Date(datestring) creates a new date object from a date string


// var d = new Date("Octobor 13,2014  11:13:00");
// console.log(d.toLocaleString());

//*new Date(milliseconds)
//*new Date(milliseconds) creates a new object as zero time plus miliiseconds:

//*console.log(Date.now());


// var d = new Date (1680766349866); //*pass milliseconds in string
// console.log(d.toLocaleString());


//*Dates Method---

// const curDate = new Date();


// How to get the indivisual date--

// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());


//*how to set the indivisual date
// const curDate = new Date();
// console.log(curDate.setFullYear(2023));

// the seefullyear() method can optionally set month and day

// console.log(curDate.setFullYear(2023,10,5));
// console.log(curDate.setMonth(10));
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());


//*TIMES METHOD----

// const curTime = new Date();

// How to get the indivisual Time

// console.log(curTime.getTime());
// The get times method returns the number of milliseconds since January 1,1970
// console.log(curTime.getHours());
// //*The get hpurs method returns the hours of a date as a number(0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


//*How to set the indivisual Time---
 
// let curTime = new Date();
// console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds());


//-- Math Object In Java Script---
  
// The javascript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI);

// Math.round()
// Returns the value of x rounded to its nearest integer.

// let num = 10.2565;
// console.log(Math.round(num));

// Math.pow()
// Math.pow(x, y)  //returns the value of x to the power of y

// console.log(Math.pow(2,3)); //(2*2*2)


//Math.sqrt()
//Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));


//Math.abs()
//Math.abs(x) returns the absolute(positive) value of x

// console.log(Math.abs(-55));

// console.log(Math.abs(-55.5));

// console.log(Math.abs(-955));

// console.log(Math.abs(4-6));

//Math.ceil()
//Math.ceil(x) returns the value of x rounded up to its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.49));
// console.log(Math.ceil(99.1));


//Math.floor()
//Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));

// Math.min()
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30 ,20 , -8, -200));

// *Math.max()
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30 ,20 , -8, -200));


// Math.random()
// Math.random() returns the random number between 0(inclusive),and 1......

// console.log(Math.floor(Math.random()*10));

// Math.trunc()
// The trunc() method returns the integer part of number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

  
//Pratice Time

//if the argument is a positive number, Math.trunc() is equivalent to Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().



//DOM(Document object model) in javascript-----  in mind?>>


//Events in javascript----

//HTML events are things that happen to HTML elements.
//when javascript is used in HTML pages js can react on these events.

//HTML Events
//An HTML event can be something the browser does, or something a user does.

//Here are some examples of HTML events:

//An HTML web pages has finished loading
//An HTML input field was changed
//An HTML button was clicked
//Often, when events happen you may want to do somthing.


//Javascript lets you execute code when events are detected.

//HTML allows event handler attributes with javascript code to be added to HTML elements.

//4 ways of writing Events in Javascript


//1: using inline events alert();
//2: By calling a function(we already seen and most common way of writing)
//3: using Inline Events (HTML onclick ="" property and element.onclick) // if we call same refrence in onclick it can override the refrence.
//4: Using Event Listeners(addEventListener and IE`s attachEvent)



// What is Event Object?

//Event object is the parent object of the event object.
//Example--
//MouseEvent, focusEvent , KeyboardEvent . inputEvent etc.

///mouseEvent object in js.
// The MouseEvent object
//Events that occur when the mouse interface with the document belongs to the MouseEvent object

//KeyboardEvent in Javascript--
//Events that occur 


//OOPS in javascript------
//1.. what is object literals?
//2. what is "this" objects?


//1. What is object Literal?

//Object literal is simply a key:value pair data structure.
//Storing variables and function together in one container, we can refer as an object

//How to create a  object?

//*--1.-- 

// let biodata = {
//   myName : "Abhi",
//   myAge : "26",
//   getdata : function(){
//     console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//   }
// }
// console.log(biodata.getdata()); //*we use next of instead this
// biodata.getdata();


//2nd way of create object?

// let biodata = {
//   myName : "Abhi",
//   myAge : "26",
//   getdata  () {
//     console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//   }
// }
// //*console.log(biodata.getdata()); //*we use next of instead this
// biodata.getdata();


//what if we want object as a value inside an object.

// let biodata = {
//   myName : {
//     relName : "vinod",
//     channelName : "abhishek technical",
//   },
//   myAge : "26",
//   getdata (){
//     console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//   }
// }
// console.log(biodata.myName.channelName);



//------------------------ What is this Object?

//The defination of "this" object is that is conatin the current context.
// The this object can have different values depending on where it is placed.


// For example----
//  console.log(this.alert('awesome'));

 // it refer to the current context and that is window global object


//  //ex.-- 
//  function myName(){
//   console.log(this);
//  }
//  myName();


//example---
// let myCar = 'honda';
//  function myCars () {
//   console.log(this.myCar);

//  }
//  myCars();
 


//example----

// const obj = {
//   myAge :  26,
//   myName () {
//     console.log(this.myAge);

//   }
// }
// obj.myName();

//example---

// let bioData = {
//   myName : {
//     realName : "Abhishek",
//     channelName : 'Abhi Technical'
//   },
//   myAge : 26,
//   getdata (){
//   console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
// }

// }
// bioData.getdata();
  

//call method is used to call the entered of another object
// or with call(), an object can use a method belonging to another object

// but as per othrt it is  simply the way to  use this keyword or another object


// Destructuring in ES6------------

// The destructuring assignment syntax is a javascript expression that makes it possible to unpack value from arrays, or properties
// from object, into distinct variables.

// Arrat Destructuring 

//  const  myBioData = ['vindo','ramesh',26];
 

//  let myFname = myBioData[0];
//  let myLname = myBioData[1];
//  let myAge = myBioData[2];
//  console.log(myLname);
 
 

//   const  myBioData = ['Abhishek','sharma',26];
// let [myFname,myLname,myAge] = myBioData;
//  console.log(myFname);

 // we can add value too
//  const  myBioData = ['vindo','ramesh',26];
//  let [myFname,myLname,myAge,mydegree="MCA"] = myBioData;
//  console.log(mydegree);

//Object destructuring------

// const myBioData = {
//   myFname : 'vinod',
//   myLname : 'thapa',
//   age : 26
// }
// let {myFname,myLname,myAge,mydegree="MCA"} = myBioData;
// console.log(myLname);

// Object Properties

// we can now use dynamic properties 

let myName = " Abhishek"
const myBio= {
  [myName] : "hello how are you?",
  26 : "is my age"
}
console.log(myBio)

// no need to write key and value if both are same

// let myName = " Abhishek Sharma";
// let myAge = 26;

// const myBio = {
//   myName : myName,
//   myAge : myAge
//  }
//  console.log(myBio);

// Spread Operator---

// const colors = ['red','yellow','blue','pink'];

// const mycolors = ['red','yellow','green','blue','black','white'];

// //nd time add one more color on top and tell we need to write it again on myColor array too

// const MyFavColors = [ ...colors,'skyblue','green','white'];

// console.log(MyFavColors);