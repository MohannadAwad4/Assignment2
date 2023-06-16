const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  
  function grabValues(obj){
    let arr=[];
    for(let key in obj){
        
        arr.push(obj[key])
    }
    
    
    return arr

  }
  
  console.log(grabValues(object1));