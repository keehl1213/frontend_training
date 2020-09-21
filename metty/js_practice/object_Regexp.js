const work1 = (a) => {

    var b = Object.assign({}, a); //先建立一個空物件，再把a的物件複製過去
    b.text = 'bbb';
    b.book.aaa = '3';
    console.log(a.book);

}


export default {
    work1,
}