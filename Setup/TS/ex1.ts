class Student{
	id:number;
	name:string;
	constructor(a:number,b:string){
		this.id = a;
		this.name = b;
	}

	m1(){
		console.log(this.id);
	}
}

var student:Student = new Student(1,"student1");

console.log(student.id);
console.log(student.name);

student.m1();