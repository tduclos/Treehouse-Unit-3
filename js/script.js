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

const activityFeeDiv = document.createElement('div');
const activities = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');
let   totalFee = 0;

const paymentOptions= document.querySelector('#payment')
const selectPaymentOption = document.querySelectorAll('#payment option')[0];
const creditOption = document.querySelectorAll('#payment option')[1];
const creditCard = document.querySelector('.credit-card');
const paypal = document.querySelector('.paypal');
const bitcoin = document.querySelector('.bitcoin');

const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.getElementById("mail");
const activitiesOptions = document.querySelectorAll('.activities input')
const activitiesLegend = document.querySelector('.activities legend')
const cardNumber = document.getElementById('cc-num')
const zipCode = document.getElementById('zip')
const cvv = document.getElementById('cvv')

//Actions to take on page load
window.onload = function() { 
    //set focus on 'Name' field on page load
    nameField.focus();
    
    //Hide the 'other' field until the user selects the 'other' text option
    otherField.style.display='none';
    
    //remove unnessecary 'select payment' option
    selectPaymentOption.remove(); //why was it even there in the first place?
    
    //Hide deselected payment options
    paypal.style.display='none';
    bitcoin.style.display='none';
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

//hide color options until the user selects a design (Extra Credit part 1)
colorLabel.style.display='none';
colorOptions.style.display='none';

//listener to reveal correct color options once a design is selected.
designSelect.addEventListener('change', (e) => {
    
//Extra Credit part 1: Color label and options only appear after a design is selected
colorOptions.style.display='';
colorLabel.style.display='';
    
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
activities.append(activityFeeDiv); //Div to display the cost of the selected events
activityFeeDiv.textContent = `Your total will display here once you select your chosen event(s).`;

//listener to update the activities checklist & total fee
activities.addEventListener('change', (e) => {
    
    //adjust the total fee based on what was selected or deselected
    let eventCost = parseInt(e.target.getAttribute('data-cost'));
    activityFeeDiv.style.color = "Black" //this is here in case validation failure has changed the color to red
    
    if(e.target.checked){
        totalFee += eventCost;
    }else{
        totalFee -= eventCost;
    };
    
    //update the div with the new fee
    if(totalFee != 0){
        activityFeeDiv.textContent = `Total Cost: $${totalFee}`;
    }else{
        activityFeeDiv.textContent = `No events selected.`;
    };
    
    //find and enable/disable checkboxes of events that have conflicting times
        let eventTime = e.target.getAttribute('data-day-and-time');
        
        for (let i = 0; i < checkboxes.length; i ++) {
            const timeToCheck = checkboxes[i].getAttribute('data-day-and-time')
            if (eventTime === timeToCheck && e.target !== checkboxes[i]) {
                if (e.target.checked) {
                    checkboxes[i].disabled = true
                } else {
                    checkboxes[i].disabled = false 
                }
            }
        }     3
});

//Payment Section

paymentOptions.addEventListener('change', (e) => {
    if (e.target.value === 'credit card') {
        creditCard.style.display='';
        paypal.style.display='none';
        bitcoin.style.display='none';
    } else if (e.target.value === 'paypal') {
        creditCard.style.display='none';
        paypal.style.display='';
        bitcoin.style.display='none';
    } else if (e.target.value === 'bitcoin'){
        creditCard.style.display='none';
        paypal.style.display='none';
        bitcoin.style.display='';
    } 
});

//Form Validation

//Name
const nameValidation = () => {
    const testName = /^[a-zA-Z ]{2,30}$/;
    if (testName.test(name.value)) {
      name.style.borderColor = "lime";
      return true;
    } else {
      name.style.borderColor = "red";
      return false;
  }
}

//email 
const emailValidation = () => {
  const testEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    //regex courtesey of https://emailregex.com
  if (testEmail.test(email.value)) {
    email.style.borderColor = "lime";
    return true;
  }else {
    email.style.borderColor = "red";
    return false;
  }
}

//activities
const activitiesValidation = () => {
    for(let i =0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked) {
                activityFeeDiv.style.color = "Black"
                activityFeeDiv.textContent = `Total Cost: $${totalFee}`
                return true;
            } else {
                activityFeeDiv.style.color = "Red"
                activityFeeDiv.textContent = "Error: Select at least one activity!" 
            }
    } return false;
}

//credit card
const cardValidation = () => {
    const testCard = new RegExp(/[1-9][0-9]{12,15}/); 
        if (testCard.test(cardNumber.value)) {
            cardNumber.style.borderColor = "lime";
            return true;
        } else {
            cardNumber.style.borderColor = "red";
            return false;
        }
}

//zip code
const zipValidation = () => {
    const testZip = new RegExp(/^\d{5}(?:[-\s]\d{4})?$/); 
        if (testZip.test(zipCode.value)) {
            zipCode.style.borderColor = "lime";
            return true;
        } else {
            zipCode.style.borderColor = "red";
            return false;
        }
}

//cvv
const cvvValidation = () => {
    const testCvv = new RegExp(/^[0-9]{3}$/); 
        if (testCvv.test(cvv.value)) {
            cvv.style.borderColor = "lime";
            return true;
        } else {
            cvv.style.borderColor = "red";
            return false;
        }
}

//real-time name validation
nameField.addEventListener('change', () => {
    nameValidation();
});

//real-time email validation
email.addEventListener('change', () => {
    emailValidation();
});

//real-time card validation
cardNumber.addEventListener('change', () => {
    cardValidation();
});

//real-time zip validation
zipCode.addEventListener('change', () => {
    zipValidation();
});

cvv.addEventListener('change', () => {
    cvvValidation();
});

//submit button
form.addEventListener('submit', (e) =>{
    if (!nameValidation()) {
        e.preventDefault();
      }
    if (!emailValidation()) {
        e.preventDefault();
      }
    if (!activitiesValidation()) {
        e.preventDefault();
      }
    if (creditOption.selected === true){
        if (!cardValidation()){
            e.preventDefault();
        } 
        if (!zipValidation()){
            e.preventDefault();
        }
        if (!cvvValidation()){
            e.preventDefault();
        } 
    }
    
});