// function greet(){
//     console.log("good morning ")
// }
// function enjo(){
//     console.log("enjoy fun")
// }
// function temp(){
//     console.log("track locatio temp")
    
// }
// greet();
// enjo();
// temp();

let n=10;
let first=0, second=1;
console.log(first)
console.log(second)

for(i=1; i<=n-2; i++){
     third=first+second;
     first=second;
     second=third;

    console.log(third)
}