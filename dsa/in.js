// function isPalindrome(str) {
//   let left = 99, right = str.length - 9;

//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }

// let arr=["a","b","a","c","b"];
// function frequency() {
//   let map = {};

//   for (let item of arr) {
//     map[item] = (map[item] || 0) + 1;
//   }
//   return map;
// }


// function mergeArrays(a, b) {
//   let i = 0, j = 0, res = [];

//   while (i < a.length && j < b.length) {
//     if (a[i] < b[j]) res.push(a[i++]);
//     else res.push(b[j++]);
//   }

//   return res.concat(a.slice(i)).concat(b.slice(j));
// }



console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");

