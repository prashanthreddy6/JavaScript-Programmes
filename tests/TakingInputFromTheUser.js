

// const prompt=require('prompt-sync'());

// import PromptSync from 'prompt-sync';
// const prompt=PromptSync();



    // let name1=prompt("enter a name")
    
    // for(let i=0;i<10;i++){
    //     process.stdout.write(i+" ");
    // }
    // console.log(name1)


    // arrow functions

    // filter , map, reduce, find, foreach, some , every

    let array=[1,2,3,4,5,6,7,8,9,10]

    const newArray=array.filter(arr=>Math.floor(arr%2===0));

    console.log(array)
    console.log(newArray)
    
    const newArray2=array.find(arr=>arr>5);
    console.log(newArray2)
    
    const newArray3=array.map(arr=>arr*10);
    console.log(newArray3)
    
    const newArray4=array.reduce((sum,arr)=>sum+=arr,0)
    console.log(newArray4)

    
