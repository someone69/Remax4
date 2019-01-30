<?php 

$response = file_get_contents('php://input');

//$response['data'] = $_POST["link"];


$fp = fopen('team.json', 'w');
fwrite($fp, $response);
fclose($fp);
?> 