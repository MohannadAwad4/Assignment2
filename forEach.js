        //FOREACH
const arr0=[1,2,3,4]
function myForEach(arr,callback){
    
for(let i=0;i<arr.length;i++){
    callback(arr[i])
}
}

function forEachCallBack(x) {
    console.log(x *2)

}
myForEach(arr0,forEachCallBack)


