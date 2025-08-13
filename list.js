//listSize (property) Number of elements in list
//pos (property) Current position in list
//length (property) Returns the number of elements in list
//clear (function) Clears all elements from list
//toString (function) Returns string representation of list
//getElement (function) Returns element at current position
//insert (function) Inserts new element after existing element
//append (function) Adds new element to end of list
//remove (function) Removes element from list
//front (function) Sets current position to first element of list
//end (function) Sets current position to last element of list
//prev (function) Moves current position back one element
//next (function) Moves current position forward one element
//currPos (function) Returns the current position in list
//moveTo (function) Moves the current position to specified position
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

