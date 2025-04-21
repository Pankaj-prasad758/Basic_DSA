// Two sum check 

const twoSum = (num, target) => {
for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if(num[i]+num[j] === target) return [i,j];
        
    }
    
}
}
// console.log(twoSum([2,7,12,13,56,21,43,9,4,3],47));

// using Object 

const twoSumObj = (nums, target) => {
    let obj = {}

    for (let i = 0; i < nums.length; i++) {
       let  n = nums[i]
        if (obj[target - n] >= 0) {
            return [obj[target - n], i]

        }else{
             obj[n] = i
        }
    }
}
console.log(twoSumObj([2,7,12,13,56,21,43,9,4,3],47));
