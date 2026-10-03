
// // prime or not
// // number divisible by 1 or itself
// let count=0;

// for(let j=2;j<101;j++){

//     let n=j;
//     let bool=true;

//     for(let i=2;i<=Math.floor(n/2);i++){

//         if(n%i==0){
//             bool=false;
//             break;
//         }
//     }
//     if(bool){
//         count++;
//         console.log(`${n} is prime number`);
//     }
//     else{
//         // console.log(`${n} is not a prime number`)
//     }
// }
// console.log("Number of prime numbers in between 1 to 100 is ",count);



// factorial

// 4! = 4*3*2*1 =24

// let n=5;
// let fact=1;
// while(n>0){
//     fact*=n;
//     n--;
// }

// console.log(fact)


// fibonacci

// 0   1  1         2 3 5 8 ....
// n1 n2  nth=n1+n2
//    n1   n2

// const prompt=require('prompt-sync')();
  
// let numbers=Number(prompt("Enter  number :"));

// let n1=0;
// let n2=1;
// let nth;

// while(numbers>0){
//     // console.log(n1);
//     process.stdout.write(n1+ " ");
//     nth=n1+n2;
//     n1=n2;
//     n2=nth;

//     numbers--;
// }

// let array=["1","2","3","4","5","6"];
// let sum=0;

// for(let arr of array){
//     sum+=Number(arr);
// }
// console.log(sum);


// let a=1234;
// let b=a.toString();

// let c= String(a);

// console.log(typeof a);
// console.log(a.toString(), typeof a);
// console.log(typeof b);
// console.log(typeof c);

// armstrong number
// 153 - 1^3+ 5^3 + 3^3  = 153

// let n=567;
// let temp=n;
// let count=String(n).length;

// let rem;
// let sum=0;

// while(n>0){
//     rem=n%10;
//     sum+=Math.pow(rem,count);
//     n=Math.floor(n/10);
// }
// console.log(sum)
// if(sum===temp){
//     console.log(`${temp} is a Armstrong number`)
// }else{
//     console.log(`${temp} is a NOT Armstrong number`)
// }


// duplicates

// let array=[7,8,3,4,5,2,4,5,7,8];
// let NoDuplicates=[];

// // let i;

// for(let i=0;i<array.length;i++){
//     let bool=true;
//     for(let j=0;j<array.length;j++){

//         if(array[i]===array[j] && i!=j){
//             // console.log('Duplicate',array[i]);
//             bool=false;
//             break;
//         }
//     }
//     if(bool){
//         NoDuplicates.push(array[i]);
//     }
// }
// console.log(NoDuplicates)

// remove duplicates

// let array=[7,8,3,4,5,2,4,5,7,8];
// let finalArray=[...new Set(array)];
// // 7 8 3 4  5 2

// console.log(finalArray)

// let array=[7,8,3,4,7,5,2,4,5,7,8];
// let newArray=[];

// for(let i=0;i<array.length;i++){
//     let bool=true;
//     for(let j=0;j<newArray.length;j++){
//         if(array[i]===newArray[j]){
//             bool=false;
//             break;
//         }
        
//     }   
//     if(bool){
//         newArray.push(array[i]);
//     }
// }      
// console.log(newArray)

// let array=[1,2,3,4,5,6,7,8,9,10]
    
// for(let i=0;i<array.length;i++){
//     let isEven=false;

//     if(array[i]%2===0){
//         isEven=true;
        
//     }
//     process.stdout.write(array[i]+" "+isEven+" ")
//     // process.stdout.write(`${array[i]} ${isEven}`);

// }

// array.forEach(arr=>{
//     if(arr%2===0){
//         console.log(arr);
//     }
// })

// const promise=require('prompt-sync')();

// let array=[1,2,3,4,7,5,6,7,8,9,10];
// let n=Number(promise("ENTER A NUMBER: "));

// console.log()

// for(let i=0;i<array.length;i++){
//     if(array[i]===n){
//         console.log("element present in the index:",i)
//     }
// }

// array.find(arr=>{
//     if(n===arr){
//         console.log("found at index "+array.indexOf(arr))
//     }
// })

// let index=array.findIndex(arr=>arr===n);
// console.log("found ar index",index)


// // Remove duplicates from an array

// let array=[4,5,8,3,4,8,6,9,6]
// let newArray=[]

// for(let i=0;i<array.length;i++){
//     let bool=true;

//     for(let j=0;j<newArray.length;j++){

//         if(array[i]===newArray[j]){
//             bool=false;
//         }

//     }
//     if(bool){
//         newArray.push(array[i])
//     }
// }
// console.log(newArray)


// print duplicates
// let array=[4,5,8,3,4,8,6,9,6,9,4]


// for(let i=0;i<array.length;i++){

//     let bool=false;

//     for(let j=i+1;j<array.length;j++){

//         if(array[i]===array[j]){
//             bool=true;
//         }

//     }
//     if(bool && array.indexOf(array[i])===i){
//         console.log(array[i]);
//     }
// }


// Sort an array
// let array=[6,34,2,6,7,5,898,232,4,6,8]

// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length-i-1;j++){

