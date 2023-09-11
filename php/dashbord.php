<?php
require_once 'firestore.php';
require_once 'link.php';
$db = new firebaseRDB($databaseURL);
session_start();
if(!isset($_SESSION['username'])){
  header("Location: /");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dashbord.css">
  <title>Dashbord</title>
</head>
<body>
    <div class="sectiune">
        <form action="normal.php" method="post">
          <h1>Pretul normal pentru rezervare</h1>
          <label for="cam">Pretul normal camera/zi</label>
          <input type="number" id="cam" name="cam" placeholder="camera" min="0" required>
          <label for="cab">Pretul normal pensiune/zi</label>
          <input type="number" id="cab" name="cab" placeholder="pensiunea" min="0" required>
          <button type="submit">Trimite</button>
        </form>
        <form action="special.php" method="post">
          <h1>Pretul pentru o anumita perioada</h1>
          <label for="date1">Inceputul Perioadei</label>
          <input type="date" id="date1" name="date1" required>
          <label for="date2">Sfarsitul Perioadei</label>
          <input type="date" id="date2" name="date2" required>
          <label for="p_cam">Pretul special camera/zi</label>
          <input type="number" id="p_cam" name="p_cam" placeholder="camera" min="0" required>
          <label for="p_cab">Pretul special pensiune/zi</label>
          <input type="number" id="p_cab" name="p_cab" placeholder="pensiunea" min="0" required>
          <button type="submit">Trimite</button>
        </form>
        <div class="afiseaza">
          <?php
          $data = $db -> retrieve('pret_normal');
          $data = json_decode($data,1);
          if($data){
          echo "<div class='normal'>";
          echo "<h1>Pret normal</h1>";
          echo "<p>Pret pensiune/zi: ". $data["cabana"] ."</p>";
          echo "<p>Pret camera/zi: ". $data["camera"] ."</p>";
          echo "</div>";
          }
          $data = $db -> retrieve('pret_special');
          $data = json_decode($data,1);
          if($data){
          echo "<div class='special'>";
          echo "<h1>Pret perioada speciala</h1>";
          echo "<p>Perioada: ". $data["inceput"] ."/". $data["final"] ."</p>";
          echo "<p>Pensiune/zi: ". $data["cabana"] ."</p>";
          echo "<p>Camera/zi: ". $data["camera"] ."</p>";
          echo "<a href='/php/delete_pret.php'><button type='button'>Sterge pretul special</button></a>";
          echo "</div>";
          }
          ?>
        </div>
    </div>
</body>
</html>