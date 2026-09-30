//var num1: number = 10;
//var num2: number = 20;

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


//var user: string[] = ['Roman', 'Sharif', 'Asad', 'Zain'];
//var age: number[] = [18, 19, 18, 19];

//user.push('Muhammad Mustafa');
//age.push(30);
//console.log(user);
//console.log(age);

//var emp: [string, number, boolean] = ['Roman Shaikh', 18, true];
//console.log(emp);

//var userData: {
//    name: string;
//    age: number;
//   city: string;
//} = {
//    name: 'Roman Shaikh',
//   age: 18,
//   city: 'hyderabadd'
//}

//userData.name='Roman Shaikh';
//console.log(userData);

//var userData: {

//    [key:string]:string | number | undefined

//} = {
//    name : 'Roman Shaikh',
//    age : 18,
//    company : undefined
//}

//userData.company="Web Growth Digital";
//userData.city="Hyderabad";
//console.log(userData);

//var value:any= 'Roman Shaikh';

//value = 100

//value=['Roman Shaikh'];

//value=true;

//value={}

//console.log(value);

//var value1:unknown="Roman Shaikh";
//value1=18;
//value1=['Roman'];
//value1={}
//value1="Roman Shaikh";


//function fruits(){
//    return "Apple";
//}

//function numbers(){
//    return 20;
//}

//function boolean(){
//   return true;
//}

//function fruit (){

//}


//function complex():number | string{
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

//function loopFunction(): never {
//   while (true) {
//        console.log("loop");
//   }
//}

//function simple1(): never {
//   throw new Error("Output and data not found");

//}


//console.log(simple1);

//var studentData: string | number | [] = "Roman";
//studentData = 20;
//studentData = [];

//console.log(studentData);

//interface Info {
//  name: string,
// age: number,
//collage: string
//}

//interface TeacherType extends Info {
//   subject: string
//}

//var studentsOBJ: Info = {
//   name: 'Roman Shaikh',
//  age: 18,
// collage: 'Degree Collage'
//}

//var teacherOBJ: TeacherType = {
//   name: 'Sam',
//  age: 40,
//  collage: 'Degree Collage',
//  subject: 'Math'
//}

//var managerOBJ: Info = {
//      name: 'Ali',
//     age: 50,
//    collage: 'Degree Collage'
//}

//interface personTA { name: string }
//interface personTB { age: number }
//type personTC = personTA & personTB

//type x = string | number


//var PersonDataA: personTA = { name: 'Roman Shaikh' };
//var PersonDataB: personTB = { age: 18 };

//var PersonDataC: personTC = {
//    name: 'Roman Shaikh', age: 18
//}

//type Datatype={name:string, email:string}

//interface a {name:string}
//interface b extends a  {email:string}

//var empData: Datatype={
//    name:'Roman Shaikh',
//    email:'romanshaikh@gmail.com'
//}


//var studentData: Datatype={
//    name:'Asad',
//    email:'asad@gmail.com'
//}

//enum whotype{
//  student="student",
//    teacher="teacher",
//management="management",
//  staf="staf",
//}

//var who:whotype.teacher;

//who=whotype.teacher

//console.log(whotype.management);


//var handlingEL=document.querySelector('h1')!;
//var anchorEL=document.querySelector('a')!;
//var anchorELclass=document.querySelector('.anchorclass')!;

//console.log(handlingEL.classList);

//console.log(anchorEL);

//console.log(anchorELclass);

//class Product {
//   private name: string;
//  protected price: number;
//   pID: number;
//  inCart: boolean = false;
// inOrdered: boolean = false;

//    constructor(name: string, price: number, pID: number) {
//      this.name = name;
//      this.price = price;
//      this.pID = pID;
//  }

//  addToCart(): void {
//      this.inCart = true;
//  }

// buyProduct(): string {
//      if (this.inCart) {
//          this.inOrdered = true;
//         return `Product ${this.name} is ordered for ${this.price}`;
//     } else {
//         return `No product in cart`;
//     }
// }
//}

//class Ordered extends Product {
// constructor() {
//     super("Laptop", 50000, 403);
//  }

//  getPrice(): number {
//       return this.price;
//  }
//}

//const order = new Ordered();

//console.log(order.getPrice());

//class Author {
//   login(name: string, password: string) {
//      if (name && password) {
//           return "Student Login";

//       } else {
//           return "Student Not Login";
//      }
//  }

//}


//class Student extends Author {

//  result(marks: number) {
//     if (marks > 36) {
//         return "Pass";
//       } else {
//         return "Failed";
//     }
//  }
//}

//var s1 = new Student();
//console.log(s1.result(20));

//class Teacher extends Author {

//   subject(subject: number) {
//      return "He tech" + subject;
//  }
//}
//var t1 = new Teacher();
//console.log(t1.login("Sam", "12345"));


//interface UserInfoType {
////name: string,
//   age: number,
//    email: string,
//    password: string
//}

//ar userinfo: UserInfoType = {
//    name: "Roman Shaikh",
//    age: 18,
//    email: "romanshaikh132@gmail.com",
// password: "Liker123!"
//}

//console.log(userinfo);

