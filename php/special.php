<?php
require_once 'database.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $cabana = $_POST["p_cab"];
    $camera = $_POST["p_cam"];
    $inceput = $_POST["date1"];
    $sfarsit = $_POST["date2"];
    $sql = "DELETE FROM preturi";
    $stmt= $pdo->prepare($sql);
    $stmt->execute();
    $sql = "INSERT INTO preturi (inceput,camera, cabana,final) VALUES (?,?,?,?)";
    $stmt= $pdo->prepare($sql);
    $stmt->execute([$inceput,$camera,$cabana,$sfarsit]);
    
}
?>