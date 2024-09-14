//console.log(this);// global scope

/*
const emp1 = {
    name: "Serhat",
    age: 23,
    showInfos:function(){console.log("Informations showings...");}
};

const emp2 = {
    name: "Emirhan",
    age: 24
}
emp1.salary = 80000;
emp1.showInfos();

console.log(emp1);
*/

function Employee(name,age,salary) { //constructive function
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function() {
        console.log(this.name,this.age,this.salary);
    }


}

const emp1 = new Employee("Serhat",23,80000);
const emp2 = new Employee("Emirhan",18,60000);

emp1.showInfos();
emp2.showInfos();














