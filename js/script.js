/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/

//Declarations

const nameField = document.getElementById("name");
const otherField = document.getElementById("other-title");
const jobRole = document.getElementById('title');
const themeSelectOption = document.querySelectorAll('#design option')[0];
const colorLabel = document.querySelector('label[for="color"]');
const colorOptions = document.getElementById('color');
const designSelect = document.querySelector('#design');

//Actions to take on page load
window.onload = function() { 
    //set focus on 'Name' field on page load
    nameField.focus();
    //Hide the 'other' field until the user selects the 'other' text option
    otherField.style.display='none';
}

//Job Role Section

//listener to show/hide the 'other' field based on the user's selected job role
jobRole.addEventListener('change', (e) => {
    
   if(e.target.value ==='other'){
       otherField.style.display='';
   }else{
       otherField.style.display='none';
   }
    
});

//T-shirt Section

themeSelectOption.style.display='none'; //stop user from selecting the 'select design' option

//hide color options until the user selects a design
colorLabel.textContent = 'Select a T-Shirt design first!';
colorOptions.style.display='none';

//listener to reveal correct color options once a design is selected.
designSelect.addEventListener('change', (e) => {
    
colorOptions.style.display='';
colorLabel.textContent = 'Color:';
    
    for(let i=0; i<colorOptions.length; i++){
        if(e.target.value === 'js puns'){
            if(colorOptions[i].innerHTML.includes('JS Puns')){
                colorOptions[i].style.display = '';
                colorOptions[0].selected = true; //backup to ensure the user can't select a color and then switch designs, resulting in an invalid combination
            }else{
                colorOptions[i].style.display='none';
            }
        }else if(e.target.value === 'heart js')
            if(colorOptions[i].innerHTML.includes('JS shirt')){
                colorOptions[i].style.display = '';
                colorOptions[3].selected = true;
            }else{
                colorOptions[i].style.display='none';
            }
    }

});

//Activity Section

//Payment Section

//Form Validation