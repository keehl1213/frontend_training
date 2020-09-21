const work1 = (a) => {

    let b_str = JSON.stringify(a);//把物件轉字串
    let b = JSON.parse(b_str);    //把字串轉物件
    b.text = 'bbb';
    b.book.aaa = '3';
    return a.book;

}

// lodash
// const work1_1 = (a) => {
//     let b = _.cloneDeep(objects);
//     b.text = 'bbb';
//     b.book.aaa = '3';
//     return a.book;
// } 


class Person { //class constructor for Person
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayhi() {
        return `hi I'm ${this.name}, ${this.age} years old.`;
    }
}

function replaceAll(string, search, replace) { //regexp replace all

    const result = string.replace(new RegExp(search, 'g'), replace);
    return result;

}

const email_format = (e) => {
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[\w]+((\.|-)[\w]+)*\.[A-Za-z]+$/; 
    //開頭必須是英文或數字
    //@前可以出現 1 個以上的文字、數字或「-」的組合  或者  出現 1 個以上的文字、數字或「.」的組合
    //中間一定有@
    //@後只能出現「.」或是「-」，但這兩個字元不能連續時出現
    if (!emailRule.test(e)) {
        return false;
    } else {
        return true;
    }
}

export default {
    work1,
    Person,
    replaceAll,
    email_format
}