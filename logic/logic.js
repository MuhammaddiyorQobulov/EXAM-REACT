let str1 = "salom";
let str2 = "A man, a plan, a canal: Panama";
let newStr = "";
function letters(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      newStr += str[i];
    }
  }
  return newStr;
}

let reverseStr = (string) => {
  let str = string.toLowerCase().split(" ").join("");
  let revStr = str.split("").reverse().join("");
  let res = revStr.split(" ").join("");
  return str == res ? true : false;
};

console.log(reverseStr(str1));
console.log(reverseStr(letters(str2)));
