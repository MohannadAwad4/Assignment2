function myReverseArray(arr){
    let newArr=[]
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])

    }
    return newArr
}

console.log(myReverseArray([1,2,3,4,5]));