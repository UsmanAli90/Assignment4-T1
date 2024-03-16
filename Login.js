$(document).ready(function () {
    $('#loginform').submit(function (event) {
        event.preventDefault();

        // Validate password
        var password = $('#mypassword').val();
        if (password === "" || !goodpass(password)) {
            alert("Password must contain special and numeric characters.");
            return false;
        }


        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        // Uncomment the following line to submit the form
        $('#myForm').unbind('submit').submit();
    });
});



// Function to validate password using regex
function goodpass(password) {
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    return passwordRegex.test(password);
}

