// . Task: Check if a number is between 10 and 20.

// Input: 15

// Expected Output: “Number is between 10 and 20”




// let num=15;
// if(num>10 || num<20){
//     console.log("number is beetwin 10 and 20  is =" , num)
// }



// 2. Task: Check if a person is eligible to vote and has an ID.

// Input: age = 19, hasID = true

// Expected Output: “You can vote”


// let age =1
// let hasID=false;
// if(age>=18 && hasID==true ){
//     console.log("you can vote ")
// }else{
//     console.log("no vote")
// }




// 3. Task: Validate a login if both username and password are correct.

// Input: username = "admin", password = "1234"

// Expected Output: “Login successful”


// let username="admin"
// let password="1234"
// if(username=="admin" &&  password=="1234"){
//     console.log("login sucsessfull")
// } 


// 4. Task: Check if a student has passed all subjects.

// Input: Math = 45, Science = 60, English = 70

// Expected Output: “Student passed all subjects”



let math = 6
let science =56  
let english =  56

if (math >= 50 && science >= 50 && english >= 50) {
    console.log("Student passed all subjects");
} else {
    console.log("Student did not pass all subjects");
}


// 5. Task: Check if a device is connected and battery level is above 20%.

// Input: connected = true, battery = 50

// Expected Output: “Device working properly”
 

// let battery=12
// let connected=true;
// if(battery>=20 && connected==true){
//     console.log(" deivce working perfactly ")
// }
// else(battery<=20 && connected==false)

//     console.log("device not working ")


// 1. Task: Check whether a number is even or odd.

// Input: 8

// Expected Output: “Even number”



// let num=9;
// if(num %2==0){
//     console.log("even no")
// }
// else if(num %2 !=0)
// console.log("odd")




// 8. Task: Display discount based on the total shopping amount.

// Input: total = 1200

// Expected Output: “You got a 10% discount”



// let shoppingAmmountatDiscount=2000;
// if(shoppingAmmountatDiscount>=2000 && shoppingAmmountatDiscount <=5000 ){
//     shoppingAmmount1 = shoppingAmmountatDiscount*10/100 
//     console.log("you got 10% discount" ,shoppingAmmount1)
// }else if(shoppingAmmountatDiscount<=1200){
//     shoppingAmmount1 = shoppingAmmountatDiscount*10/100
//     console.log("you  have no discount ")
// }else if  (shoppingAmmountatDiscount>=10000){
//     shoppingAmmount1 = shoppingAmmountatDiscount*20/100
//     console.log("you got  20% discount " , shoppingAmmount1)
// }



// function greet(name, cb){
//     console.log("wait you output ")
//   setTimeout(()=> cb(`Hi ${name}`), 1000);
// }
// greet("bhawani ", msg => console.log(msg));


// function asdf(name, cb){
//     setTimeout(()=>cb(` hello ${name}`), 1000);

// } asdf("ram", msg=>console.log(msg))

 















// const p = new Promise((res, rej) => { setTimeout(()=> res("done"), 100); });
// p.then(console.log);  // "done"
