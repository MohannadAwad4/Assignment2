const arr3=[1,2,3,4]
function myFilter(arr,callback){
    
for(let i=0;i<arr.length;i++){
    callback(arr[i])
}
}

function isEven(x) {
    const temp=[];
    if(x%2==0){
        temp.push(x);
        console.log(temp)
    }

}
myFilter(arr3,isEven);
