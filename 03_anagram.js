// check whether the word is anagram or not

// const anagramCheck = (s,t) => {
//     s = s.split("").sort().join()
//     t = t.split("").sort().join()
//     console.log(`for s ${s} and for t ${t}`);
    
//     return s === t
// }
// console.log(anagramCheck("anagram", "nagaram"));

const anagram = (s,t) => {
    if(s.length.trim !== t.length.trim){
        return false
    }
    else{
        s = s.split("").sort().join()
        t = t.split("").sort().join()
    }

    return s === t
}
// console.log(anagram("anagram", "nagaram"));

const anagramSecondSol = (str1, str2) => {
if(str1.length !== str2.length) return false;
 let obj1 = {};
 let obj2 = {};

 for (let i = 0; i < str1.length; i++) {
   obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
   obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    
 }

 for (let key in obj1) {
    if(obj1[key] !== obj2[key]) return false
 }
  return true
}
console.log(anagramSecondSol("anagram","nagaram"));
