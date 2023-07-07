let numeros = [31,15,7,3,2];
function cardinalitySort(nums) {
  /*  let numsOrder=[];
    for( let i=0;i<nums.length;i++){
       let binary= (nums[i]).toString(2);
       let numB=countBinary(binary);
       numsOrder[i]=numB;
    }
    return numsOrder;*/
    nums.forEach(num => {
        console.log(num);
    });
}

function countBinary(numB){
    let count;
    for(let i=0;i<numB.length;i++){
        if(numB[i]==1){
            count++;
        }else continue;
    }
    return count;
}

cardinalitySort(numeros);
