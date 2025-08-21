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

//palindrome checker
function Stack() {
 this.dataStore = [];
 this.top = 0; //keeps track of the top of stack
 this.push = push; //add elements to stack
 this.pop = pop; //remove from stack
 this.peek = peek;//returns value stored at top of stack
 this.length = length;
}
function push(element){
  this.dataStore[this.top++] = element;
}
function pop(){
  return this.dataStore[--this.top];
}
function peek(){
 return this.dataStore[this.top-1];
}
function length(){
  return this.top;
}
function isPalindrome(word){
  for (let i=0; i<=word.length-1;i++){
    s.push(word[i])
  }
  //console.log(s.dataStore);
  let rword = ''
  while(s.length()>=1){
    rword += s.pop()
  }
  //console.log(rword);
  if(word === rword){
    return true;
  }
}

var s = new Stack();
let word = "racecar";

if (isPalindrome(word)){
  console.log(`${word} is a palindrome`);
}else{
  console.log(`${word} is not a palindrome`);
}

