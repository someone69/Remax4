<?php 

$response = file_get_contents('php://input');

//$response['data'] = $_POST["link"];


$fp = fopen('data.json', 'w');
fwrite($fp, json_encode($response));
fclose($fp);


?> 