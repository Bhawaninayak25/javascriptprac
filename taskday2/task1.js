// A. This is the variable of string and do following questions
// let str = "12345"
// 1. Print square of the single numbers
// 2. Multiply every single number with 2
// 3. Count how many numbers are even
// // 4. Count how many numbers are odd



// let arr=[1,2,3,4,5]
// let arr = "12345"
// let arr2 = [];
// for(let i in arr){
//     arr2[i] =arr[i]*arr[i]
// }
// console.log(arr2)



// let arr=[1,2,3,4,5]
// let arr2 = [];
// for(let i in arr){
//     arr2[i] =arr[i]*2
// }
// console.log(arr2)


// 3. Count how many numbers are even
// let arr = "12345";
// let arr2 =0;
// for (let i in arr){
//     arr2= arr
// }
// console.log(arr2)




// let arr = "12345";
// let count = [...arr].filter(ch => ch % 2 === 0).length;
// console.log(count); 

let a = [1,2,4,88];
let b = a.filter(function(ele){
    return ele - 2;
})

console.log(a);
console.log(b);


// let a = [1,2,4,88];
// let b = a.map(function(ele){
//     true;
// })

// console.log(a);
// console.log(b);