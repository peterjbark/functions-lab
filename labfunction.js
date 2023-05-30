// 1. //
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}
console.log(maxOfTwoNumbers(2,4));
// 2. //
const maxOfThree = function(a,b,c){
    if (a>=b && a>=c){
        return a;
    } else if(b>=a && b>=c){
        return b;
    } else 
    return c;
}
console.log(maxOfThree(10,13,2));
// 3. //
function isCharAVowel(a){
    if (a === "a" || a === "e" || a === "i"|| a === "o" || a==="u"){
        return true;
    } else{
        return false;
    }
}
console.log(isCharAVowel("x"));
// 4. //
const sumArray = function(arr){
    let sum = 0;
    for(let i =0; i< arr.length; i++){
    sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]));
// 5. // 
function multiplyArray(arr){
 let prod = 1 ;
 for (let i=0; i< arr.length; i++){
    prod *= arr[i];
 }
 return prod;
}
console.log(multiplyArray([2,4,10]));
// 6. //
const numArgs = function (x){
let args = arguments.length
return args
}
console.log(numArgs(1,2,3,4,5))
// 7. //
function reverseString(x){
let split = x.split("");
let reversed = split.reverse();
let reversedString = reversed.join("");
return reversedString;
}
console.log(reverseString("hello"))
// 8. //
const longestStringInArray = function (arra){
    let longestAtm = arra[0].length;
    let answer = arra[0];
    for (let i = 1; i < arra.length; i++) {
        let maxi = arra[i].length;
        if (maxi > longestAtm) {
            answer = arra[i];
            longestAtm = maxi; // This will make it so that when maxi[i] iterates to the next string, in the comparison, longestAtm will be the previous maxi. 
        }
    }
    return answer;
}
console.log(longestStringInArray(["one","three","eleven","longeststring","a"]))
// 9. //
function stringsLongerThan(arr,a){

}
// 10. //
const addList = function (a){
let totalSum = 0;
for (let i=0;i<=arguments.length;i++){
    totalSum += a[i];
   } 
    return totalSum;
}
console.log(addList(1,2,3,4,5,6,7,8));