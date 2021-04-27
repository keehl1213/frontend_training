
function isMatch(a, b)
{
  let newA = a.split("").sort().join("");
  let newB = b.split("").sort().join("");
  console.log(newA.match(newB)!=null? "true" : "false")
}

function reverseString(a)
{
  console.log(a.split("").reverse().join(""));
}

isMatch("anagram", "nagaram");
isMatch("rat", "car");
reverseString("hello");

