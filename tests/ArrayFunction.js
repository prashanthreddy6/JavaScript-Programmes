


let array=[];

let newArray=array.filter(arr=>arr>3);

console.log(newArray);

let new_array1=array.map(arr=>arr*10);
console.log(new_array1)

let n=array.find(arr=>arr>3);
console.log(n);

let m;

try{
    m=array.reduce((sum,num)=> {
        return sum+num;
    })
}catch(error){
    console.log("An error occured",error.message);
}finally{
    console.log("excuted");
    console.log(m);
}