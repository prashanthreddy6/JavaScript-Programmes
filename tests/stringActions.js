// Reverse each word in a sentence
// let sentence="Hi hello good morning!"
// let split=sentence.split(" ").reverse().join(" ");
// console.log(split)

// for(let i=split.length-1;i>=0;i--){
//     process.stdout.write(split[i]+"");
// }


// Remove spaces from a string
// let sentence="Hi hello good morning!"
// let withoutSpaces="";


// for(let i=0;i<sentence.length;i++){

//     if(sentence[i]!==" "){
//         withoutSpaces+=sentence[i];
//     }
// }

// console.log(withoutSpaces);


// Reverse sentence

// let sentence="Hi hello good morning!"
// let word="";
// let result="";

// for(let i=0;i<sentence.length;i++){

//     if(sentence[i]!==" "){
//         word+=sentence[i];
//     }
//     else{
//         result=word+" "+result;
//         word="";
//     }
// }
// result=word+" "+result;
// console.log(result);

// let sentence="Hi hello good morning!"
// let word="";
// let result="";

// for(let i=0;i<sentence.length;i++){

//     if(sentence[i]!==" "){
//         word=sentence[i]+word;
//     }
//     else{
//         result=result+" "+word
//         word="";
//     }
// }
// result=result+" "+word;
// console.log(result);



// Reverse each word in a sentence

// let sentence="Good Morning everyone";
// let word="";
// let result="";

// for(let i=0;i<sentence.length;i++){

//     if(sentence[i]!==" "){
//         word+=sentence[i];
//     }
//     else{
//         for(let j=word.length-1;j>=0;j--){
//             result=result+word[j];
//         }
//         result=result+" ";
//         word="";
//         // result=word+" "+result;
//         // word="";
//     }
    
//     // for(let j=word.length;j>=0;j--){
//     //     result=word[j]+result;
//     // }
// }
// // result=word+" "+result;
// for(let j=word.length-1;j>=0;j--){
//     result=result+word[j];
// }

// console.log(result)


// I have an array of numbers. I want you to find the second number that appears only once in the array.

// For example:

// let numbers = [4, 5, 1, 2,  4, 5];
// let arr=[]

// for(let i=0;i<numbers.length;i++){
//     let bool=true;
//     for(let j=0;j<numbers.length;j++){

//         if(numbers[i]===numbers[j] && i!==j){
//             bool=false
//             break;
//         }
//     }
//     if(bool){
//         arr.push(numbers[i]);
//         // console.log(numbers[i]);
//         // break;
//     }

// }
// console.log(arr)

// The expected output is:

// 2

