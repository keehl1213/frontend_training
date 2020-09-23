import string from './string';
import object from './object_Regexp';

let s = 'rat';
let t = 'car';
let str = 'hello';
var a = {
    text: 'aaa',
    book: { aaa: '1', bbb: '2' }
};
let e1 = 'wistron@wistron.com';
let e2 = 'wistron.com';
let d = new Date().format();
let arr = [
    {
        name: "Ryan",
        age: 10,
        city: "TPE"
    },
    {
        name: "Apeach",
        age: 8,
        city: "KHH"
    },
    {
        name: "Muzi",
        age: 15,
        city: "TPE"
    },
]

console.log(string.work1(s, t)); //判斷重組字 結果:false
console.log(string.work2(str)); //字串反轉 結果:olleh
console.log(object.work1(a));//deep clone 結果:{aaa:'1', bbb:'2'}

var john = new object.Person('john', 18); //class constructor for Person
console.log(d); //'2020-09-22'
console.log(john.sayhi()); //hi I'm john, 18 years old.
console.log(object.replaceAll('abacadaeaf', 'a', '123')); //123b123c123d123e123f
console.log(object.email_format(e1)); //true
console.log(object.email_format(e2));
console.log(object.reduce_test(arr)); //array to object
