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

    validation(){
        var mobile = "91 9876543210";
        var regx = /^[\d]{2}[\s][6789][\d]{9}$/;
        if ( regx.test(mobile) == true ){
            console.log("Valid");
        }
        else{
            throw "Not Valid";
        }

        var email = "abc@gmail.com";
        var regx = /^([A-Za-z0-9._]+)(@)([\w]+)(.)([\w]{3})(.)?([\w]){2,3}?$/;
        if ( regx.test(email) == true ){
            console.log("Valid");
        }
        else{
            throw "Not Valid";
        }

        var uname = "Pk123";
        var regx = /^([A-Z])([\w]){1}([\w])+$/;
        if ( regx.test(uname) == true ){
            console.log("Valid");
        }
        else{
            throw "Not Valid";
        }

        var gender = "M";
        var regx = /^([MF])$/;
        if ( regx.test(gender) == true ){
            console.log("Valid");
        }
        else{
            throw "Not Valid";
        }
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
a.validation();