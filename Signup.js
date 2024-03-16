$(document).ready(function () {
    $('#signupform').submit(function (event) {
        event.preventDefault();

        var email = $('#myemail').val();
        if (email === "" || !isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        var password = $('#mypassword').val();
        if (password === "" || !goodpass(password)) {
            alert("Password must contain special and numeric characters.");
            return false;
        }

        var phone = $('#myphone').val();
        if (phone === "" || !goodphone(phone)) {
            alert("Please enter a valid phone number.");
            return false;
        }

        var age = $('#myage').val();
        if (age === "" || isNaN(age) || age < 18 || age > 100) {
            alert("Please enter a valid age between 18 and 100.");
            return false;
        }

        alert("Form submitted successfully!");

        $('#myForm').unbind('submit').submit();
    });
});


function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function goodpass(password) {
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    return passwordRegex.test(password);
}

function goodphone(phone) {
    var phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
}