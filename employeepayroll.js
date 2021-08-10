//uc12
class employee{
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    setName(newName) {
        this.name = newName;
    }
    setSal(newSal) {
        this.salary = newSal;
    }
    setId(newid) {
        this.id = newid;
    }
    details(doj, gender) {
        this.doj = doj;
        this.gender = gender;
    }

    display() {
        console.log('Id :',this.id,", Name :",this.name,', Salary :',this.salary,', Date of joining :',this.doj,', Gender :',this.gender);
    }
}
  
let a = new employee(1,'ABC',5000);
a.details('10/08/21','Male');
a.display();
a.setName('PQR');
a.setSal(10000);
a.setId(2);
a.details('09/08/21','Female');
a.display();
