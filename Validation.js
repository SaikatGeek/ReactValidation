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
  passwordStatus: false
}

if(passwordRef.current.value){
  if(passwordRef.current.value.length > 0 && passwordRef.current.value.length < 8 ){
    errorHas.password = true;
  }else{
    validMessage.passwordStatus= true;
  }
}

if(emailRef.current.value){  

  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailRef.current.value)) {
    validMessage.emailStatus= true;
  }
  else{
    errorHas.email = true;
  }
}


//Class Name
className={ errorHas.password ? errorMessage.isInvalid : validMessage.passwordStatus ? validMessage.isValid:'form-control' }