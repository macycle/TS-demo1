"use strict";
// const getResume=(name: string,age: number,bust: number)=>{
//     age<24&&bust>90&&console.log(name+'通过面试');
//     (age>24 || bust<90) &&console.log(name+'没有通过面试')
// }
// getResume('小红',19,98)
// getResume('小绿',38,78)
// interface Girl {
//     name: string;
//     age: number;
//     bust:number;
// }
// const girl={
//     name:'小红',
//     age:19,
//     bust:98
// }
// const getResume=(girl: Girl)=>{
//     girl.age<24&&girl.bust>90&&console.log(girl.name+'通过面试')
// }
// getResume(girl)
// class Girl{
//     protected content='hi boy!'
//     public sayHi(){
//         return this.content
//     }
// }
// class S extends Girl{
//     public sayLove(){
//         console.log(this.content)
//     }
// }
// let g=new S()
// console.log(g.sayHi())
// console.log(g.sayLove())
// class Person{
//     constructor(public name: string){
//         this.name=name
//     }
// }
var Gril = /** @class */ (function () {
    function Gril(_age) {
        this._age = _age;
    }
    Object.defineProperty(Gril.prototype, "age", {
        get: function () { return this._age; },
        set: function (age) { this._age = age; },
        enumerable: false,
        configurable: true
    });
    return Gril;
}());
var girl = new Gril(14);
console.log(girl.age);
girl.age = 19;
console.log(girl.age);
