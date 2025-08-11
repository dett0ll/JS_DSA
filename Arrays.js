//creating array from String
let s = 'This is a string';
var arr= s.split('');
console.log(arr); 
/*[
  'T', 'h', 'i', 's',
  ' ', 'i', 's', ' ',
  'a', ' ', 's', 't',
  'r', 'i', 'n', 'g'
]*/
var arr2= s.split(' ');//add a space
console.log(arr2);
[ 'This', 'is', 'a', 'string' ]

//Copy
//deep copy is related to the value. we are checking when one of the value
//changes in the exisiting array what happens to new array
function copy(arr1,arr2){
  for (let i=0;i<arr1.length;i++){
    arr2[i]=arr1[i]
  }
}
let arr1 = [1,2,3];
let arr2 = [];
copy (arr1,arr2);
console.log(arr1,arr2);
//output [ 1, 2, 3 ] [ 1, 2, 3 ]
arr1[0] = 10;
console.log(arr1,arr2);//as we can see value of arr2 has not changed
//output [ 10, 2, 3 ] [ 1, 2, 3 ]
//shallow coopy
let arr1 =[1,2,3];
let arr2 =[];
arr2 = arr1;
console.log(arr1,arr2);
//output [ 1, 2, 3 ] [ 1, 2, 3 ]
arr1[0]=10;
console.log(arr1,arr2);//as we can see the value of arr2 also changes
//output [ 10, 2, 3 ] [ 10, 2, 3 ]
/*Accessor functions - JavaScript provides a set of functions you can use to access the elements of an array.
These functions, called accessor functions, return some representation of the target array
as their return values. */
//Searching for a value
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
var p = names.indexOf('David');
console.log(p); //0
var p = names.indexOf('Raymond');
console.log(p); //2
var p = names.indexOf('John');
console.log(p);//-1 because John is not present

//array to String
var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
console.log(names.join());
//output David,Cynthia,Raymond,Clayton,Mike,Jennifer
console.log(names.toString());
//output David,Cynthia,Raymond,Clayton,Mike,Jennifer

//concat two arrays
var arr1 = ['john', 'cena'];
var arr2= ['randy', 'orton'];
console.log(arr1.concat(arr2));
//output [ 'john', 'cena', 'randy', 'orton' ]
//Splice array
var arr3 = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
console.log(arr3.splice(3,3));//[ 'Raymond', 'Cynthia', 'Danny' ]
console.log(arr3);//[ 'Mike', 'Clayton', 'Terrill', 'Jennifer' ]
//so we can see splice creates a new array and makes change to exisiting array
var arr4 = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
console.log(arr4.splice(2,4));
//output [ 'Terrill', 'Raymond', 'Cynthia', 'Danny' ] start at 2 array and then count of 4

/*Mutator function - JavaScript has a set of mutator functions that allow you to modify the contents of an
array without referencing the individual elements. These functions often make hard
techniques easy */
//push array element to th end of line
var arr1 = [1,2,3,4];
arr1.push(6);
console.log(arr1);//[ 1, 2, 3, 4, 6 ]
//unshift adds to the beginning of array
var arr2 = [6,7,8];
var addnum = 5;
arr2.unshift(addnum);
console.log(arr2);//[ 5, 6, 7, 8 ]

//pop to remove element from end of Array
var arr1 = [1,2,3,4];
arr1.pop();
console.log(arr1);//[ 1, 2, 3 ]

//shift to remove at the beginning
var arr2 = [9,5,6,7];
arr2.shift();
console.log(arr2);//[ 5, 6, 7 ]

//splice to remove elements in the middle of array

let arr1 = [1,2,3,7,8,9];
arr1.splice(3,0,4,5,6);//start at place 3, 0 don't remove any, 4,5,6 add these three values
console.log(arr1);//[1, 2, 3, 4, 5,6, 7, 8, 9]

var arr2 = [1,2,3,100,200,300,400,4,5];
arr2.splice(3,4);//start at place 3 and remove 4 elements after 
console.log(arr2);//[ 1, 2, 3, 4, 5 ]

//reverse()
let arr1 = [1,2,3,4,5];
arr1.reverse();
console.log(arr1);//[ 5, 4, 3, 2, 1 ]