//         if(array[j]>array[j+1]){
//             let temp=array[j]
//             array[j]=array[j+1]
//             array[j+1]=temp
//         }

//     }
// }
// console.log(array)


// Find a missing number
// let array=[1,2,5,8,11];

// for(let i=0;i<array.length;i++){

//     if(array[i+1]-array[i]===1){
//         continue;
//     }else{
//         for(let j=array[i]+1;j<array[i+1];j++){
//             console.log(j)

//         }
//     }
// }


// // Find the frequency of array elements
// let array=[1,1,1,1,2,2,2,3,3]

// for(let i=0;i<array.length;i++){
//     let count =1;
//     let bool=false;
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]===array[j]){
//             bool=true;
//             count++;
//         }
//     }if(bool && array.indexOf(array[i])===i){

//         console.log(`${array[i]} occured `,count);
//     }
// }


// Find the most frequenct numner in array 
// let array=[1,1,1,1,2,2,2,3,3]
// let max=0;
// let maxOccuredNumber;

// for(let i=0;i<array.length;i++){
//     let count =1;
//     let bool=false;
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]===array[j]){
//             bool=true;
//             count++;
//         }
//     }if(count>max){
//         max=count;
//         maxOccuredNumber=array[i]

//         console.log(`${array[i]} occured`,count+" times");
//     }
// }
// console.log(maxOccuredNumber,max)


// // Find common elements in two arrays
// let array1=[1,2,3,55,7,9,8,864,]
// let array2=[9,8,5,6,7,43,2]


// for(let i=0;i<array1.length;i++){
//     let bool=false;
//     for(let j=0;j<array2.length;j++){

//         if(array1[i]===array2[j]){
//             bool=true

//         }
//     }
//     if(bool){
//         console.log(array1[i])
//     }
// }
       
           
// Find the second largest number
// let array=[71,2,3,4,5,7,5,21,1]
// let largest=-Infinity;
// let secondLargest=-Infinity;
// let thirdlargest=-Infinity;

// for(let i=0;i<array.length;i++){
//     if(array[i]>largest){
//         thirdlargest=secondLargest
//         secondLargest=largest
//         largest=array[i]
//     }else if(array[i]>secondLargest && array[i]!=largest){
//         thirdlargest=secondLargest
//         secondLargest=array[i]

//     }else if(array[i]>thirdlargest && array[i]!=largest && array[i]!=secondLargest){
//         thirdlargest=array[i]

//     }
// }
// console.log(largest,secondLargest,thirdlargest)



// Strings

// lowercase and uppercase

// let fullname="prashanth";
// console.log(fullname.toLocaleUpperCase());

//occurance of each character
// let fullName="prashanth";

// for(let i=0;i<fullName.length;i++){
//     let char=fullName[i];
//     let count=1;
//     // let bool=false;

//     for(let j=i+1;j<fullName.length;j++){
//         if(char===fullName[j]){
//             count++;
//             // bool=true
//         }
//     }
//     if(fullName.indexOf(fullName[i])==i){
//         console.log(`${char} occuered ${count} times`)
//     }
// }

// non repetetive charscters
// let fullName="swiss";

// for(let i=0;i<fullName.length;i++){
//     let bool=true;
//     for(let j=0;j<fullName.length;j++){

//         if(fullName[i]===fullName[j] && i!=j){
//             bool=false;
//         }

//     }
//     if(bool){
//         console.log(fullName[i])
//     }
// }


// remove duplicates

// let fullName="prashanth";
// let withoutDuplicates=[];

// for(let i=0;i<fullName.length;i++){
//     let bool=true;
//     for(let j=0;j<withoutDuplicates.length;j++){
//         if(fullName[i]===withoutDuplicates[j]){
//             bool=false;
//         }
//     }
//     if(bool){
//         withoutDuplicates.push(fullName[i])
//     }
// }
// console.log(withoutDuplicates)


// Count vowels and consonants

// let fullName="prashanth";
// const vowels=['a','e','i','o','u'];
// const vowel=[]
// const consonents=[]

// for(let i=0;i<fullName.length;i++){
//     let bool=false;
//     for(let j=0;j<vowels.length;j++){
//         if(fullName[i]===vowels[j]){
//             bool=true;
//         }
//     }
//     if(bool){
//         vowel.push(fullName[i])
//     }else{
//         consonents.push(fullName[i])
//     }
// }
// console.log(vowel)
// console.log(consonents)


// // Count the number of words in a sentence
// let sentence="i am prashanth";
// let word="";
// let array=[]

// for(let i=0;i<sentence.length;i++){

//     if(sentence[i]!==" "){
//         word+=sentence[i];
//     }
//     else{
//         array.push(word);
//         word="";
//     }
// }
// array.push(word)

// console.log(array)
// console.log(array.length)

// largest word
// Count the number of words in a sentence
let sentence="i am prashanth";
let word="";
let max=0
let maxword=""

for(let i=0;i<=sentence.length;i++){

    if(sentence[i]!==" " && i<sentence.length){
        word+=sentence[i];
    }
    else{
        if(word.length>max){
        max=word.length;
        maxword=word;
        }
        word=""
    }
    // word=""

}
console.log(maxword,max)
