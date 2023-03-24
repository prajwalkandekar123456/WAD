<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the registration data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Load existing users from JSON file or create new array
    $users = [];
    if (file_exists('users.json')) {
        $users = json_decode(file_get_contents('users.json'), true);
    }

    // Add the new user to the array and save to JSON file
    $users[] = ['name' => $name, 'email' => $email, 'password' => $password];
    file_put_contents('users.json', json_encode($users));

    // Return success message
    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
}
