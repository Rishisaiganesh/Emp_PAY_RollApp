window.addEventListener('DOMContentLoaded',(event) =>{
    const name = document.querySelector('#name')
    const textError = document.querySelector('.text-error')
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return
        }
        try
            {new EmployeePayrollData().name = name.value;;
            textError.textContent = " ";}
         catch (e) {
                  textError.textContent = e; 
            } 
        
    })
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output')
    output.textContent = salary.value
    salary.addEventListener('input',function(){
        output.textContent = salary.value;   
    })
})
//creating method EventListener to salary
var salary = document.querySelector('#salary')
var output = document.querySelector('.salary-output')
output.textContent = salary.value
salary.addEventListener('input',function(){
    output.textContent= salary.value;
})

class EmployeePayrollData {
    get id() {
        return this.id;
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
    get profilePic() {
        return this.profilePic;
    }
    set profilePic(profilePic){
        this.profilePic = profilePic;
    }
    get gender() {
        return this.gender;
    }
    set gender(gender) {
        this.gender = gender;
    }
    get department(){
        return this.department;
    }
    set department(department) {
        this.department = department;
    }
    get salary() {
        return this.salary
    }
    set salary(salary) {
        this.salary = salary;
    }
    get note() {
        return this.note;
    }
    set note(note) {
        this.note = note;
    }
    get startDate() {
        return this.startDate;
    }
    set startDate(startDate) {
        this.startDate = startDate;
    }
    toString() {
    
    const option = {year: 'number', month:'long', day='number'};
    const empDate = !this.startdate ? 'undefind': this.startdate.toLocalDataString('en-US',option);
    return "id=" +this.id+ ',name=' + this.name + ',salary=' +this.salary+ ',gender=' + this.gender+ 'startDate=' + empDate;
}
}

