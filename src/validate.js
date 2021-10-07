import { defineRule, configure } from 'vee-validate'

configure({
  validateOnInput: true,
})

// username
defineRule('username', value => {
  if (!value || !value.length) {
    return "* Username can't be empty"
  }

  if(value.length < 3 || value.length > 10) {
    return "* Username must between 3 ~ 10 character"
  }
  
  return true
})

// email rules
defineRule('email', value => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return "* Email can't be empty"
  }
  // Check if email
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!pattern.test(value)) {
    return '* Email must be a valid email'
  }
  return true
})

// password rules
defineRule('password', (value) => {
  if (!value || !value.length) {
    return "* Password can't be empty"
  }

  if(value.length < 6 || value.length > 12) {
    return "* Passowrd must between 6 ~ 12 character"
  }
  
  return true
});

// confirm password
defineRule('confirmed', (value, [target]) => {
  if (value !== target) {
    return '* Password must match';
  }
  if (!value || !value.length) {
    return '* Password must match';
  }
  return true;
});
