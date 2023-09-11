<?php
require_once 'firestore.php';
require_once 'link.php';
$db = new firebaseRDB($databaseURL);
if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_SESSION['username'])){
    $cabana = $_POST["cab"];
    $camera = $_POST["cam"];
    $db -> delete("pret_normal");
    header("Location: /");
}
?>