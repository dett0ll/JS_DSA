//listSize, push, append, pop, shift, splice
function List(){
  this.listSize = 0;
  this.dataStore = [];
  this.append = append;
}
function append(element){
  this.dataStore.push(element);
  this.listSize++;
}

const firstList = new List();
let a = firstList.dataStore.push('a','b','c');
console.log(firstList.dataStore);
firstList.append('d');
console.log(firstList.dataStore);
console.log(firstList.dataStore.length);
//firstList.dataStore.pop();//remove last element in list
console.log(firstList.dataStore); 
//firstList.dataStore.shift(); //removes first element in list
console.log(firstList.dataStore)
console.log(firstList.dataStore.splice(2,1));//it will remove at position 2 and only that element
console.log(firstList.dataStore)

//find
function List(){
  this.dataStore = []
}

let firstList = new List();
firstList.dataStore.push('a','b','c','d');
console.log(firstList.dataStore);
console.log(firstList.dataStore.find(element => element =='a'));//returns a because a is present
console.log(firstList.dataStore.find(element => element =='z'));// returns undefined because z in not present

//length
console.log(firstList.dataStore.length);//4

//list to string
function List(){
  this.dataStore = []
}

let firstList = new List();
firstList.dataStore.push('john','cena','is','the','goat');
console.log(firstList.dataStore);
console.log(firstList.dataStore.toString());//john,cena,is,the,goat

//remove
console.log(firstList.dataStore.splice(0,1));//['john']
console.log(firstList.dataStore);//[ 'cena', 'is', 'the', 'goat' ]

//insert
console.log(firstList.dataStore.splice(0,0,'john'));//add john at 0 posiiton don't remve any element
console.log(firstList.dataStore);

//clear 
let a = firstList.dataStore;
console.log(a);
a.length = 0; //clears all elements in list
console.log(a); //[] empty array

//getelement of list
function List(){
  this.dataStore = [];
 
}


let firstlist = new List();
firstlist.dataStore.push('a','b','c','d','e');
console.log(firstlist.dataStore);
console.log(firstlist.dataStore[0]); //a
console.log(firstlist.dataStore[1]); //b


