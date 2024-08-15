function validateForm(event) {
    event.preventDefault();

    // Simple validation 
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const eventSelection = document.getElementById('eventSelection').value;

    if (!firstName || !lastName || !email || !phoneNumber || !eventSelection) {
        alert('Please fill out all fields.');
        return;
    }

   
    alert('Registration successful!');
}
