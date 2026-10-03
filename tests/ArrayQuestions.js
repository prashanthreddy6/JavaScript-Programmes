
// Remove duplicates from an array

// let array=[4,5,8,3,4,8,6,9,6]
// let newArray=[];
// console.log(newArray.length)

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

// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length;j++){
//         if(!newArray.includes(array[j])){
//             newArray.push(array[j])
//         }

//     }
// }

// console.log(newArray)


// print duplicates

// let array=[4,5,8,3,4,8,6,9,6,9,4];
// let duplicates=new Set();
// // 4, 8,6

// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]===array[j]){
//             // console.log(array[i]);

//             duplicates.add(array[i]);
//             // break;
//         ,}
        
//     }
// }
// console.log(duplicates)
// console.log([...duplicates])


// Reverse an array

// let array=[1,2,3,4,5,6,7,8,9];
// console.log(array.length)

// // for(let i=0;i<array.length;i++)
// for(let i=array.length-1;i>=0;i--){
//     process.stdout.write(array[i]+" ")
// }

// Sort an array
// let array=[6,34,2,6,7,5,898,232,4,6,8];
// array.sort((a,b )=> a-b);
// console.log(array)


// Sort an array

// let array=[9,8,6,4,5,3,2,1];
// // 3 5 7 1
// //3 5 1 7


// for(let i=0;i<array.length;i++){
//     for(let j=0;j<array.length-i-1;j++){

//         if(array[j]>array[j+1]){
//             let temp=array[j];
//             array[j]=array[j+1]
//             array[j+1]=temp;
//         }
    
//     }
// }

// console.log(array)


// Find a missing number
// let array=[1,2,5,8,11];

// for(let i=0;i<array.length-1;i++){

//     let difference=array[i+1]-array[i]
//     // console.log(difference)

//     if(difference==1){
//         console.log("No element is missing");
//     }
//     else{
//         for(let j=array[i]+1;j<array[i+1];j++){
//             console.log(j);
//         }

        
//     }
// }

// Merge two arrays

// let a=[1,2,3]
// let b=[4,5,6]
// let merge=[];

// for(let i=0;i<a.length;i++){
//     merge.push(a[i]);
// }
// for(let j=0;j<b.length;j++){
//     merge.push(b[j]);
// }

// console.log(merge)





// let c=a.concat(b)
// console.log(c);

// let d=[...a,...b];
// console.log(d);

// for(let i=0;i<array.length-1;i++){
//     if(array[i+1]-array[i]===1){
//         console.log("nothing is missing")
//     }else if(array[i+1]-array[i]===2){
//         console.log("missing number are",array[i]+1)
//     }else if(array[i+1]-array[i]===3){
//         console.log("missing number ARE ",array[i]+1,array[i]+2)
//     }
// }



// Find the frequency of array elements

// let arr=[1,1,1,1,2,2,2,3,3];

// for(let i=0;i<arr.length;i++){
//     let count=1;
//     for(let j=i+1;j<arr.length;j++){

//         if(arr[i]===arr[j]){
//             count++
//         }
//     }
    
//     if(count>=1 && arr.indexOf(arr[i])==i){
//         console.log(arr[i]+" Occured "+count+" times")
//     }
// }


// Find common elements in two arrays
// let a=[1,2,3,55,7,9,8,864,]
// let b=[9,8,5,6,7,43,2]

// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<b.length;j++){
//         if(b.includes(a[i])){
//             console.log(a[i]);
//             break;

//         }
        
//     }
// }



// Find the second largest number

// let array=[71,2,3,4,5,7,5,21,1]
// let lagest=-Infinity;
// let secondLargest=-Infinity;

// for(let i=0;i<array.length;i++){

//     if(array[i]>lagest){
//         secondLargest=lagest;
//         lagest=array[i];
//     }else if(array[i]>secondLargest && array[i]!=lagest){
//         secondLargest=array[i];

//     }
// }

// console.log(lagest,secondLargest)

// let fullName="mam";
// let temp=fullName;
// let reverse="";

// for(let i=0;i<fullName.length;i++){
// //    console.log( fullName[i]);
//     reverse=fullName[i]+reverse;
// //    process.stdout.write(fullName[i]+"\n")
// }

// // console.log(" reverse ",reverse)
// if(temp===reverse){
//     console.log(temp,"palindrome")
// }else{
//     console.log(temp,"is not a palindrome")
// }


// let fullName="PRASHANTH";
// let a=fullName.toLocaleLowerCase();
// console.log(a);
// let b=a.toUpperCase();
// console.log(b);


// let fullName="prashanth";

// for(let i=0;i<fullName.length;i++){
//     let count=1;
//     for(let j=i+1;j<fullName.length;j++){

//         if(fullName[i]===fullName[j]){
//             count++;
//         }
//     }
//     if(fullName.indexOf(fullName[i])===i){
//         console.log(fullName[i]+" occured "+count+" times")
//         // console.log('duplicate character',fullName[i]);
//     }

// }


// Find duplicate characters
// let fullName="ppp";


// for(let i=0;i<fullName.length;i++){
//     let bool=false;
//     let ch=fullName.charAt(i);
    

//     for(let j=i+1;j<fullName.length;j++){

//         if(ch===fullName[j]){
//             bool=true;

//             // console.log(ch);
//             break;

//         }
//     }
//     if(bool && fullName.indexOf(fullName[i])==i){
//         console.log(ch);
//     }
// }


// Count vowels and consonants

// let fullName="prashanth";

// const vowels=['a','e','i','o','u'];

// for(let i=0;i<fullName.length;i++){
//     let bool=false;
//     let ch=fullName.charAt(i);

//     for(let j=0;j<vowels.length;j++){

//         if(ch===vowels[j]){
//             bool=true;
//             break;
//         }
//     }
//     if(bool){
//         console.log(ch,' is a vowel')
//     }else{
//         console.log(ch, 'is a consonent')
//     }
// }




// Count the number of words in a sentence
let sentence="i am prashanth";
let split=sentence.split(" ");
let length=split.length;

for(let i=length-1;i>=0;i--){
    process.stdout.write(split[i]+" ")

}

let join=sentence.split(' ').join('');
console.log(join)

// console.log(sentence.split(" "));
// console.log(split);