function Stack() {
 this.dataStore = [];
 this.top = 0; //keeps track of the top of stack
 this.push = push; //add elements to stack
 this.pop = pop; //remove from stack
 this.peek = peek; //returns value stored at top of stack
}

function push(element){
  this.dataStore[this.top++] = element;
}
function pop(){
  this.dataStore[this.top--];
}
function peek(){
 return this.dataStore[this.top-1];
}

let firstStack = new Stack();
firstStack.push('a');
console.log(firstStack.dataStore);
console.log(firstStack.top);
//firstStack.pop()
//console.log(firstStack.top);
console.log(firstStack.peek());//a
firstStack.push('b');
console.log(firstStack.dataStore);//[ 'a', 'b' ]
console.log(firstStack.peek());//b
