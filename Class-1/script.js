
// arrays 

let arr = [21, 22, 23, 24, 25, 26];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }

}

let user = [{
    firstName: "sattyam",
    gender: "male",
    age: 18
},
{
    firstName: "sam",
    gender: "male",
    age: 14
},
{
    firstName: "ravi",
    gender: "male",
    age: 23
},
{
    firstName: "samania",
    gender: "female",
    age: 14
},
]

for (let i = 0; i < user.length; i++) {
    if (user[i]["gender"] == "female") {
        console.log(user[i]["firstName"])
    }
}


let favActorFirstName = "Sattyam"
let favActorLastName = "Kumar"
let fullName = favActorFirstName + " " + favActorLastName
let upperCase = fullName.toUpperCase();
let message = `My Favourite Actor ${upperCase}`;
message += ` is building the best products in Silicon Valley`
console.log(message)

let ans = message.includes("Actor")
console.log(ans)

const array = ["banana", "apple", "orange", "mango"];
const vegetables = ["potato", "tomato", "onion", "carrot"];
array.slice(1, 3)
// console.log(vegetables.includes("potato"))
console.log(vegetables.splice(1, 2, "spinach", "broccoli"))


// objects
let userObject =
{
    firstName: "sattyam",
    lastName: "kumar",
    age: 23,
}
console.log(userObject.name = "sattyamkumar")


//functions 

function add(a, b) {
    return a + b;
}
console.log(add(232, 34433))

function showCallBackFunc(fn) {
    const value = 10;
    fn(value)
}

showCallBackFunc(function (value) {
    console.log(value * 23);
});

console.dir(document)