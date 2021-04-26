//================Test 1 =====================

function deepClone(){
  var a = {text: "aaa"};
  var b = JSON.parse(JSON.stringify(a));
  b.text = "bbb";
  console.log("Test 1: "+a.text); // ‘bbb’
}
deepClone();


//================Test 2 =====================

Date.prototype.format=() => {
  let today = new Date();
  let dd  = today.getDate();
  let mm = today.getMonth()+1;
  if(dd < 10)
    dd = '0'+dd;
  if(mm < 10)
    mm = '0'+mm;
  console.log("Test 2: "+today.getFullYear()+"-"+mm+"-"+dd);
}
new Date().format();

//================Test 3 =====================

class Person {
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }

  sayhi() {
    console.log("Test 3: "+`hi I'm ${this.name}, ${this.age} year old`);// “hi I’m john, 18 years old”
  }
}
var john = new Person("John", 18);
john.sayhi();


//================Test 4 =====================

function replaceAll(str, search, replace) {
  console.log("Test 4: "+str.replace(new RegExp(search,"gm"), replace));
}
replaceAll("abacadaeaf", "a", "123"); 

//================Test 5 =====================

function isEmailFormat(str) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  console.log("Test 5: "+emailPattern.test(str));
}
isEmailFormat("wistron@wistron.com");
isEmailFormat("wistron.com");

//================Test 6 =====================
function transferObject()
{
  var obj = {};
  var person = [
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
  ];
  obj.TPE = person.filter((ele) => {
    if(ele["city"] == "TPE")
      return (delete ele.city);
  });

  obj.KHH = person.filter((ele) => {
    if(ele["city"] == "KHH")
      return (delete ele.city);
  });
  console.log("Test 6:");
  console.log(obj);
}
transferObject();

//==============test 7 ========================
function transferObject2()
{
  var obj = {};
  var projectInfo = [
    {
      project: 'project1',
      form: 'form1',
      part: 'part1',
      tooling: 1,
    },
    {
      project: 'project1',
      form: 'form1',
      part: 'part1',
      tooling: 2,
    },
    {
      project: 'project1',
      form: 'form1',
      part: 'part1',
      tooling: 3,
    },
    {
      project: 'project1',
      form: 'form1',
      part: 'part2',
      tooling: 4,
    },
    {
      project: 'project1',
      form: 'form1',
      part: 'part2',
      tooling: 5,
    },
    {
      project: 'project1',
      form: 'form2',
      part: 'part3',
      tooling: 6,
    },
    {
      project: 'project2',
      form: 'form3',
      part: 'part4',
      tooling: 7,
    },
    {
      project: 'project2',
      form: 'form3',
      part: 'part4',
      tooling: 8,
    },
  ];

  let prjobj = {};
  for(let i=0; i<5; i++)
  {
    let prjValue = `project${i}`;
    let prjArray;
    if( (prjArray = projectInfo.filter( ele => {if(ele.project == prjValue) return ele;})).length != 0)
    {
      let formobj = {};
      for(let j=0; j<5; j++)
      {
        let formValue = `form${j}`;
        let formArray;
        if((formArray = prjArray.filter( ele => {if(ele.form == formValue) return ele;})).length != 0)
        {
          let partobj = {};
          for(let l=0; l<5; l++)
          {
            let partValue = `part${l}`;
            let partArray;
            if((partArray =  formArray.filter( ele => {if(ele.part == partValue) return ele;})).length != 0)
            {
              partobj[partValue] = Object.values(partArray).map(item => item.tooling);
              // console.log( partobj[partValue] );
            }
          }
          formobj[formValue] = partobj;
        }
      }
      prjobj[prjValue] = formobj;
    }
  }
  Object.assign(obj, prjobj);
  console.log("Test 7");
  console.log(obj);
}
transferObject2();



