console.log('class的基本使用！！！');
// 注意1：在class的{}中间，只能由构造器，静态属性和静态方法，实例方法等。
// 注意二：class关键字内部，还是原来的配方实现的，所以说class关键字，称作语法糖。
class Preson {
	// 这是类中的构造器，每一个类中都有构造器，如果我们程序员没有手动指定构造器，那么，可以认为类内部有个隐形的，看不见的空构造函数constructor(){}
	// 构造器作用，就是每当new这个类的时候，必然会优先执行构造器中的代码。
	constructor(name, age) {
		// 实例属性
	    this.name = name;
	    this.age = age;
	}
	// 在class内部，通过 static 修饰的属性，就是静态属性
	static info = 'hello';
	// 实例方法
	eat(){
		console.log(this.name + ' this is a good presons !!!');
	}
	// 静态方法
	static run(){
		console.log('这是静态方法 !!!');
	}
}

const pre = new Preson('wuhao',23);
console.log(pre);
// 通过 new 出来的实例，访问到的属性，叫做，实例属性。
console.log(pre.name);
console.log(pre.age); // 实例属性
// 静态属性：通过构造函数，直接访问到的属性，叫做静态属性。
console.log(pre.info); // undefined
console.log(Preson.info); // 可以访问,hello，静态属性
pre.eat();// 实例方法
// pre.run(); 
Preson.run(); // 静态方法