//sort() to sort strings in order
let arr2 = ['apple','cat','bike'];
arr2.sort();
console.log(arr2);//[ 'apple', 'bike', 'cat' ]

//sort for numbers use the compare function
function compare(num1,num2){
  return num1-num2
}
var num =[3,10,1,2,4];
console.log(num.sort(compare));
//Iterator Functions
//The final set of array functions we examine are iteratorfunctions. These functions apply
//a function to each element of an array, either returning a value, a set of values, or a new
//array after applying the function to each element of an array.
//forEach
//forEach does not collect return value. map() does
function square(num){
  console.log(num*num);
}
var num =[1,2,3,4];
num.forEach(square);

function square(num){
  return num*num;
}
var num =[1,2,3,4];
console.log(num.map(square));

//every()
//return true if all numbers are even in this case
function even(n){
  return n%2 == 0;
}
var num =[1,2,3,4];
var a = num.every(even);
if (a){
  console.log('all numbers are even');
}else{
  console.log('all numbers are not even');//this will be output
}

//some()
//return true if one of the numbers is even
function even(n){
  return n%2 == 0;
}
var num =[1,3,5,7];
var a = num.some(even);
if (a){
  console.log('some numbers are even');
}else{
  console.log('no number is even');//this will be output
}

//reduce function with add function add element of Array from left to right

function add(tv, cv){
  return tv+cv;
}
var num =[1,2,3,4,5];
console.log(num.reduce(add));//15

//reduce with add can also be used to concat stirngs

function add(tv, cv){
  return tv+cv;
}
var l = ['this', 'is', 'line'];
console.log(l.reduce(add));//thisisline

//reduceRight works from right to left
function add(tv, cv){
  return tv+cv;
}
var r = ['this', 'is', 'line'];
console.log(r.reduceRight(add));//lineisthis

//map() return new array

function add(num){
  return num +=5;
}

var num =[10,20,30];
console.log(num.map(add));//[ 15, 25, 35 ]

//map() on strings

function firstLetter(words){
  return words[0];
}

var words = ["for","your","information"];
console.log(words.map(firstLetter));//[ 'f', 'y', 'i' ]

//every() only return true if all numbers are even, filter reurn the new array with elements that are even
function even(num){
  return num%2 ==0;
}
var num =[1,2,3,4];
var c = num.filter(even);
console.log(c);//[ 2, 4 ]

//same for odd
function odd(num){
  return num%2 !=0;
}
var num2 =[1,2,3,4];
var o= num2.filter(odd);
console.log(o);//[ 1, 3 ]

function passingGrades(grades){
  return grades>60;
}
var grades = [39,43,89,19,46,54,48,5,13,31,27,95,62,64];
var c = grades.filter(passingGrades);
console.log(c);//[ 89, 95, 62, 64 ]

//Create a 2d array
Array.matrix = function (nr,nc,iv){
  let arr = [];
  for (let i=0;i<=nr;i++){
    let col = [];
    for (let j=0; j<=nc; j++){
      col[j]=iv;
    }
    arr[i]=col;
  }
  return arr;
}

let firstArray = Array.matrix(2,2,0);
console.log(firstArray);
console.log(firstArray[0][1]); //output 0
firstArray[0][1] = 3;
console.log(firstArray[0][1]); //output 3
let secondArray = Array.matrix(2,2,''); //string
secondArray[0][2] = 'John'
console.log(secondArray[0][2]);//output John

//average grades column wise c1+c2+c3

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
let rowl = grades.length;//3
let coll = grades[rowl-1].length;//3
let s=0;
for (let i=0; i<rowl; i++){
  for (let j=0; j<coll; j++){
    s += grades[i][j];
  }
  console.log(s/3);//81.33333333333333,79.66666666666667,91.33333333333333
  s =0;
}
//rowwise and column wise
var grades = [[10, 20],[30, 40],[50, 60]];
let rowl = grades.length;//3
let coll = grades[rowl-1].length;//2
//console.log(rowl,coll);//3,2
let cs =0;

for (let i=0; i<rowl; i++){
  for (let j=0;j<coll;j++){
    cs += grades[i][j];
  }
  console.log(cs);
  cs=0;
}
let rs=0;
for (let k=0; k<coll; k++){
  for (let l=0; l<rowl ;l++){
    rs += grades[l][k]; 
  }
  console.log(rs);
  rs =0;
}


