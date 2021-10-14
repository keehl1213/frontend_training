# Javascript
> 學習目標  
> - 常用語法
> - Functional Programming - Array
> - promise, async/await

### JS course (69minutes)

- [online video](https://scrimba.com/g/gintrotojavascript)

## JS training online
- [codecademy](https://www.codecademy.com/learn/introduction-to-javascript)

### Functional Programming - Array
- [常用方法](https://wcc723.github.io/javascript/2017/12/27/javascript-array-function/)

### ES6、ES7、ES8、ES9、ES10(需要看)
[特性一覽表](https://juejin.im/post/5ca2e1935188254416288eb2)

## 其他參考

### ES5
- [JavaScript 標準參考教程](http://javascript.ruanyifeng.com/)
- [JS Introduction](https://hackmd.io/GYVgLARgjMUMYFoBMAGA7ANgWNKAmCAhhiikWAKZggUYUCceIEQA)
- [Scope & Closure](https://taian.su/2012-10-17-explaining-javascript-scope-and-closures-by-robert-nyman/)

### ES6/ES7
* [ES6教學](http://es6.ruanyifeng.com/)
    * [ES6新增語法](https://medium.com/@peterchang_82818/es6-10-features-javascript-developer-must-know-98b9782bef44)
 - [callback, promise, generator, async/await](https://noootown.wordpress.com/2016/11/13/callback-promise-fetch-yield-async-await/)

### JS training online
- [code wars](https://www.codewars.com/trainer/setup)(junior部分)





### Testing 


1. 請說明 let、const、var 差異

2. 請說明 arrow function ()=>{} 跟普通的 function(){} 有什麼不同

3. 將兩陣列合併： [1,2,3] [4,5,6]，預期結果如下：

```
 [1,2,3,4,5,6]
```

4. 陣列的操作

資料集：
```javascript=
[
  {name: 'john', age: 5}, 
  {name: 'tom', age: 22}, 
  {name: 'jack', age: 40},
] 
```
 - 請印出 john  tom jack
 - 請幫每個人加上email資料，預期結果如下：
```javascript=
[
    {name: 'john', age: 18, email:'john@wistron.com'}, 
    {name: 'tom', age: 20, email:'tom@wistron.com'},
    {name: 'jack', age: 40, email:'jack@wistron.com'}}
]
```
 - 請找出age大於30歲的人員
 - 判斷是否每一個人都超過 30 歲
 - 判斷是不是有人低於 10 歲 

5. 物件的操作

```javascript＝
{
  "1234567890": {
    id: "1234567890",
    name: "Nina Ricci",
  },
  "2345678901": {
    id: "2345678901",
    name: "Hello Kitty",
  },
  "3456789012": {
    id: "3456789012",
    name: "Pusheen the cat",
  },
}
```

 - 請印出 ["1234567890", "2345678901", "3456789012"]
 - 請印出 ["Nina Ricci", "Hello Kitty", "Pusheen the cat"]


6. 請問下列程式碼 console.log 分別會印出什麼？ 

```javascript=
const obj1 = { a: 1, b: 2 };

let obj2 = obj1;
let obj3 = Object.assign({},obj1);

obj2.a = 3;

obj1.b = 5;

obj3.a = 7;

console.log(obj1.a)
console.log(obj1.b)
console.log(obj2.a)
console.log(obj2.b)
console.log(obj3.a)
console.log(obj3.b)
```

7. 請問==與===的差異並回答下方程式碼分別為 true 還是 false？

```javascript=
const a = '10';
console.log(10 == a);
console.log(10 === a);

console.log(null == undefined)
console.log(null === undefined)
```
8. 
* 請說明以下程式碼在做什麼，console.log會印出什麼?

```javascript=
for(var i = 0; i < 5; i++) {
  setTimeout(function(){ console.log(i); }, 20);
}
```

* 承上，若想要印出12345，method將如何改寫?


9. 請問console.log會印出什麼

```javascript=
console.log(1 + '2' * 3 + '4');
```
10. 請問 NaN 是什麼 ?

11. 將相同的projectCode 提取出成一個新的object 如下 

原始物件：
```
 [
    {
      "projectCode": "3PD0CZ01C001",
      "status": "Active",
      "productType": "NB",
      "productName": "XXX",    
      "partNumberId": "360.0B701.0011",    
      "manufacturerId": "Walk",
     
    },
    {
      "projectCode": "3PD0CZ01C001",
      "status": "Active",
      "productType": "NB",
      "productName": "XXX",     
      "partNumberId": "660.01208.0001",    
      "manufacturerId": "MACKING",
    
    },
    {
      "projectCode": "4PD0CZ01D003",
      "status": "Active",
      "productType": "GG",
      "productName": "ZZZ",    
      "partNumberId": "660.01208.0002",    
      "manufacturerId": "MACKING",

    }
  ]

  ```

  目標物件：
  ```
  
  [
      {
          "projectCode": "3PD0CZ01C001",
          "productType": "NB",
          "productName": "XXX",
          "listData": [
              {
                status: "Active",               
                partNumberId: "360.0B701.0011",              
                manufacturerId: "Walk",
               
              },
              {
                status: "Active"               
                partNumberId: "660.01208.0001"               
                manufacturerId: "MACKING"               
              }
          ]
      },
      {
          projectCode: "4PD0CZ01D003",
          productName: "ZZZ",
          productType: "GG",
           "listData": [
              {                
                status: "Active",
                partNumberId: "660.01208.0002",       
                manufacturerId: "MACKING"               
              }
          ]
      }
  ]

```
 

