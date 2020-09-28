console.log('================ class中继承的使用!!! =============')
 // 在class 类中，可以使用 extends 关键字，实现子类继承父类;语法：class 子类 extends 父类{}
 // 父类
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	// 打招呼的实例方法
	sayHello(){
		console.log('大家好！！！');
	}
}
 // 子类
class American extends Person{
	constructor(name,age){
		// 如果一个子类通过extens关键字继承了父类，那么，在子类的constructor构造函数中。必须优先调用一下super()；super 是一个函数，它是父类的构造器的一个引用。
		super(name,age);
	}
}
const a1 = new American('Jack',34);
console.log(a1);
a1.sayHello();
 // 子类
class Chinese extends Person{
	constructor(name,age,idNumber){
		// 在子类中this只能放到super()后使用
		super(name,age);
		this.idNumber = idNumber;
	}
	print(){
		console.log('身份证号：'+ this.idNumber);
	}
}
const c1 = new Chinese('张三',31,'620503199705241617');
console.log(c1);
c1.sayHello();
c1.print();


console.log('================ class中继承的使用!!! =============')