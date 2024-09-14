/*
const object = new Object(); // object literal
object.name="Serhat";
console.log(object);
*/

function Employee(name,age){
    this.name = name;
    this.age = age;
    this.showInfos = function(){
        console.log("Information showing...");
    }
}

const emp1 = new Employee("Serhat",23);
console.log(emp1);

console.log(emp1.toString());