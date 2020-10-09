/*
//Positive and Negative//
var a = 00;
console.log(a);
if (a == 0) {
    console.log('a is 0');
} else if ( a<=1) {
    console.log('a is negative');
} else if (a >= 1) {
    console.log('a is positive');
}

var a = 100;
console.log(a);
if (a == 0) {
    console.log('a is 0');
} else if ( a<=1) {
    console.log('a is negative');
} else if (a >= 1) {
    console.log('a is positive');
}

var a = -100;
console.log(a);
if (a == 0) {
    console.log('a is 0');
} else if ( a<=1) {
    console.log('a is negative');
} else if (a >= 1) {
    console.log('a is positive');
}

//Finding greater or smaller or equal //

var a = 10;
var b = 15;

if (a > b){
    console.log("a is greater then b");
} else {
    console.log("b is greater than a");
}

var a = 100;
var b = 100;

if (a > b){
    console.log("a is greater then b");
} else if (a = b) {
    console.log("a and b is equal");
} else {
    console.log("b is greater than a ");
}
// Nesting//

var firstTwin = "Sukriti";
var secondTwin = "Prakriti";
var theyAreTwin = true ;

if (a = "Sukriti"){
    if (b ="Prakriti"){
        if(theyAreTwin){
            console.log("They Are Twins");
        } else {
            console.log("They Are Not");
        }
    }
}

var firstTwin = "Sukriti";
var secondTwin = "Prakriti";
var theyAreTwin = true ;

if ("Sukriti" == a){
    if ("Prakriti" == b){
        if(theyAreTwin){
            console.log("They Are Twins");
        } else {
            console.log("They Are Not");
        }
    }
}

var firstTwin = "Sukriti";
var secondTwin = "Prakriti";
var theyAreTwin = false ;

if (a = "Sukriti"){
    if (b ="Prakriti"){
        if(theyAreTwin){
            console.log("They Are Twins");
        } else {
            console.log("They Are Not");
        }
    }
}

var firstTwin = "Sukriti";
var secondTwin = "Prakriti";
var theyAreTwin = true ;

if ("Sukriti"== a && "Prakriti"== b && theyAreTwin ){
    console.log("They Are Twins");
} else {
    console.log("They Are Not");
}

var firstTwin = "Sukriti";
var secondTwin = "Prakriti";
var theyAreTwin = false ;

if ("Sukriti"== a && "Prakriti"== b && theyAreTwin ){
    console.log("They Are Twins");
} else {
    console.log("They Are Not");
}

//Using group and or (||)//

var movieRating = "r";
var age = 18;

if ("pg" == movieRating && age >= 13){
    console.log("You can watch the movie");
} else if ("r"== movieRating && age>= 18){
    console.log("You can watch the movie");
} else if ("g" == movieRating){
    console.log("You can watch the movie");
} else {
    console.log("You can't watch the movie");
} 

var movieRating = "r";
var age = 11;

if ( ("pg"== movieRating && age >= 13) || ("r"== movieRating && age>=18) || ("g"== movieRating)){
    console.log("You can watch the movie");
} else {
    console.log("You can't watch the movie");
}
// Age = stage //
var age = 29;
var result ;

if (age<0 || age>500){
    result="vampire";
} else if (age <= 2){
    result="baby";
} else if (age <= 12){
    result="kid";
} else if (age <= 19){
    result="teenager";
} else {
    result="adult";
}
console.log("You are"+" "+ result);

// while loop 
var i = 0;
while (true) {
    i++;
    console.log(i);
}
var i = 0;
while (i <= 10){
    if (i%2 == 0){
        console.log(i);
    }
    i++;
}

var i = 0;
while(i <= 10){
    console.log(i);
    i+=2;
}

var i = 0;
while (true){
    console.log(i);
    if (10 == i){
        break;
    } i++;
}
var i = 0;
while ( i++ < 10){
    console.log(i);
}
var i = 0;
while ( ++i < 10){
    console.log(i);
}
// Difference between(i++)&(++i)

var y = 10;
var x = y++;
console.log(x,y);

var y = 10;
var x = ++y;
console.log(x,y);

// Do while loop
var i = 0;
do {
    console.log(i);
    i++;
} while (i<10);

// For loop 
var i;
for (i=0; i<5; i++){
    console.log(i);
}
var i = 10;
for (;;){
    i++;
    console.log(i);

    if (5 == i){
        break;
    }
}
// Factorial by For loop//
var n = 5;
var factorial = 1;
for (var i = n; i>1; i--){
    factorial= factorial*i;
} console.log("Factorial of 5 is ",factorial );

var i = 4;
var factorial = 1;
for ( var j=1; j<=10; j++){
    factorial=1;
    for(var i=j; i>1; i--){
        factorial= factorial*1;
    }
    console.log("Factorial of",j,"is",factorial);
}
factorial = 1;
for (var i=1; i<=10; i++){
    factorial *= i;
    console.log("Factorial of ",i ,"is ",factorial);
}

// Series by for loop

// Series: 2 4 6 8 10.....
var series = "";
var n;
for ( var i= 1; i<10; i++){
    n = i*2;
    series = series + n + "  ";
} console.log("Series 1: ", series);

// Series: 1 4 7 10 13....
series ="";
n = 1;
for( var i=1; i<10; i++){
    n = n + 3;
    series = series + n + "  ";
} console.log("Series 2: ", series);

// Series: 0 3 8 15 24....
series ="";
n = "1";
for ( var i=1; i<=10; i++){
    n = (i*i)-1;
    series = series + n +"  ";
} console.log("Series 3: ",series);

//Series: 1 4 3 8 5 12....
series ="";
n = "1";
for ( var i=1; i<=10; i++){
    n = i;
    if(i%2 == 0){
        n = i*2;
    }
    series = series + n +"  ";
} console.log("Series 4: ",series);
// Series: 0 1 1 2 3 5 8 13 ....(Fibonacci)
series = "0  1  ";
var n = 0;
var x = 0;
var y = 1;

for ( var i=0; i<10; i++){
    n = x + y;
    x = y;
    y = n;
    series = series + n +"  ";
} console.log("Series 5: ",series);

// Multiplication table by for loop//
var series ;
for ( var i = 1; i <=10; i++){
    series= "   ";
    for ( var j = 1; j<10; j++){
        series += i*j +"   ";
    }
    console.log("Table of",i,"is", series);
}

//Divisors by for loop//
var n = 100; 
var range = Math.sqrt(n);
var divisors =" ";

for ( var i=1; i<=range; i++){
    if (n%i == 0){
        if (i == n/i){
            divisors += i + "  ";
        } else (
            divisors += i + "  " + (n/i) + "  "
        )
    }console.log("Divisors of 100 are", divisors);
}

// Calender by JavaScript//
var monthName = "September 2020"
var days = 30;
var startingDay = 4;
console.log("Calender of", monthName,"\n");
console.log("Sat   Sun   Mon   Tue   Wed   Thu   Fri");
for( var i=0; i<5; i++){
    var dayRow ="";
    for ( var j=1; j<=7; j++){
        var currentDay = 7*i + j - startingDay;
        if (currentDay>days){
            break;
        } else if (currentDay<1){
            currentDay=" ";
        }
        if (currentDay>9) {
            dayRow += currentDay + "    "
        } else {
        dayRow += currentDay + "     ";
        }
    }
    console.log(dayRow);
}
*/

