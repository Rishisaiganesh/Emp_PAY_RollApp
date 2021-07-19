window.addEventListener('DOMContentLoaded',(event)=>{
    
//creating method EventListener to salary
var salary = document.querySelector('#salary')
var output = document.querySelector('.salary-output')
output.textContent = salary.value
salary.addEventListener('input',function(){
    output.textContent= salary.value;
})
 var name = document.querySelector("#name")
 var submitButton = document.querySelector("#submitbutton")
 var textError = document.querySelector(".text-error")
 let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2}$')
 name.addEventListener('input',function(){
        if(nameRegex.test(name.value))
        {
            textError.textContent ='valid name'
            submitButton.disabled = false;
        }
        if(!nameRegex.test(name.value))
        {
            textError.textContent='name invalid'
            submitButton.disabled= true
        }
 })
    var day = document.querySelector("#day")
    var month = document.querySelector('#month')
    var year = document.querySelector('#year');
    var currDate = new Date()
    function setCurrentDate() {
        month.value = currDate.getMonth();
        day.value = currDate.getDate();
        year.value = currDate.getFullYear();
      }
      function validateDate() {
        // future dates
        if (year.value == currDate.getFullYear() && month.value <= currDate.getMonth() &&
         day.value <= currDate.getDate()) 
        {
          textError.textContent = "";
      
        } else if (year.value < currDate.getFullYear()) {
          textError.textContent = "";
        } else if (year.value > currDate.getFullYear()) {
          setCurrentDate();
        } else  (year.value == currDate.getFullYear() && month.value > currDate.getMonth()) 
        {
          setCurrDate();
        } 
      }
      year.addEventListener("input", validateDate);
      month.addEventListener("input", validateDate);
      day.addEventListener("input", validateDate);    
});

