//All Elements

const usernameEl  = document.querySelector("#username");
const emailEl  = document.querySelector("#email");
const passwordEl  = document.querySelector("#password");
const conformPasswordEl  = document.querySelector("#conformpassword");

const showError = (input,massage) =>{

    let parentElement = input.parentElement;
    parentElement.classList= 'form-control error';

    const small = parentElement.querySelector("small");
    
    const successIcon = parentElement.querySelectorAll("i")[0];

    const errorIcon = parentElement.querySelectorAll("i")[1];
    
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility= 'hidden';
    small.innerText= massage;

};

const success = (input) =>{

    let parentElement = input.parentElement;
    parentElement.classList= 'form-control succeess';

    
    const successIcon = parentElement.querySelectorAll("i")[0];

    const errorIcon = parentElement.querySelectorAll("i")[1];
    
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility= 'visible';
    

};
const formEl = document.querySelector("#form");


const checkEmpty = (elements)=>{
    elements.forEach((element)=>{
        if (element.value=== '') {
            // element.parentElement.classList = 'form-control error'
            showError(element,'input required');
        } else{
            success(element);
        }

    });
   


}
const checkEmail = (emailEl)=>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(reg.test(emailEl.value)){
        success(emailEl)
    } else{
        showError(emailEl,'Invalid Email')
    }

}

const checkpassword = (input,min,max) =>{
    if(input.value.length < min){
        showError(input,`password at least ${min} character`)
    } else if(input.value.length >max){
        showError(input,`password maximum character ${max}`);
    } else{
        success(input);
    }
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()

    checkEmpty([usernameEl,emailEl,passwordEl,conformPasswordEl]);
    checkEmail(emailEl)
    checkpassword(passwordEl,6,20);
    checkpassword(conformPasswordEl,6,20);
    
    
    /* if(usernameEl.value === ''){
        // console.log("username is empty");
        usernameEl.parentElement.classList = 'form-control error';
    }
    if(emailEl.value === ''){
        emailEl.parentElement.classList = 'form-control error'
    }
    if(passwordEl.value === ''){
        passwordEl.parentElement.classList = 'form-control error'
    }
    if(conformPasswordEl.value === ''){
        conformPasswordEl.parentElement.classList = 'form-control error'
    }
    */

    

})