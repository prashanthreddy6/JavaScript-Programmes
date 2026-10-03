

// function greet(){

//     console.log("Good Morning!")
// }

// function addition(a,b){

//     return a+b;
// }

// // greet()

// console.log(addition(2,3));

// console.log(addition("2","3"));

// console.log(addition("2",3));

// function printName(name){ // parameter
//     console.log("This is my name "+name)

// }

// printName("Prashanth")  //Arguments


// function mul(a,b){

//     return a*b;
// }

// let result=mul(10,20);

// console.log(result)
// // console.log(mul(10,20));



// function ageVerification(age){

//     if(age<18){
//         console.log("NOT eligible for driving")
//     }else if(age>=18 && age<62){
//         console.log("you also eligible for driving")
//     }else{
//         console.log("not eligible");
//     }

// }

// ageVerification(61);


// We can pass an ARRAY to a function.

// function names(arrNames){
    
//     // for(let i=0;i<arrNames.length;i++){
//     //     console.log(arrNames[i]);
//     // }

//     for(let names1 of arrNames){
//         console.log(names1);
//     }
// }


// let arr=["prashanth","john","wick"];

// names(arr)


// 10. FUNCTION CALLING ANOTHER FUNCTION

// function greet(){
//     console.log("hellow");
// }


// function main(){
//     greet();
//     console.log("This is my main function");
// }

// main();


// 11 call back functions

function greet(){
    console.log("hellow");
}


function main(callback){
    console.log("This is my main function")

    callback();
}


// main(greet);


// 11. ARROW FUNCTIONS

function mul(a,b){

    return a*b;
}


(a,b)=>{
    return a*b;
}

const multiply=(a,b)=> a*b;
console.log(multiply(2,5))

