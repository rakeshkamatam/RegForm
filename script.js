const form = document.getElementById("form")
const uname = document.getElementById("uname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cpassword = document.getElementById("cpassword")
const tandc= document.getElementById("tc")

isValiduname=false;
isValidEmail=false;
isValidPassword=false;
isValidCpassword=false;
isTCCheck=false;



function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()

    isValiduname=false;
    isValidEmail=false; 
    isValidPassword=false;
    isValidCpassword=false;
    isTCCheck=false;

document.getElementById("duname").innerText = unameValue;
    document.getElementById("demail").innerText = emailValue;
    document.getElementById("dpassword").innerText = passwordValue;
    document.getElementById("dcpassword").innerText = cpasswordValue;
}

uname.addEventListener('keyup',checkUserName)
form.addEventListener('submit',(e)=>{

   e.preventDefault()
    validate()
})

function validate(){
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()

    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(uname)
        isValiduname=true;
    }
    if(emailValue===''){
        setError(email,'Eamil cannot be empty')
    }  
    else if(!emailCheck(emailValue)){
        setError(email,'Enter Valid Email Id')
    }
    else{        
        setSuccesss(email)
        isValidEmail=true;
    }

    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'user name should be minimum 8 characters')
    }
    else{        
        setSuccesss(password)
        isValidPassword=true;
    }

    if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpasswordValue !==passwordValue){
        setError(cpassword,'passwords not matched')
    }
    else{        
        setSuccesss(cpassword)
        isValidCpassword=true;
    }

     if(!tandc.checked){
         
        setError(tc,'click on agree terms checkbox')        
    }
    else{
        setSuccesss(tc)
        isTCCheck=true;
    }

    if(isValiduname && isValidEmail && isValidPassword && isValidCpassword && isTCCheck){
        window.location.href = "submit.html";
    }   
    
   
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small')
        small.innerText = message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccesss(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }


    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)       
        return valid
    }
}

function checkUserName(){
    let nameValue = uname.value.trim()
    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else{        
        setSuccesss(uname)
        isValidName =true
    }
}
