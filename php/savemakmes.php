<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$response = file_get_contents('php://input');

$fp = fopen('makmes.json', 'w');
fwrite($fp, $response);
fclose($fp);

?> 