// Example starter JavaScript for disabling form submissions if there are invalid fields
function check() {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
    const inputs = Array.from(
      document.querySelectorAll('input[name=telephone], input[name=email]')
    );
    console.log(telephone.checkValidity())
    console.log(email.checkValidity())
    
    const inputListener = e => {
      inputs
        .filter(i => i !== e.target)
        .forEach(i => (i.required = !e.target.value.length));
    };
  
    inputs.forEach(i => i.addEventListener('input', inputListener));

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          
          form.classList.add('was-validated')
        }, false)
        console.log(form.name + " " + form.checkValidity())})
  }