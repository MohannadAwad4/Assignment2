const arr=[2,3,4,10]
function myInclude(arr,target,callback ){
    for(let i=0;i<arr.length;i++){
        if(callback(target,arr[i])){
            return true;
        }
        
    }
    return false;

}
function findTarget(target,x){
    if(x===target){
        return true;
    }
    return false;

}
console.log(myInclude(arr,10,findTarget));