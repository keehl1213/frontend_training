import string from './src/string';
import object from './src/object_Regexp';
import object_pratice06 from './json/object_pratice06';
import object_pratice07 from './json/object_pratice07';

console.log('...............................string...............................');

//1. 判斷重組字 結果:false
let s = 'rat';
let t = 'car';
let ss1 = string.work1(s, t);
console.log(ss1); 

//2.字串反轉 結果:olleh
let str = 'hello';
let ss2 = string.work2(str);
console.log(ss2); 


console.log('...............................object...............................');

//1. deep clone 結果:{aaa:'1', bbb:'2'}
var a = {
    text: 'aaa',
    book: { aaa: '1', bbb: '2' }
};
let oo1 = object.work1(a);
console.log(oo1);

//2. Date 結果'2020-09-22'
let oo2 = new Date().format();
console.log(oo2);

//3. class constructor for Person 
//結果 hi I'm john, 18 years old.
let john = new object.Person('john', 18); 
let oo3 = john.sayhi();
console.log(oo3); 

//4. regexp replace all
//結果 123b123c123d123e123f
let oo4 = object.replaceAll('abacadaeaf', 'a', '123');
console.log(oo4);

//5. email
let e1 = 'wistron@wistron.com';
let e2 = 'wistron.com';
let oo5_t = object.email_format(e1);
let oo5_f = object.email_format(e2);
console.log(oo5_t); //true
console.log(oo5_f); //false

//6. array to object
let oo6 = object.reduce_test(object_pratice06);
console.log(oo6); 

//7. array to object
let oo7 = object.reduce_test1(object_pratice07);
let result = JSON.stringify(oo7);
console.log(result);

