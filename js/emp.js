//creating method EventListener to salary
var salary = document.querySelector('#salary')
var output = document.querySelector('.salary-output')
output.textContent = salary.value
salary.addEventListener('input',function(){
    output.textContent= salary.value;
})

class EmployeePayrollData {
    id
    name
    salary
    gender
    startdate
    
    constructor(...params){
        this.id = params[0]
        this.name = parms[1]
        this.salary = params[2]
        this.gender = params[3]
        this.startdate = params[4]
    }
    get name() {
        return this.name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{3}$');
        if(nameRegex.test(name))
        this.name = name;
        else
        throw 'Invalid Name content';
    }
    toString() {
    
    const option = {year: 'number', month:'long', day='number'};
    const empDate = !this.startdate ? 'undefind': this.startdate.toLocalDataString('en-US',option);
    return "id=" +this.id+ ',name=' + this.name + ',salary=' +this.salary+ ',gender=' + this.gender+ 'startDate=' + empDate;
}
}

