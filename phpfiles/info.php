<?php
/*
Include CORS - how ? Allow Headers! 
*/

include("conection.php");

$query = $mysqli->prepare("SELECT messages FROM `info`");
$query->execute();
$array = $query->get_result();

$response = [];

while($a = $array->fetch_assoc()){
    $response[] = $a;
}

$json = json_encode($response);
echo $json;

?>