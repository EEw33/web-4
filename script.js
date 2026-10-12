// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        // Additional custom validation for Password Match
        const pass = form.querySelector('#password');
        const confirmPass = form.querySelector('#confirmPassword');
        
        if (pass && confirmPass) {
            if (pass.value !== confirmPass.value) {
                confirmPass.setCustomValidity("Passwords do not match");
            } else {
                confirmPass.setCustomValidity(""); // Reset validity
            }
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()