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


