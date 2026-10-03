
// //destructing

// const user={
//     name:"prashanth",
//     age:24
// }

// console.log(user.name,user.age)

// const {name,age}=user;

// console.log(name,age)


// // spread

// let arr=[1,2,3]
// let arr2=[4,5,6];
// let arr3=[...arr,...arr2]
// console.log(arr3)


// //rest parameter

// function team(capatain,...players){
//     console.log(`${capatain}`);
//     console.log(`${players.join(',')}`)
// }
// team('Rohit','jadeja','KL Rahul','Virat')




// try{

//     let n=10/'s';
//     console.log(n)
// }catch(error){

//     console.log("An error occured", error.message());

// }finally{
//     console.log("completed")
// }



// array functions
function addition(a,b){
    return a+b;
}
console.log(addition(3,3));


const sum=(a,b)=>a+b;
console.log(sum(4,6));

let array=[1,2,3,4,5];


array.forEach(arr=>console.log(arr))
