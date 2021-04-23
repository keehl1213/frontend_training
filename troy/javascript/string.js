
function isMatch(a, b)
{
  console.log(a.match(b)!=null? "true" : "false")
}

function reverseString(a)
{
  console.log(a.split("").reverse().join(""));
}

isMatch("anagaram", "nagaram");
isMatch("rat", "car");
reverseString("hello");

