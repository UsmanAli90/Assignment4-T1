$(document).ready(function () {
    $('#signupform').submit(function (event) {
        event.preventDefault();

        // Validate email
        var email = $('#myemail').val();
        if (email === "" || !isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Validate password
        var password = $('#mypassword').val();
        if (password === "" || !goodpass(password)) {
            alert("Password must contain special and numeric characters.");
            return false;
        }

        // Validate phone number
        var phone = $('#myphone').val();
        if (phone === "" || !goodphone(phone)) {
            alert("Please enter a valid phone number.");
            return false;
        }

        // Validate age
        var age = $('#myage').val();
        if (age === "" || isNaN(age) || age < 18 || age > 100) {
            alert("Please enter a valid age between 18 and 100.");
            return false;
        }

        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        // Uncomment the following line to submit the form
        $('#myForm').unbind('submit').submit();
    });
});

// Function to validate email using regex
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password using regex
function goodpass(password) {
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    return passwordRegex.test(password);
}

// Function to validate phone number using regex
function goodphone(phone) {
    var phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
}