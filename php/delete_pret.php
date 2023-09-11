<?php
require_once 'database.php';
session_start();
if(isset($_SESSION['username'])){
    $sql = "DELETE FROM preturi";
    $stmt= $pdo->prepare($sql);
    $stmt->execute();
    header("Location: /php/dashbord.php");
}
else{
    header("Location: /");
}
?>