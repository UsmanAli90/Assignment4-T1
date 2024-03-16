$(document).ready(function () {
    $('#loginform').submit(function (event) {
        event.preventDefault();

        // Validate password
        var password = $('#mypassword').val();
        if (password === "" || !goodpass(password)) {
            alert("Password must contain special and numeric characters.");
            return false;
        }


        alert("Form submitted successfully!");
        $('#myForm').unbind('submit').submit();
    });
});

function goodpass(password) {
    var passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    return passwordRegex.test(password);
}

