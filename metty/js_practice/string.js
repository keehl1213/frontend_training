const work1 = (s,t) => {  

    return Array.from(s).sort().join("") === Array.from(t).sort().join(""); //字串轉陣列後排序，再轉回字串判斷是否一樣

}

const work2 = (str) => {

    return Array.from(str).reverse().join(""); //字串轉陣列後反轉，再轉回字串

}

export default {
    work1,
    work2,
}