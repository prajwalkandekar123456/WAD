$(document).ready(function() {
    $('#reg-form').submit(function(e) {
        e.preventDefault();
        var formData = {
            'name': $('#name').val(),
            'email': $('#email').val(),
            'password': $('#password').val()
        };
        $.ajax({
            type: 'POST',
            url: 'register.php',
            data: formData,
            dataType: 'json',
            encode: true
        }).done(function(data) {
            // Redirect to user list page
            window.location.href = "userlist.html";
        });
    });
});

// Load user list on userlist.html page
$(document).ready(function() {
    $.getJSON('users.json', function(data) {
        var userList = '';
        $.each(data, function(key, user) {
            userList += '<li>' + user.name + ' - ' + user.email + '</li>';
        });
        $('#user-list').append(userList);
    });
});
