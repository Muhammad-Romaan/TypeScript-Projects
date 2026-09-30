"use strict";
//var num1: number = 10;
//var num2: number = 20;
Object.defineProperty(exports, "__esModule", { value: true });
//var sum: number = num1 + num2;
//console.log(sum);
//var oct: number = 0o100001;
//var hexa: number = 0b00001;
//var binary: number = 0x00001;
//console.log(oct + 10);
//var item: number = 100;
//var item2 = "50";
//var itemConverted = Number(item2);
//console.log(item + itemConverted);
//var str: string = "Roman Shaikh";
//var str: string = 'Roman Shaikh';
//var str: string = `Roman Shaikh`;
//console.log(str);
//var age: number = 18;
//var userName: string = "Roman Shaikh";
//console.log(`My name is ${userName} and my age is ${age} years`);
//var num : number =10;
//var str:string= num.toString();
//var str:string= "" + num;
//var booleanData=true;
//var str:string= booleanData.toString();
//var str:string= "" + booleanData;
//var items: boolean = true;
//var others: boolean;
//others = items;
//console.log(others);
//var data: null | string = null;
//var userName: null | string = "null";
//var login = true;
//if (login) {
//    userName = "Roman Shaikh";
//}
//console.log(typeof data);
//var iteme: string | undefined = undefined;
//console.log(typeof iteme);
//iteme = "Roman Shaikh";
//console.log(typeof iteme);
//# sourceMappingURL=index.js.map

//var bignNumber = 9007199254740991n;
//var x = 1n;
//var y = 2n;

//console.log(bignNumber + x);
//console.log(bignNumber + y);

//var sym = Symbol("Roman Shaikh");
//var sym2 = Symbol("18 years age");

//console.log(sym == sym2);

//console.log(sym);
//console.log(sym2);

//var user = ['Roman', 'Sharif', 'Asad', 'Zain'];
//var age = [18, 19, 18, 19];

//user.push('Muhammad Mustafa');
//age.push(30);
//console.log(user);
//console.log(age);

//var emp = ['Roman Shaikh', 18, true];
//console.log(emp);

//var userData = {
//    name: 'Roman Shaikh',
//    age: '18',
//    city: 'Hyderabad'
//};

//userData.name = 'Roman Shaikh';
//console.log(userData);

//var userData = {
//   name : 'Roman Shaikh',
//   age : 18,
//    company : undefined
//}

//userData.company="Web Growth Digital";
//userData.city="Hyderabad";
//console.log(userData);

//var value = 'Roman Shaikh';

//value = 100

//value=['Roman Shaikh'];

//value=true;

//value={

//}

//console.log(value);

//function complex() {
//let data = 9;
//let name = "Roman Shaikh"
//let type ="age";

//if(type=='age'){
//return data;
//}else {
//  return name
//}

//}

//console.log(complex);

//function loopFunction() {
//   while (true) {
//       console.log("loop");
//   }
//}


//function simple1() {
//    throw new Error("Output and data not found");

//}


//console.log(simple1);

//var studentData = "Roman";
//studentData = 20;
//studentData = [];

//console.log(studentData);

//const whotype = {
//    student: "student",
//    teacher: "teacher",
//    management: "management",
//    staf: "staf",
//};

//let who;

//who = whotype.teacher;

//console.log(who);
//console.log(whotype.management);


//class Product {
//   constructor(name, price, pID) {
//      this.name = name;
//      this.price = price;
//      this.pID = pID;
//    this.inCart = false;
//  this.inOrdered = false;
//}

// addToCart() {
//      this.inCart = true;
//  }

//   buyProduct() {
//      if (this.inCart) {
//          this.inOrdered = true;
//          return `Product ${this.name} is ordered for ${this.price}`;
//      } else {
//          return "No product in cart";
//      }
//  }
//}

//class Ordered extends Product {
//   constructor() {
//       super("Laptop", 50000, 403);
//  }

//   getPrice() {
//      return this.price;
// }
//}

//const order = new Ordered();

//console.log("Product Name:", order.name);
//console.log("Product ID:", order.pID);
//console.log("Price:", order.getPrice());

//order.addToCart();

//console.log("In Cart:", order.inCart);

//console.log(order.buyProduct());

//console.log("Ordered:", order.inOrdered);

//class Author {
//   login(name, password) {
//       if (name && password) {
//         return "Student Login";

//        } else {
//           return "Student Not Login";
//        }
//    }

//}

//class Student extends Author {

//    result(marks) {
//        if (marks > 36) {
//            return "Pass";
//       } else {
//            return "Failed";
//        }
//  }
//}

//var s1 = new Student();
//console.log(s1.result(20));

//class Teacher extends Author {

