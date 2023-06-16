let arr = "Hello World";
let arr1=[1,2,3,4,5]
console.log(arr[10])
function myLastIndex(arr,target){
    
for(let i=arr.length-1;i>=0;i--){
    if(arr[i]===target){
        return i
    }
}
return -1
}
console.log(myLastIndex(arr,'l'))