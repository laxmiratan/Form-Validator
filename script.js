const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const password2 =document.getElementById('password2');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(String(input.value).toLowerCase()) ){
        showSuccess(input);
    }else{
        showError(input, 'Enter valid email')
    }
}



function checkRequired(inputArr){
    inputArr.forEach( (input) => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        } else{
            showSuccess(input);
        }
    });
}


//check password
function checkPasswordMatch(input1, input2){
    if(input1.value === input2.value){
        showSuccess(input2);
    }else{
        showError(input2, 'Password doesn`t match');
    }
}


//get the fieldName

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1,input.id.length) ;
}


function checkLength(input, min, max){
    if(input.value.length >= min && input.value.length <= max){
        showSuccess(input);
    }else{
        showError(input, `Size must be ${min} to ${max}`);
    }
}

form.addEventListener('submit', function(e){
    
    e.preventDefault();
    

    
    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 25);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
    

    // if(username.value === ''){
    //     showError(username, 'Username is required');
    // }else {
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email, 'Email is required');
    // }else if(!isValidEmail(email.value)){
    //     showError(email, 'Email is not valid')
    // }else {
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password, 'Password is required');
    // }else {
    //     showSuccess(password);
    // }

    // if(password2.value === ''){
    //     showError(password2, 'Password2 isPrequired');
    // }else {
    //     showSuccess(password2);
    // }

});