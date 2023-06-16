const arr=[1,2,3,4];


function myReduce(arr,callback){
    
    let total=0;
    for(let i=0;i<arr.length;i++){
        
        total=callback(total,arr[i]);
    }
    return total;
}
    function accumulator(x,y){
        return x+=y

    }
   

console.log(myReduce(arr,accumulator));