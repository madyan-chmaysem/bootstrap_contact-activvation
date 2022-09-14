<?php
header('Access-Control-Allow-Origin: *');
include("conection.php");

$name= $_POST["name"];
$email= $_POST["email"];
$phonenb= $_POST["phonenb"];
$messages= $_POST["messages"];
$query = $mysqli->prepare("INSERT INTO `info`(name,email,phonenb,messages) VALUE (?,?,?,?)");
$query->bind_param("ssss", $name, $email,$phonenb,$messages);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);
?>
