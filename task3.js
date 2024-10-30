function generatePassword(length = 8) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  function checkPassword(password, confirmPassword) {
    return password === confirmPassword ? "Passwords match" : "Passwords do not match";
  }
  
  function generateAndCheckPassword(length = 8) {
    const useGeneratedPassword = confirm("Do you want to use a generated password?");
    let password = useGeneratedPassword ? generatePassword(length) : prompt("Enter your password:");
  
    const requirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    
    while (!requirements.test(password)) {
      alert("Password does not meet the requirements: it must contain at least one uppercase letter, one lowercase letter, and one number.");
      password = useGeneratedPassword ? generatePassword(length) : prompt("Enter a valid password:");
    }
  
    if (useGeneratedPassword) {
      const showPassword = confirm("Would you like to see the generated password?");
      if (showPassword) alert("Your password: " + password);
    }
  
    const confirmPassword = prompt("Please enter your password again for confirmation:");
    alert(checkPassword(password, confirmPassword));
  }
  
  generateAndCheckPassword(8);
  