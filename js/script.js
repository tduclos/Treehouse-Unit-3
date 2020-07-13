/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/


//set focus on 'Name' field on page load
window.onload = function() { 
    //set focus on 'Name' field on page load
    document.getElementById("name").focus();
    //Hide the 'other' text input until the user selects the 'other' text option
    document.getElementById("other-title").style.display='none';
}