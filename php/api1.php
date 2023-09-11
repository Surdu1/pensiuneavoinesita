<?php
require_once 'firestore.php';
require_once 'link.php';
$db = new firebaseRDB($databaseURL);
$pret = new stdClass();
$data = $db -> retrieve('pret_normal');
$data = json_decode($data,1);
if($data){
$pret -> camera = $data['camera'];
$pret -> cabana = $data['cabana'];
}
$data = $db -> retrieve('pret_special');
$data = json_decode($data,1);
if($data){
$newinceput = date("d.m.Y", strtotime($data["inceput"]));
$newfinal = date("d.m.Y", strtotime($data["final"]));
$pret -> inceput = $data["inceput"];
$pret -> final = $data["final"];
$pret -> camera_special = $data['camera'];
$pret -> cabana_special = $data['cabana'];
$pret -> special = "Pe perioada " . $newinceput . " - ". $newfinal  ." rezervarea pentru o camera este ". $data["camera"] ."lei/zi si pentru toata pensiunea ". $data["cabana"] ."lei/zi";
}
$myJSON = json_encode($pret);
echo $myJSON;
?>