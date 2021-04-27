//================Test 1 =====================

function showArrayID (num) {
   var array = [
   {
      "id": 5,
      "img": "https://unsplash.it/300/300?image=868",
      "title": "城市幻影2",
      "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
      "price": 300
   },
   {
      "id": 3,
      "img": "https://unsplash.it/300/300?image=999",
      "title": "城市999",
      "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
      "price": 100
   },
   {
      "id": 1,
      "img": "https://unsplash.it/300/300?image=888",
      "title": "幻影888",
      "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
      "price": 2000
   }];

  console.log("Test 1:");
  console.log(array.find((item) => item.id === num));
}
showArrayID(5);

//================Test 2 =====================
function searchArrayTitle (searchStr) {
   var array = [
   {
      "id": 5,
      "img": "https://unsplash.it/300/300?image=868",
      "title": "城市幻影2",
      "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
      "price": 300
   },
   {
      "id": 6,
      "img": "https://unsplash.it/300/300?image=999",
      "title": "城市999",
      "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
      "price": 100
   },
   {
      "id": 4,
      "img": "https://unsplash.it/300/300?image=888",
      "title": "幻影888",
      "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
      "price": 2000
   },
   {
      "id": 1,
      "img": "https://unsplash.it/300/300?image=946",
      "title": "美好時光1",
      "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
      "price": 200,
      "discount": true
  },
  {
      "id": 2,
      "img": "https://unsplash.it/300/300?image=944",
      "title": "美好時光2",
      "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
      "price": 300
  },
  {
      "id": 3,
      "img": "https://unsplash.it/300/300?image=882",
      "title": "美好時光3",
      "desc": "追求心靈養生走入自然，便走入了永恆。我們用音樂邀您進入自然之道，聆聽永恆。自然、和諧，讓人一聽就會放鬆心情、解除一切武裝的旋律",
      "price": 400
  }];

  console.log("Test 2:");
  console.log(array.filter((item) => {
     if(item.title.indexOf(searchStr) >= 0)
      return item;
  }));
}
searchArrayTitle("美好");

//================Test 3 =====================
function addItemtoArray(item) {
   let array = [
      {id: 1, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100},
      {id: 2, img: 'xxx', title: 'xxx', desc: 'xxx', price: 200},
      {id: 3, img: 'xxx', title: 'xxx', desc: 'xxx', price: 300},
      {id: 4, img: 'xxx', title: 'xxx', desc: 'xxx', price: 400},
      {id: 5, img: 'xxx', title: 'xxx', desc: 'xxx', price: 500},
      {id: 6, img: 'xxx', title: 'xxx', desc: 'xxx', price: 600},
      {id: 10, img: 'xxx', title: 'xxx', desc: 'xxx', price: 800},
      {id: 11, img: 'xxx', title: 'xxx', desc: 'xxx', price: 2659},
      {id: 12, img: 'xxx', title: 'xxx', desc: 'xxx', price: 1200},
   ];

   let index = array.findIndex((item) => item.id === 11);
   console.log("Test 3:");
   console.log(array);
   array.splice(index, 0, item);
   console.log(array);
}
addItemtoArray({id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100});

//================Test 4 =====================
function modifyArray(id, modify)
{
   let array = [
   {
      "id": 1,
      "img": "https://unsplash.it/300/300?image=882",
      "title": "title",
      "desc": "desc",
      "price": 100
  },
  {
      "id": 2,
      "img": "https://unsplash.it/300/300?image=882",
      "title": "title",
      "desc": "desc",
      "price": 200
   },
   {
      "id": 3,
      "img": "https://unsplash.it/300/300?image=882",
      "title": "title",
      "desc": "desc",
      "price": 400
  }];

  let ele = array.find((item) => item.id === id);
   console.log("test 4:");
   console.log(array);
   ele = Object.assign(ele, modify);
   console.log(array);
}
modifyArray(3, {title: "修改title", desc: "修改desc"});

//================Test 5 =====================
function deleteID(id)
{
   let array = [
      {id: 1, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100},
      {id: 2, img: 'xxx', title: 'xxx', desc: 'xxx', price: 200},
      {id: 3, img: 'xxx', title: 'xxx', desc: 'xxx', price: 300},
      {id: 4, img: 'xxx', title: 'xxx', desc: 'xxx', price: 400},
      {id: 5, img: 'xxx', title: 'xxx', desc: 'xxx', price: 500},
      {id: 6, img: 'xxx', title: 'xxx', desc: 'xxx', price: 600},
      {id: 10, img: 'xxx', title: 'xxx', desc: 'xxx', price: 800},
      {id: 11, img: 'xxx', title: 'xxx', desc: 'xxx', price: 2659},
      {id: 12, img: 'xxx', title: 'xxx', desc: 'xxx', price: 1200},
   ];
   let index = array.findIndex((item) => item.id === id);
   array.splice(index, 1);
   console.log("test 5:");
   console.log(array);
}
deleteID(5);

//================Test 6 =====================
function sortArray(direction)
{
   let array = [
      {id: 1, img: 'xxx', title: 'xxx', desc: 'xxx', price: 1100},
      {id: 2, img: 'xxx', title: 'xxx', desc: 'xxx', price: 200},
      {id: 3, img: 'xxx', title: 'xxx', desc: 'xxx', price: 1300},
      {id: 4, img: 'xxx', title: 'xxx', desc: 'xxx', price: 400},
      {id: 5, img: 'xxx', title: 'xxx', desc: 'xxx', price: 1500},
      {id: 6, img: 'xxx', title: 'xxx', desc: 'xxx', price: 600},
      {id: 10, img: 'xxx', title: 'xxx', desc: 'xxx', price: 800},
      {id: 11, img: 'xxx', title: 'xxx', desc: 'xxx', price: 2659},
      {id: 12, img: 'xxx', title: 'xxx', desc: 'xxx', price: 1200},
   ];

   array.sort((a,b) => {
      if(direction == "asc") {
         return a.price - b.price;
      } else {
         return b.price - a.price;
      }
   });
   console.log(array);
}
console.log("Test 6");
sortArray("desc");
sortArray("asc");