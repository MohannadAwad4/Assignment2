const arr=[0,3,7,-5,9];
function mySome(arr,callback){
    for(let i=0;i<arr.length;i++){
       if( !callback(arr[i])){
        return false;
       }
    }
    return true;
}
const even = (element) => element >=0

console.log(mySome(arr,even))