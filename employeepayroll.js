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
        function validation(user, regx) {
            if (regx.test(user) == false) {
                throw 'Not Valid';
            }
            else {
                console.log('Valid');
            }
        }
        
        var mobile = "91 9876543210";
        var regx = /^[\d]{2}[\s][6789][\d]{9}$/;
        console.log('Mobile no.',mobile);
        try {
            validation(mobile, regx);
            }
        catch(e) {
            console.error(e);
        }
        
        var email = "abc@gmail@.com";
        console.log('Email',email);
        var regx = /^([A-Za-z0-9._]+)(@)([\w]+)(.)([\w]{3})(.)?([\w]){2,3}?$/;
        try {
            validation(email,regx);
            }
        catch(e) {
            console.error(e);
        }
        
        var uname = "Pk123";
        console.log('Username',uname);
        var regx = /^([A-Z])([\w]){1}([\w])+$/;
        try {
            validation(uname,regx);
            }
        catch(e) {
            console.error(e);
        }
        
        var gender = "M";
        console.log('Gender',gender);
        var regx = /^([MF])$/;
        try {
            validation(gender,regx);
            }
        catch(e) {
            console.error(e);
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