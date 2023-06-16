    //MYMAP

    const arr1=[1,2,3,4]
    function myMap(arr,callback){
    for(let i=0;i<arr.length;i++){
        
        callback(arr[i]);
    }
    }
    function MapCallBack(x){
        
        const mapArr=[];
        mapArr.push(x*2);
        console.log(mapArr);
    
    }
    myMap(arr1,MapCallBack);