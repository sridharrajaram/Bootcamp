/* Q3. Write a person class to hold all details. */

class Person{
    constructor(fname, lname, age, gen, ht, citizen){
        this.fname = fname;
        this.lname = lname;
        this.age = age; 
        this.gen = gen;
        this.ht = ht;
        this.nationality = citizen;        
    }
    fullName(){
        console.log(this.fname +" "+this.lname);
    }
};

const myself = new Person("Sridhar","Rajaram",34, "Male","5.5 Ft","Indian");
const son = new Person("Balendra","Naidu",5, "Male","2 Ft","Indian");

myself.fullName();
son.fullName();