

const arr=[0,1,0,3,0,12,10]
function moveZeros(nums){
    let zeros=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            
            nums.splice(i,1)
             nums.push(0);
            
        }
        
    }
    
    
    
   
        return nums;

}
 console.log(moveZeros(arr))
// 1, 0, 0 , 2 , 3, 5