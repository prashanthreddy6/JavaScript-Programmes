

// let names="mamam";
// let reversal="";

// for(let n of names){
//     reversal=n+reversal;
    
// }
// console.log(reversal)

// if(names===reversal){
//     console.log("Palindrome");
// }else{
//     console.log(" Not a Palindrome");
// }


// let n=123;
// let temp=n;
// let rem;
// let rev=0;

// while(n>0){
//     rem=n%10;
//     rev=rev*10+rem;  // 
//     n=Math.floor(n/10); // 12
// }

// console.log(rev)

// if(temp===rev){
//     console.log("pal")
// }else{
//     console.log("Not a palindrome")
// }




// let arr=[5,7,4,9,2,1]
// let largest=arr[0];
// let smallest=arr[0];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest=arr[i];
//     }

//     if(arr[i]<smallest){
//         smallest=arr[i];
//     }

// }
// console.log(largest,smallest);



let arr =  [7,5,8,9,3,5];

if(arr.length==0){
    console.log("empty array");
}else{
    let largest=-Infinity;
    let secondLargest=-Infinity
    let third=-Infinity;

    for(let i=0;i<arr.length;i++){

        if(arr[i]>largest){
            third=secondLargest;
            secondLargest=largest;
            largest=arr[i]
        }
        
        else if(arr[i]>secondLargest && arr[i]!=largest){
            third=secondLargest;
            secondLargest=arr[i];
            
        }
        else if(arr[i]>third && arr[i]!=secondLargest && arr[i]!=largest){
            arr[i]=third;

        }
    }

    if(secondLargest===-Infinity){
        console.log("no second lagest")
    }else{
        console.log("secondLargest is",secondLargest)
    }

    console.log("largest is ",largest)
    console.log("3rd largest is ",third)

}