//class EmpInfo {
//    _name: string = "Roman Shaikh";
//    _email: string = "romanshaikh.com";

//   get name(): string {
//        return "Muhammad" + this._name
//    }

//   set email(val: string) {
//       this._email = "emp_" + val
//    }
//}

//var emp1 = new EmpInfo();
//emp1._email="romanshaikh@gmail.com";
//console.log(emp1._email);

//interface CollageDataType {
//    name: string;
//    displayTeachersName(): void;

//    getStudentlists(): string[]
//}

//class CollageData implements CollageDataType {
//    name: string;
//    constructor(cName: string) {
//        this.name = cName
//    }

//    displayTeachersName(): void {
//        console.log("Roman Shaikh", "sam", "Peter");
//    }

//    getStudentlists(): string[] {
//        return ['Anit','sam','bruce'];
//    }
//}

//var collage1 = new CollageData("Hayat Collage");

//collage1.displayTeachersName();
//collage1.getStudentlists();

//class Company {
//   static companyName: string = "Google";

//   getName() {
//       return "Google And YT";
//   }
//}

//var c1 = new Company();

//console.log(Company.companyName);

//console.log(c1.getName());

//let userData18: string | number | boolean = "Roman Shaikh"

//userData18 = 18

//if (typeof userData18 == "number") {
//    console.log("This is a number data type");
//}

//else if (typeof userData18 == "string") {
//    console.log("This is a string data type");
//} else {
//    console.log("his is a bool data type")
//}

//function checkDataType(data:string | number | boolean){
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

//function checkDetails(data: Order21 | Product21) {
//    if (data instanceof Order21) {
//        console.log("this is a order");
//    } else {
//        console.log("this is a product");
//    }
//}

//checkDetails(p1);

//interface userdata {
//   name: string,
//   city: string
//

//interface userinfo {
//   id: number,
//    email: string
//}

//var userData22: userdata | userinfo

//userData22 = {
//    name: 'Roman Shaikh',
//    city: 'Hyderabad'
//}

//var userData21: userdata | userinfo = {

//    id: 100,
//    email: 'roman123.com'
//}

//function checkUserInfo(data: userdata | userinfo) {

//   if ((data as userdata).name != undefined) {
//      console.log("This is user data")
//    } else {
//       "this iss a user info"
//   }

//}

//checkUserInfo(userData21);

//function Fruits3<T>(name: T): T {

//    return name;

//}

//let onlyFruit = Fruits3("Apple");
//let onlyNum = Fruits3(10);
//let onlyBool = Fruits3(true);

//console.log(onlyFruit);
//console.log(onlyNum);
//console.log(onlyBool);

//type PersonT = {
//    name: string,
//    age: number,
//    isExm: boolean
//}

//let PersonData: PersonT = {
//    name: "Muhammad Roman",
//    age: 18,
//    isExm: true
//}

//type PersonX = keyof PersonT;

//let PersonDataX: PersonX;
//let PersonDataX: keyof PersonT;


//PersonDataX = "name";
//PersonDataX = "age";
//PersonDataX = "isExm";

//console.log(PersonDataX);

//let userX: keyof typeof PersonData = "name";

//type UserDataKey = {
//   name: string,
//    id: number,
//   mobile: number,
//    readonly [key: | string]: | number | string;
//}

//var userData27: UserDataKey = {
//    name: "Roman Shaikh",
//    id: 804,
//    mobile: 3183461970,
//   marks: 85,
//   age: 18,
//city: "hyderabad"
//}

//interface CollageType {
//    name: string,
//    location: string,
//    students: number,
//    banch: number
//}

//var CollageData3: Partial<CollageType> = {
//    name: "Degree Collage",
//    location: "Hyderabad",
//    students: 1000,
//}

//console.log(CollageData3)

//namespace UserNameSpace {
//    export class Auth {
//        login() {
//            console.log("user login function");
//       }
//   }

//    export function getList() {
//        console.log("List of users");
//    }
//}

//var user8 = new UserNameSpace.Auth();
//user8.login();
//UserNameSpace.getList();

//function classLooger(constructor: Function) {

//    console.log(constructor.name);

//}

//function getKeyDetails(target: any, key: any) {
//    console.log(key);
//}

//@classLooger
//class CusomMaths {

//    @getKeyDetails
//    value1: number;
//    value2: number;
//    constructor(x: number, y: number) {
//        this.value1 = x;
//        this.value2 = y;
//    }
//}

//var cm1 = new CusomMaths(10, 20);

//type resulttype = {
//    name: string,
//    id: number,
//    email: string
//}

//function complexlogic(): Promise<resulttype> {
//    return new Promise((resolved) => {
//        setTimeout(() => {
//            resolved({
//                name:"Roman Shaikh",
//                id:804,
//                email:"romanshaikh132@gmail.com"
//            });
//        }, 2000);
//    })
//}

//complexlogic().then((data: resulttype) => {
//    console.log(data);
//});

type APIType = {
    userId: string,
    id: number,
    title: string,
    completed: boolean
}

async function apiCallHandling(): Promise<APIType> {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data: APIType = await result.json();
    console.log(data);
    return data;
}

apiCallHandling().then((data =>
    console.log(data)
))