// Kalıtım - Inheritance
function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age);
}
// const person = new Person("Serhat",25);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}
// Overriding - İptal Etme
Employee.prototype.showInfos = function(){

    console.log("Name: " + this.name + " Age: " + this.age + " Salary: " +this.salary);

}
const emp = new Employee("Serhat",25,80000 );

// console.log(emp);
// emp.showInfos();
// emp.toString();

console.log(emp);


