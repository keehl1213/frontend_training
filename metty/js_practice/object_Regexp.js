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

Date.prototype.format = function () {

    let yyyy = this.getFullYear().toString(); //以4位數返回年份                                   
    let mm = (this.getMonth() + 1).toString();  //返回月份，月份是0-11，所以再加1      
    let dd = this.getDate().toString();      //返回日期   
    let pad = '0';       

    return `' ${yyyy}-${mm.padStart(2,'0')}-${dd.padStart(2,'0')} '`;
    //return "'" + yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + "'";
};

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

//reduce版本
const reduce_test = (arr) => arr.reduce(function (accumulator, person) {
    const { name, age, city } = person;
    const item = {
        name,
        age
    };
    if (!accumulator[city]) {
        accumulator = {
            ...accumulator,
            [city]: [
                item
            ],
        };
    } else {
        accumulator[city].push(
            item
        )
    }
    return accumulator;

}, {});


export default {
    work1,
    Person,
    replaceAll,
    email_format,
    Date,
    reduce_test
}

