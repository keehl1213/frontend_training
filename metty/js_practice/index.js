import string from './src/string';
import object from './src/object_Regexp';
import array from './src/array';
import object_pratice06 from './json/object_pratice06';
import object_pratice07 from './json/object_pratice07';
import r_object_pratice06 from './json/r_object_pratice06';
import r_object_practice07 from './json/r_object_practice07';



console.log('...............................string...............................');

//1. 判斷重組字 結果:false
let s = 'rat';
let t = 'car';
let ss1 = string.work1(s, t);
console.log('ss1', ss1);

//2.字串反轉 結果:olleh
let str = 'hello';
let ss2 = string.work2(str);
console.log('ss2', ss2);


console.log('...............................object...............................');

//1. deep clone 結果:{aaa:'1', bbb:'2'}
var a = {
    text: 'aaa',
    book: { aaa: '1', bbb: '2' }
};
let oo1 = object.work1(a);
console.log('oo1', oo1);

//2. Date 結果'2020-09-22'
let oo2 = new Date().format();
console.log('oo2', oo2);

//3. class constructor for Person 
//結果 hi I'm john, 18 years old.
let john = new object.Person('john', 18);
let oo3 = john.sayhi();
console.log('oo3', oo3);

//4. regexp replace all
//結果 123b123c123d123e123f
let oo4 = object.replaceAll('abacadaeaf', 'a', '123');
console.log('oo4', oo4);

//5. email
let e1 = 'wistron@wistron.com';
let e2 = 'wistron.com';
let oo5_t = object.email_format(e1);
let oo5_f = object.email_format(e2);
console.log('oo5_t', oo5_t); //true
console.log('oo5_f', oo5_f); //false

//6. array to object
let oo6 = object.reduce_test(object_pratice06);
console.log('oo6', oo6);

//7. array to object
let oo7 = object.reduce_test1(object_pratice07);
let result = JSON.stringify(oo7);
console.log('oo7', result);

console.log('...............................reverse..............................');

//8. reverse object to array
let aaa = Object.entries(r_object_pratice06);
let oo8 = object.reverse(aaa);
let result1 = JSON.stringify(oo8);
console.log('oo8', result1);

//9. reverse object to array
let oo9 = object.reverse1(r_object_practice07);
console.log('oo9', oo9);

console.log('...............................array..............................');

// 1. deep clone array
let bbb = [1, 2, 3];
let s01 = array.array01(bbb);
console.log('s01', s01); // [1,2,3,4]

// 2. spread operator
let s1 = ["a", "b", "c"];
let t1 = ["d", "e", "f"];
let s02 = array.array02(s1, t1);
console.log('s02', s02); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//3.搜尋資料中id為特定的資料
let s03 = array.array03(5);
console.log('s03', s03);
// {
//     id: 5,
//     img: 'https://unsplash.it/300/300?image=946',
//     title: '美好時光1',
//     desc: '追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律',
//     price: 200,
//     discount: true
//}

// 4. 模糊搜尋title包含特定文字的資料
let s04 = array.array04('BEAUTIFUL');
console.log('s04', s04);
// 輸出：{
//         "id": 1,
//         "img": "https://unsplash.it/300/300?image=946",
//         "title": "美好時光1",
//         "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
//         "price": 200,
//         "discount": true
//     },
//     {
//         "id": 2,
//         "img": "https://unsplash.it/300/300?image=944",
//         "title": "美好時光2",
//         "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
//         "price": 300
//     },
//     {
//         "id": 3,
//         "img": "https://unsplash.it/300/300?image=882",
//         "title": "美好時光3",
//         "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
//         "price": 400
//     }

// 5. 新增一筆id=99的資料(內容隨意)，於id=10和id=11中間
let insert_item = { id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100 };
let s05 = array.array05(insert_item);
console.log('s05', s05);

// 6. 修改id為特定的資料
let revise_item = { title: '修改title', desc: '修改desc' };
let s06 = array.array06(3, revise_item);
console.log('s06', s06);
//{
//     id: 3,
//     img: 'https://unsplash.it/300/300?image=882',
//     title: '修改title',
//     desc: '修改desc',
//     price: 400
//   }

// 7. 刪除特定id的資料
let s07 = array.array07(5);
console.log('s07', s07); //已經刪除id為5的陣列

// 8. 依照價格排序
let s08 = array.array08('desc');//價格由高到低
console.log('s08', s08);
let s08_1 = array.array08('asc');//價格由低到高
console.log('s08_1', s08_1);

