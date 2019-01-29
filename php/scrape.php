<?php
header("Access-Control-Allow-Origin: *");

$link = $_GET["link"];
$contents = file_get_contents($link);
$contents  = array($contents);
$contents = json_encode($contents, JSON_UNESCAPED_UNICODE );
echo $contents;
?>