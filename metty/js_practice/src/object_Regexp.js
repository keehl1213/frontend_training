// 1. deep clone object
//   輸入物件，輸出一個深層複製的物件。兩者記憶體位置不能一樣。

// fix this bug, a.text should be 'aaa':
// var a = {text: 'aaa'};
// var b = a;
// b.text = 'bbb';

// console.log(a.text); 

const work1 = (a) => {

    let b_str = JSON.stringify(a);//把物件轉字串
    let b = JSON.parse(b_str);    //把字串轉物件
    b.text = 'bbb';
    b.book.aaa = '3';
    return a.book;

}


// 2. add a format prototype to Date
//   為 Date 新增一個原型方法為 format，可以執行 new Date().format()

//   format: 'YYYY-MM-DD'

// 範例：
// 輸入：new Date().format()
// 輸出：'2018-02-25'

Date.prototype.format = function () {

    let yyyy = this.getFullYear().toString(); //以4位數返回年份                                   
    let mm = (this.getMonth() + 1).toString();  //返回月份，月份是0-11，所以再加1      
    let dd = this.getDate().toString();      //返回日期   


    return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
    //return "'" + yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + "'";
};


// 3. class constructor for Person

// 範例：
// 輸入：
// var john = new Person('john', 18);
// john.sayhi(); // "hi I'm john, 18 years old"

class Person { //class constructor for Person
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayhi() {
        return `hi I'm ${this.name}, ${this.age} years old.`;
    }
}


// 4. regexp replace all

// 範例：
// 輸入： 'abacadaeaf', 'a', '123'
// 輸出： '123b123c123d123e123f'

function replaceAll(string, search, replace) { //regexp replace all

    const result = string.replace(new RegExp(search, 'g'), replace);
    return result;

}


// 5. regexp condition match email format

// 範例：
// 'wistron@wistron.com' return true
// 'wistron.com' return false

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


// 6. 請將下列Array轉換為指定的Object
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


//7. 請將下列Array轉換為指定的Object
const reduce_test1 = (arr) => arr.reduce(function (result, plan) {

    const { project, form, part, tooling } = plan;

    let project1 = result[project];
    if (!project1) {
        result = {
            ...result,
            [project]: {
                [form]: {
                    [part]: [tooling]
                }
            },
        };
        return result;
    }

    let form1 = project1[form];
    if (!form1) {
        project1[form] = {
            [part]: [tooling],
        }
        return result;
    }

    let part1 = form1[part];
    if (!part1) {
        form1[part] = [tooling];

    } else {
        form1[part].push(tooling);
        form1[part].sort();
    }

    return result;

}, {});

//8. 請將下列Object轉換為指定的Array
// const reverse_obj = (obj) => {
//     const city = Object.keys(obj);
//     let obj_length = Object.keys(obj).length;
//     let result = [];
//     for (let i = 0; i < obj_length; i++) {
//         let city1 = obj[city[i]];
//         if (city1) {
//             for (let j = 0; j < city1.length; j++) {
//                 let city_obj = {
//                     city: city[i]
//                 };
//                 let aa = city1[j];
//                 let person = { ...aa, ...city_obj };
//                 result.push(person);
//             }
//         }
//     }
//     return result;
// }
let reverse = (obj) => obj.reduce(function (result, entry) {
    const [city, person_list] = entry;
    const [list] = person_list;
    const item = {
        ...list,
        city
    };

    if (person_list.length > 1) {
        person_list.reduce(function (list2, person_list1) {
            return list2 = result.push(
                { ...person_list1, city });
        }, []);
    } else {
        result.push(item);
    }
    return result;
    
}, []);


const reverse1 = (o1) => {
let project_num = Object.keys(o1);
let reverse_result = project_num.reduce(function (result, project) {
    let form_num = Object.keys(o1[project]);
    let project_order = o1[project];

    form_num.reduce(function (part_list, form) {
        
        part_list = Object.keys(project_order[form]);

        part_list.reduce(function (tooling, part) {
            tooling = Object.values(project_order[form][part]);
            tooling.reduce(function (list, tooling_num) {
            return list = result.push(
                {
                    project,
                    form: form,
                    part: part,
                    tooling: tooling_num
                });
        }, []);

        }, []);

    
    }, []);

    return result;

}, []);
return reverse_result;
}

export default {
    work1,
    Person,
    replaceAll,
    email_format,
    Date,
    reduce_test,
    reduce_test1,
    reverse,
    reverse1
}

