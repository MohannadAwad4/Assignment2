const arr=[1,2,3,4]
console.log(arr.length)


function myPush(arr,newElement){
    arr.length+=1
    arr[arr.length-1]=newElement;
    console.log(arr);
}
myPush(arr,10)