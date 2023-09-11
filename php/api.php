<?php
session_start();
if(isset($_SESSION['username'])){
    header('Location: /php/dashbord.php');
}
else{
    echo '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="api.css">
        <title>Login</title>
    </head>
    <body>
        <form action="autentificare.php" method="POST">
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Trimite</button>
        </form>
    </body>
    </html>';
}
?>
