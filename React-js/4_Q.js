function Login() {
    // Create a div element for the form
    const form = document.createElement('div');
    form.className = 'login-form';
  
    // Create a label and input element for the username
    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username:';
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.className = 'form-input';
  
    // Create a label and input element for the password
    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password:';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.className = 'form-input';
  
    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.className = 'form-button';
  
    // Append elements to the form
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(submitButton);
  
    // Return the form element
    return form;
  }
  
  // Render the Login component
  const loginComponent = Login();
  document.body.appendChild(loginComponent);