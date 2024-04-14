console.log('Hello World')

let firstName = "Sam"
let lastName = "Kumar"
let age = 21
let isMarried = false;

let female = "Ravina"


// If/else example 
if(firstName){
    console.log('Not Applicable')
}
else {
    console.log('Greetings of the Day')
}

console.log('This persons name is ' + firstName + 'and his age is ' + age + ' and his marriage status is '+ isMarried)
console.log(`Greetings of the Day Mr. ${firstName} ${lastName}`);

// Loop Example 
// for(let count =0; count< 10; count++ ){
//     console.log(count)

// }



// Arrays Example 

const arr = [23, 12, 24, 34, 29]

for(let i=0; i<arr.length; i++){
    if(arr[i] %2 == 0){
console.log(arr[i])
        
    }
}



// Objects  and Array of Objects

const person ={
    Name :"Sattyam",
    age: 34,
    isMarried: false,

}

const allUsers = [{
    firstName: "Sattyam",
    gender: "male",
    age: 12
},
{
firstName: "Sam",
    gender: "male",
    age: 34

},

{
    firstName: "Ravi",
    gender: "female",
    age: 11
}
]


for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}


// Functions in JavaScript 


function calculate(a, b, arithmetic) {
    const ans = arithmetic(a,b)
    return ans
    
}

function sum(a,b) {
    // do things with the input and return an output

    return a+b;
    
}

const value = calculate(3,4, sum)
console.log(value)

// JavaScript Methods 
console.log(parseInt('42'))
console.log(parseInt('42paax'))
console.log(parseInt('3.14'))


// foreach loops
const initialArray = [1, 2, 3];

function logThing(str) {
    console.log(str)
    
}

initialArray.forEach(logThing)


// classes 

class Animal{

    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks= speaks;
    }
    speak(){
        console.log('Dog is Speaking!');
    }

    catSpeaks(){
        console.log('Cat is speaking')
    }
}

let dog = new Animal("dog", 4, 'bhow bhow')
let cat = new Animal('cat', 4, 'meow')
dog.speak()
let ans = cat.legCount;
console.log(ans)
cat.catSpeaks()