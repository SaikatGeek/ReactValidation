const errorHas = {
  password: false,
  email: false
}

const errorMessage = {
  password: 'Password Must Be 8 Characters',
  email: 'Invalid Email Format',
  isInvalid: 'form-control is-invalid' 
}

const validMessage = {
  isValid: 'form-control is-valid',
  emailStatus: false,
  passwordStatus: false,
  disabled: false
}

if(passwordRef.current.value){
  if(passwordRef.current.value.length > 0 && passwordRef.current.value.length < 8 ){
    errorHas.password = true;
    validMessage.disabled = true;
  }else{
    validMessage.passwordStatus= true;
  }
}

if(emailRef.current.value){
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
  if (emailRef.current.value.match(validRegex)) {
    validMessage.emailStatus= true;
  }
  else{
    errorHas.email = true;
    validMessage.disabled = true;
  }
}
if(!emailRef.current.value || !passwordRef.current.value){
  validMessage.disabled = true;
}


//Class Name
className={ errorHas.password ? errorMessage.isInvalid : validMessage.passwordStatus ? validMessage.isValid:'form-control' }

//Button 
<button  
  disabled={ validMessage.disabled }
  onClick={submitForm} 
  className="btn btn-primary mb-3"
>
  Login
</button>   