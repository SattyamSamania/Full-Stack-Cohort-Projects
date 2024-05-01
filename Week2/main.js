//map, filter example 

const arr = ["sam", "bob", "jane", "jim", "jill"]


let ans = arr.map(n => {
  return n*2
})
console.log(ans);

             
let ans2  = arr.filter(n => {
  if(n.startsWith("b")){
    return true;
  } 
    else{
      return false;
    }
})

console.log(ans2)



given an array and return the even values from that array

 const arr2 = [1,2,3,4,5,6,7,8,9,10]

solution

const newArr = [];

for(let i=0; i<arr.length; i++){
 if(arr2[i]%2==0){
   newArr.push(arr[i])
 } 
}

console.log(newArr)
