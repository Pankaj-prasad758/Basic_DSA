// create a function which identify a integer is a palindrome number or not

const checkPalindrome = (num) => {
  return num === +num.toString().split("").reverse().join("");
};
console.log( checkPalindrome(212));




