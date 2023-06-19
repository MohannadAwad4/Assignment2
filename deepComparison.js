const deepCompare=(source, target)=>{
    if(typeof(source)!==typeof(target)){
        return false;
    }
    if(typeof(source)==="array"){
        if(source.length!==target.length){
            return false;
        }
        return source.every((el,index)=>deepCompare(el,target[index]));

    }else if(typeof(source)==="object"){
        if(Object.keys(source).length!==Object.keys(target).length){
            return false;
        }
        return Object.keys(source).every((key)=>
        deepCompare(source[key],target[key]));
        
    }else if(typeof(source)==="date"){
        return source.getTime()===target.getTime();
    }
    return source ===target

};
console.log(deepCompare({a:{b:1}},{a:{b:1}}))