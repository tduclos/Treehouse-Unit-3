/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/

//Declarations

const nameField = document.getElementById("name");
const otherField = document.getElementById("other-title");
const jobRole = document.getElementById('title');

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

//Activity Section

//Payment Section

//Form Validation