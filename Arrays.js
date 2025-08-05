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

