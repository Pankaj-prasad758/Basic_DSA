// Two sum check 

const twoSum = (num, target) => {
for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if(num[i]+num[j] === target) return [i,j];
        
    }
    
}
}
console.log(twoSum([2,7,12,4,3],15));
