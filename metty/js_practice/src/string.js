// 1. 寫一個function, 給兩個字串s與t，回傳t是否為s的重組字

// 範例： 
// s = "anagram", t = "nagaram" 回傳true  
// s = "rat", t = "car" 回傳false

const work1 = (s,t) => {  

    return Array.from(s).sort().join("") === Array.from(t).sort().join(""); //字串轉陣列後排序，再轉回字串判斷是否一樣

}


// 2. 寫一個 function 將一個字串反轉後回傳

// 範例：

// s= "hello", return "olleh"

const work2 = (str) => {

    return Array.from(str).reverse().join(""); //字串轉陣列後反轉，再轉回字串

}

export default {
    work1,
    work2,
}