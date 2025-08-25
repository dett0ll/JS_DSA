//dance in line
const fs = require('fs');
var names = fs.readFileSync('file.txt','utf-8').split('\n');
function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.empty = empty;
    this.front = front;
}
function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(){
   return this.dataStore.shift();
}
function empty(){
    if (this.dataStore.length === 0){
        return true;
    }else{
        return false;
    }
}
function front(){
    return this.dataStore[0];
}
function Dancer(name, sex) {
 this.name = name;
 this.sex = sex;
}
//console.log(names);
function getDancers(males,females){
    for (var i=0; i< names.length; i++){
    names[i]= names[i].trim()
    }
    //console.log(names);
    for (var i=0; i< names.length; i++){
        var dancer =names[i].split(' ');
        console.log(dancer);
        var sex = dancer[0];
        var name = dancer[1];
        if (sex ==='F'){
        femaleDancers.enqueue(new Dancer(name,sex));
        }else{
        maleDancers.enqueue(new Dancer(name,sex));
        }
    }
}

function dance(male,female){
    console.log('The dancers are')
    while (!(female.empty())&&!(male.empty())){
       var person = female.dequeue();
        console.log(`female is ${person.name}`);
        person = male.dequeue();
        console.log(`male is ${person.name}`);
    }
}
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers,femaleDancers);
//console.log(maleDancers.dataStore);
//console.log(femaleDancers.dataStore);
dance (maleDancers, femaleDancers);
if (!femaleDancers.empty()){
    console.log(`${femaleDancers.front().name} is next in line`)
}if (!maleDancers.empty()){
    console.log(`${maleDancers.front().name} is next in line`)
}


//radix sort
function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.empty = empty;
    this.front = front;
}
function enqueue(element){
    this.dataStore.push(element);
}
function dequeue(){
   return this.dataStore.shift();
}
function empty(){
    if (this.dataStore.length === 0){
        return true;
    }else{
        return false;
    }
}
function front(){
    return this.dataStore[0];
}
function distribute(nums, queues, n, digit) {
    for (let i=0; i<n; i++){
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }else{
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }       
    }
}
function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }console.log(nums);
}

var queues =[];
for (let i=0; i<10; i++){
    queues[i]=new Queue;
}
var nums =[];
for (let i=0; i<10; i++){
    nums[i]= Math.floor(Math.random()*100);
}
console.log(nums);
distribute(nums, queues, 10, 1);
for (let i = 0; i < queues.length; i++) {
  console.log(`Queue[${i}]:`, queues[i].dataStore);
}
collect(queues, nums);
for (let i = 0; i < queues.length; i++) {
  console.log(`Queue[${i}]:`, queues[i].dataStore);
}
distribute(nums, queues, 10, 10);
for (let i = 0; i < queues.length; i++) {
  console.log(`Queue[${i}]:`, queues[i].dataStore);
}
collect(queues, nums);
for (let i = 0; i < queues.length; i++) {
  console.log(`Queue[${i}]:`, queues[i].dataStore);
}
console.log(nums);



