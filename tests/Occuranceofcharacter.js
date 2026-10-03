
// let name1="swiss";
// // only once



// for(let i=0;i<name1.length;i++){
//     let bool=true;
//     for(let j=0;j<name1.length;j++){
//         if(name1[i]===name1[j] && i!=j){
//             bool=false;
//             break;
//         }
//     }
//     if(bool){
//         console.log(name1[i]);
//     }
// }

// vowels & consonents

// let name1="playwright";
// let vowels=['a','e','i','o','u']
// let consonent=[];
// let vowel=[];

// for(let i=0;i<name1.length;i++){
//     let bool=false;
//     for(let j=0;j<vowels.length;j++){

//         if(name1[i]===vowels[j]){
//             bool=true;
//         }
//     }
//     if(bool){
//         vowel.push(name1[i])
//         // console.log(name1[i]+" is a vowel");
//     }
//     else{
//         consonent.push(name1[i])
//         // console.log(name1[i]+" is a consonent");
//     }
// }

// console.log("voewls ",vowel);
// console.log("consonents ",consonent);



// let sentence="Hello good morning";
// let word="";


// for(let i=0;i<sentence.length;i++){
//     if(sentence[i]===' '){
//         continue;
//     }
//     word=sentence[i]+word;


// }
// console.log(word)


// Reverse each word in a sentence
// let sentence="Hello Good morning!"

// let word="";
// let reverse="";

// for(let i=0;i<sentence.length;i++){

//     if(sentence[i]!==' '){
//         word=sentence[i]+word;
//     } 

//     else{

//         reverse=reverse+" "+word;
//         word="";
//     }
//     // console.log("word",word)

// }
// reverse=reverse+" "+word;

// console.log(reverse);



// Find the longest word in a sentence

// let sentence="Hello this is prashanth"
// let word="";
// let array=[];
// let max=0;
// let maxWord="";

// for(let i=0;i<=sentence.length;i++){

//     if(i<sentence.length && sentence[i]!==' '){
//         word+=sentence[i];
//     }else{
//         if(word.length>max){
//             max=word.length
//             maxWord=word;
//         }
//         // array.push(word);
//         word=""
//     }
    
// }
// // array.push(word);
// // console.log(array)
// // for(let arr of array){

// //     if(arr.length>max){
// //         max=arr.length;
// //         maxWord=arr
// //     }
// // }
// console.log(maxWord,max)

// Check whether two strings are anagrams

// let str1="silent";
// let str2="listen";

// let sorted1=str1.split('').sort().join('');
// let sorted2=str2.split('').sort().join('');

// if(sorted1===sorted2){
//     console.log("anagrams")
// }

// for(let i=0;i<str1.length;i++){
//     for(let j=0;j<str2.length;j++){

//     }
// }


// sort a string

function sorting(fullName){
  
    let array=[]
    for(let name of fullName){
        array.push(name)
    }
    // console.log(arr)

    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    console.log(array)
}

if(sorting("listen")===sorting("silent")){
    console.log("anagrams")
}

