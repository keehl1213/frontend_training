// import data from './data.json';



// let find1 = data.reduce(function(accumulator, currentValue, currentIndex, array){
//    console.log(accumulator,currentValue)
//     return Math.max(accumulator, currentValue.price);;
// },0);

// console.log(find1);

import string from './string';
import object from './object_Regexp';

let s = 'rat';
let t = 'car';
let str = 'hello';
var a = {
    text: 'aaa',
    book:{aaa:'1', bbb:'2'}
};

string.work1(s,t); //判斷重組字 結果:false
string.work2(str); //字串反轉 結果:olleh
object.work1(a);  //deep clone 結果:aaa