//Array
/*var weekDays = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursdays","Friday"]
console.log(weekDays);
console.log(weekDays[2]); // 1st Element print
weekDays[6]="Friday" //Element add
console.log(weekDays);
console.log(weekDays.length); //Number of elements
var lastElement = weekDays.length - 1
console.log(weekDays);
console.log(weekDays[lastElement]);
weekDays.push("Friday") //Add last element
weekDays.pop(); // Remove last element
weekDays.shift(); //Remove first element
weekDays.unshift("Saturday"); //Add first element

var weekDays = ["Saturday","Sunday","Monday","Tuesday","Wednesday",
"Thursdays","Friday"]
var removed = weekDays.splice(0,2);
//var removed = weekDays.slice(0,2);
console.log(removed);
console.log(weekDays); 

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(month.length);
var lastIndex = month.length - 1;
console.log(lastIndex);
*/ /*
// Array addition
var list1 = ["January","February","March"]
var list2 = ["April","May","June"]
var list3 = ["July","August","September"]
var list4 = ["October","November","December"]

//var list = list1.concat(list2).concat(list3).concat(list4)
var list = [].concat(list1, list2, list3, list4)
console.log(list);
*/ /*
var month = ["January","February","March","April","May","June","July",
"August","September","October","November","December"]
//Traversing method 1
for ( i in month){
    console.log("Element of ", i ,"offset is ",month[i]); }

//Traversing method 2
//for ( var i=0; i<month.length; i++){
//   console.log("Element of ", i ,"offset is ",month[i]); }

//Reversing
//for ( var i=(month.length - 1); i>=0; i--){
//    console.log("Element of ", i ,"offset is ",month[i]); }
*//*
// Array Filtering
var month = ["January",null, "February",null,null,"March","April",NaN, "May","June","July",NaN,"August",null,NaN,"September","October",null,"November","December"]
var year;
for ( i in month){
    if(month[i]){
        year.push(month[i]);
    }
}
//year = month.filter(Boolean);
console.log(year);
*//*
// String sorting in array
var alphabet = ["January","February","March","April","May","June","July","August","September","October","November","December"]
alphabet.sort();
console.log(alphabet);
// Number sorting in Array
var number = [1,15,46,25,2,18,3,4,14,5,6,7,19,8,9]
number.sort(function(a, b){return a-b});
console.log(number);

// String to Array
var series = "0,";
for ( var i=1; i<=20; i++){
    series += i + "," ;
    if (i >20){
        break
    }
}
var list = series.split(",");
console.log(list)
*/
function sayHi() {
    console.log("Hey! whassup");
}
sayHi();
sayHi();
sayHi();
sayHi();
sayHi();