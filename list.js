let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  };
  
   

    const n1={
        value: 10
    }

 

 


//  function listToArray(lst){
//     const arr=[]
    
//      while(list!=null){
//          arr.push(list.value);
//          list=list.next;
        
//      }
//      return arr;
//  }
// console.log(listToArray(list));

//  function prepend(element,list){
//    let temp=element;
//    temp.next=list

//     return temp;
//  }
//   console.log(prepend(n1,list))

function nth(num,list){
    let arr=[]
    while(list!=null){
        arr.push(list.value);
        list=list.next;
                
    }
    return arr[num];

}
console.log(nth(2,list))