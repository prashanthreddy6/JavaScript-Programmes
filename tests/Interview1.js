
// let studentsData=[["john","162","60"],["chris","163","70"],["tyler","164","80"]];

// const { array } = require("node:stream/iter");

// // names of students who has marks>60

// for(let i=0;i<studentsData.length;i++){
//     let indivisualStudent=studentsData[i];
//     if(indivisualStudent[2]>60){
//         console.log(indivisualStudent[0])
//     }



//     // console.log(indivisualStudent)
// }

// --------------------------------------------------------------------------------

// I have an array of numbers. I want you to find the second number that appears only once in the array.

// For example:

// let numbers = [4, 5, 1, 2, 1, 4, 5];

// The expected output is:

// 2

// let numbers = [4, 5, 1, 2, 1, 4, 5, 8, 9];
// let array=[];

// for(let i=0;i<numbers.length;i++){
//     let bool=true;
//     for(let j=0;j<numbers.length;j++){

//         if(numbers[i]===numbers[j] && i!=j){
//             bool=false;
//             break;
//         }
//     }
//     if(bool){
//         array.push(numbers[i]);
//         // break;
//     }
// }
// console.log("second occurance",array[1]);


// let numbers = [10, 20, 20, 8, 15];
// numbers.sort((a,b)=> a-b);
// // console.log(num[num.length-2]);
// console.log(numbers);

// let largest=-Infinity;
// let secondLargest=-Infinity;

// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>largest){
//         secondLargest=largest;
//         largest=numbers[i];
//     }

//     else if(numbers[i]>secondLargest && numbers[i]!=largest){
//         secondLargest=numbers[i];
//     }

// }

// console.log(largest,secondLargest);


// let str = "hello";
// let strNew="";

// for(let i=0;i<str.length;i++){
//     let ch=str.charAt(i);
//     let bool=true;

//     for(let j=0;j<str.length;j++){
//         if(ch===str[j] && i!==j){
//             bool=false;
//             break;
//         }
//     }
//     if(bool){
//         strNew=strNew.concat(ch);
//         // console.log(ch);
//         // break;
//     }
// }
// console.log(strNew)


// let str = "mamam";
// // Find and print all characters that appear more than once.
// // console.log(str.indexOf('m'));

// for(let i=0;i<str.length;i++){
//     let count=1;
//     for(let j=i+1;j<str.length;j++){
//         if(str[i]===str[j]){
//             count++;
//         }
//     }
//     if(count>1 && str.indexOf(str[i])==i){
//         console.log(str[i]);
//     }
// }



// Find two numbers whose sum is 9 and print those two numbers

// let numbers = [2, 7, 11, 15, 3, 6];

// for(let i=0;i<numbers.length;i++){
//     for(let j=i+1;j<numbers.length;j++){

//         if(numbers[i]+numbers[j]===9 && i!=j){
//             console.log(numbers[i],numbers[j]);
//         }
//     }
// }


// Move all the zeroes to the end of the array while maintaining the order of the other numbers.
// let numbers = [0, 1, 0, 3, 12]; // 4 5 3 2 7 8
// // [1, 3, 12, 0, 0]
// for(let i=0;i<numbers.length;i++){
//     for(let j=0;j<numbers.length-1;j++){

//         if(numbers[j]>numbers[j+1]){
//             let temp=numbers[j];
//             numbers[j]=numbers[j+1];
//             numbers[j+1]=temp;

//         }
//     }
// }

// console.log(numbers)

// let newArray=[];
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]!==0){
//         newArray.push(numbers[i]);
//     }
// }
// console.log(newArray)
// console.log(numbers.length-newArray.length)
// let length1=numbers.length-newArray.length;
// for(let j=0;j<length1;j++){
//     newArray.push(0);
//     console.log(j);
// }

// console.log(newArray)
// numbers.sort((a,b)=> b-a);
// console.log(numbers)















// for(let i=0;i<str.length;i++){

//     let ch=str[i];
//     let count=1;

//     for(let j=i+1;j<str.length;j++){
//         if(ch===str[j] && str.indexOf(ch)!==i){
//             count++;
//         }

//     }
//     if(count>1){
//         console.log(ch);
//     }
// }


// clear




// let str = "programming";
// // Find the character that occurs the maximum number of times in the string.
// let maxCount=0;
// let maxChar='';

// for(let i=0;i<str.length;i++){
//     let ch=str.charAt(i);
//     let count=1;
//     let bool=true;

//     for(let j=i+1;j<str.length;j++){
//         if(ch===str[j]){
//             count++;
//         }
//     }
//     if(count>maxCount){
//         maxCount=count
//         maxChar=ch;
//         // break;
//     }
// }
// console.log(maxChar,maxCount);
// console.log(strNew)



// Now I'm going to test a different type of thinking.

// let numbers = [2, 3, 4,5, 6];
// // Find the missing number 
// if(numbers[0]!=1){
//     numbers[0]=1
// }


// for(let i=0;i<numbers.length-1;i++){
//     if(numbers[i+1]-numbers[i]>1){
//         for(let j=numbers[i]+1;j<numbers[i+1];j++){
//             console.log(j)
//         }
//     }
// }


// let numbers = [2, 3, 4,5];


// for(let i=1;i<=6;i++){
//     if(!numbers.includes(i)){
//         console.log(i)
//     }
// }

// let numbers = [2, 3, 4,5];


// for(let i=1;i<=6;i++){
//     let bool=true;
//     for(let j=0;j<numbers.length;j++){

//         if(numbers[j]===i){
//             bool=false;
//             break;
//         }
//     }if(bool){
//         console.log(i);
//     }
// }



let fullName="Delloite2026";
let reverse="";

for(let i=0;i<fullName.length;i++){

    if(/[0-9]/.test(fullName[i])){
        reverse+=fullName[i];
    }
    else{
        reverse=fullName[i]+reverse;
    }
}

console.log(reverse);