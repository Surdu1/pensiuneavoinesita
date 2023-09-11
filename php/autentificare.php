<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == "POST" && !isset($_SESSION['username'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    require_once 'firestore.php';
    require_once 'link.php';
    $db = new firebaseRDB($databaseURL);
    $data = $db -> retrieve('cont');
    $data = json_decode($data,1);
    if(password_verify($password,$data['password']) && $data['username'] == $username){
            $_SESSION['username'] = $username;
            header("Location: ./dashbord.php");
    }

}else{
    header("Location: ../index.html");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p></p>
</body>
</html>