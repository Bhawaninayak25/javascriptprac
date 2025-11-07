let score= prompt("enter you marks");

let grade;
if( score >=90 && score <=100){
    grade ="A";
}else if(score >=89 && score <=75){
    grade = "B";
}else if(score >=75 && score <=60){
    grade ="C";
}
console.log("your grade is =", grade)
