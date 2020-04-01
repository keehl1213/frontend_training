# Javascript


### ES5
- [JavaScript 標準參考教程](http://javascript.ruanyifeng.com/)
- [JS Introduction](https://hackmd.io/GYVgLARgjMUMYFoBMAGA7ANgWNKAmCAhhiikWAKZggUYUCceIEQA)
- [Scope & Closure](https://taian.su/2012-10-17-explaining-javascript-scope-and-closures-by-robert-nyman/)

### ES6/ES7
* [ES6教學](http://es6.ruanyifeng.com/)
    * [ES6新增語法](https://medium.com/@peterchang_82818/es6-10-features-javascript-developer-must-know-98b9782bef44)
 - [callback, promise, generator, async/await](https://noootown.wordpress.com/2016/11/13/callback-promise-fetch-yield-async-await/)

### Functional Programming - Array
- [常用方法](https://wcc723.github.io/javascript/2017/12/27/javascript-array-function/)

### ES6、ES7、ES8、ES9、ES10
[特性一覽表](https://juejin.im/post/5ca2e1935188254416288eb2)

### JS course (69minutes)

- [online video](https://scrimba.com/g/gintrotojavascript)

### JS training game
- [codecademy](https://www.codecademy.com/learn/introduction-to-javascript)(先完成這個)
- [code wars](https://www.codewars.com/trainer/setup)(junior部分)

### Home work (是否要出作業還是完成codecadmy?)

- concat
```
[1,2,3]
[4,5,6]
使用 concat 將兩陣列合併成 [1,2,3,4,5,6]

```
- forEach

```
[{name: 'john', age: 5} , {name: 'tom', age: 22}, {name: 'jack', age: 40}]

有份人員資料利用forEach 印出

john
tom
jack
```

- map
```
[{name: 'john', age: 5} , {name: 'tom', age: 22}, {name: 'jack', age: 40}]

有份人員資料,但少了email,利用map的方式,加入每個人的email資料

[
    {name: 'john', age: 18, email:'john@wistron.com'}, 
    {name: 'tom', age: 20, email:'tom@wistron.com'},
    {name: 'jack', age: 40, email:'jack@wistron.com'}}
]

```
- filter
```
[{name: 'john', age: 5} , {name: 'tom', age: 22}, {name: 'jack', age: 40}]

利用filter的方式age大於30歲的人員 

[{name: 'jack', age: 40}]

```
- some & every

```
[{name: 'john', age: 5} , {name: 'tom', age: 22}, {name: 'jack', age: 40}]

利用every 是否每一個人都超過 30 歲
利用some是不是有人低於 10 歲 

```

- map & Object.values & Object.keys

```
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

利用 Object.keys 印出 ["1234567890", "2345678901", "3456789012"]
利用 Object.values 印出 ["Nina Ricci", "Hello Kitty", "Pusheen the cat"]

```

- reduce
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
  
  利用reduce 將相同的projectCode 提取出成一個新的object 如下  
  
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
