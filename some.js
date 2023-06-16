const arr=[3,-3,5,5,9];
function mySome(arr,callback){
    for(let i=0;i<arr.length;i++){
       if( callback(arr[i])){
        return true;
       }
    }
    return false;
}
const even = (element,arr,index) => element <0

console.log(mySome(arr,even))