//  subject(subject) {
//      return "He tech" + subject;
//   }
//}
//var t1 = new Teacher();
//console.log(t1.login("Sam", "12345"));


//var userinfo = {
//    name: "Roman Shaikh",
//    age: 18,
//    email: "romanshaikh132@gmail.com",
//   password: "Liker123!"
//};

//console.log(userinfo);

//class EmpInfo {
//   _name = "Roman Shaikh";
//   _email = "romanshaikh.com";

//   get name() {
//       return "Muhammad" + this._name
//    }

//   set email(val) {
//        this._email = "emp" + val
//   }
//}

//var emp1 = new EmpInfo();
//emp1._email="romanshaikh@gmail.com";
//console.log(emp1._email);

//class CollageData {
//    constructor(cName) {
//        this.name = cName;
//    }

//    displayTeachersName() {
//        console.log("Roman Shaikh", "sam", "Peter");
//    }

//    getStudentlists() {
//        return ["Anit", "sam", "bruce"];
//    }
//}

//var collage1 = new CollageData("Hayat Collage");

//collage1.displayTeachersName();
//console.log(collage1.getStudentlists());


//class Company {
//  static companyName = "Google";
// getName() {
//        return "Google And YT";
//   }

//}

//var c1 = new Company();

//console.log(Company.companyName);

//console.log(c1.getName());


//let userData18 = "Roman Shaikh"

//userData18 = 18

//if (typeof userData18 == "number") {
//    console.log("This is a number data type");
//}

//else if (typeof userData18 == "string") {
//   console.log("This is a string data type");
//} else {
//   console.log("his is a bool data type")
//}

//function checkDataType(data){
//    if(typeof data == "number"){
//console.log("This is a number");
//    } else {
//        console.log("This is a string");
//    }
//}

//checkDataType("Roman Shaikh");

//class Product21 {

//}

//var p1 = new Product21();

//class Order21 {

//}

//var o1 = new Order21();

//function checkDetails(data) {
//   if (data instanceof Order21) {
//       console.log("this is a order");
//   } else {
//       console.log("this is a product");
//   }
//}

//checkDetails(p1);


// TypeScript interfaces JavaScript mein exist nahi karti

//var userData22 = {
//   name: 'Roman Shaikh',
//   city: 'Hyderabad'
//};

//var userData21 = {
//   id: 100,
//   email: 'roman123.com'
//};

//function checkUserInfo(data) {

//   if (data.name != undefined) {
//       console.log("This is user data");
//   } else {
//       console.log("this is a user info");
//   }

//}

//checkUserInfo(userData21);

//function Fruits3(name) {

//    return name;

//}

//let onlyFruit = Fruits3("Apple");
//let onlyNum = Fruits3(10);
//let onlyBool = Fruits3(true);

//console.log(onlyFruit);
//console.log(onlyNum);
//console.log(onlyBool);

//let PersonData = {
//    name: "Muhammad Roman",
//    age: 18,
//    isExm: true
//};

//let PersonDataX;

//PersonDataX = "name";
//PersonDataX = "age";
//PersonDataX = "isExm";

//console.log(PersonDataX);

//let userX = "name";

//var CollageData3 = {
//    name: "Degree Collage",
//    location: "Hyderabad",
//    students: 1000
//};

//console.log(CollageData3);


//var UserNameSpace;

//(function (UserNameSpace) {
//    class Auth {
//        login() {
//            console.log("user login function");
//        }
//    }

//    UserNameSpace.Auth = Auth;

//    function getList() {
//        console.log("List of users");
//    }

//    UserNameSpace.getList = getList;
//})(UserNameSpace || (UserNameSpace = {}));

//var user8 = new UserNameSpace.Auth();
//user8.login();

//UserNameSpace.getList();

//function classLooger(constructor) {
//    console.log(constructor.name);
//}

//function getKeyDetails(target, key) {
//    console.log(key);
//}

//class CusomMaths {
//    constructor(x, y) {
//        this.value1 = x;
//        this.value2 = y;
//    }
//}

//getKeyDetails(CusomMaths.prototype, "value1");
//classLooger(CusomMaths);

//var cm1 = new CusomMaths(10, 20);

//class CustomMath2 {
//    sum(x, y) {
//        return x+y;
//    }
//}

//var cm2 = new CustomMath2();
//console.log(cm2.sum(10, 20));

//function complexlogic() {
//    return new Promise((resolve) => {
//        setTimeout(() => {
//            resolve({
//                name: "Roman Shaikh",
//                id: 804,
//                email: "romanshaikh132@gmail.com"
//            });
//        }, 2000);
//    });
//}

// Use
//complexlogic().then((result) => {
//    console.log(result);
//});

async function apiCallHandling() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await result.json();

    console.log(data);
    return data;
}

apiCallHandling().then((data) => {
    console.log(data);
});




