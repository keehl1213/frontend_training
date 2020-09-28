import { result } from 'lodash';
import array_pratice from './array_pratice';
// 1. deep clone array
//   輸入陣列，輸出一個深層複製的陣列。兩者記憶體位置不能一樣。

// fix this bug, a should be [1,2,3]:

// var a = [1,2,3];
// var b = a;
// b.push(4);
// console.log(a); // [1,2,3,4]
const array01 = (arr) => {

    let b = Array.from(arr);
    b.push(4);
    return arr;

}

// 2. 寫一個 function 將回傳兩個陣列的組合(使用spread operator)。

// 飯例: 
// s = ["a", "b", "c"], t = ["d", "e", "f"] 回傳 ["a", "b", "c", "d", "e", "f"]
const array02 = (s, t) => {

    let spread_arr = [...s, ...t];
    return spread_arr;

}

// 3. 搜尋資料中id為特定的資料

// 範例：

// 輸入：5
// 輸出：{
//         "id": 5,
//         "img": "https://unsplash.it/300/300?image=868",
//         "title": "城市幻影2",
//         "desc": "如詩般迷炫的法文爵士好歌, 樸實無華且細膩的爵士樂編曲，凸顯了「幻影」專輯中歌詞的如詩美感",
//         "price": 300
//     }
const array03 = (id) => {

    let find_id = array_pratice.find(function (item) {
        return item.id === id;
    });
    return find_id;

}

// 4. 模糊搜尋title包含特定文字的資料

// 範例：
// 輸入：美好
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
const array04 = (filter_item) => {

    let filter_arr = array_pratice.filter(array => array.title.match(filter_item));
    return filter_arr;

}

// 5. 新增一筆id=99的資料(內容隨意)，於id=10和id=11中間

// 範例：
// 輸入：{id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100}
// 輸出：
// ...
// {id: 10, img: 'xxx', title: 'xxx', desc: 'xxx', price: 800},
// {id: 99, img: 'xxx', title: 'xxx', desc: 'xxx', price: 100},
// {id: 11, img: 'xxx', title: 'xxx', desc: 'xxx', price: 2659},
// ...
const array05 = (insert_item) => {

    array_pratice.splice(10, 0, insert_item);
    return array_pratice;

}

// 6. 修改id為特定的資料

// 範例：
// 輸入：3, {title: '修改title', desc: '修改desc'}
// 輸出：
// ...
// {
//         "id": 3,
//         "img": "https://unsplash.it/300/300?image=882",
//         "title": "修改title",
//         "desc": "修改desc",
//         "price": 400
//     },

// ...
const array06 = (id, revise) => {

    let find_id = array_pratice.find(function (item) {
        return item.id === id;
    });

    let result = Object.assign({},find_id,revise);;
    return result;
}

// 7. 刪除特定id的資料

// 輸入 5 輸出已經刪除完 id 為 5 的陣列
const array07 = (delet_id) => {
    
    let find_index = array_pratice.findIndex(function (item) {
        return item.id === delet_id;
    });
    array_pratice.splice(find_index, 1)
    return `已經刪除id為${delet_id}的陣列`;
    
}

// 8. 依照價格排序

// 輸入 desc or asc
// 輸出價格對應排序的陣列
const array08 = (order) => {
    
    if(order==='desc'){
        let desc = array_pratice.sort(function(a, b){
            return b.price - a.price;
        })
        return desc;
    }
    
    if(order==='asc'){
        let asc = array_pratice.sort(function(a, b){
            return a.price - b.price;
        })
        return asc;
    }
    
}


export default {
    array01,
    array02,
    array03,
    array04,
    array05,
    array06,
    array07,
    array08
}
