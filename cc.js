class Person{
    
    constructor(name){
        this.name=name;
    }
    sayHi(){
        console.log(this.name)
    }
}


let p=new Person('小孩')

console.log(p.name)
console.log(p.sayHi())
