const arr=[2,3,4,10]
function myIndexOf(arr,target,callback ){
    for(let i=0;i<arr.length;i++){
        if(callback(target,arr[i])){
            return i;
        }
        
    }
    return -1;

}
function findTarget(target,x){
    if(x===target){
        return true;
    }
    return false;

}
console.log(myIndexOf(arr,20,findTarget));