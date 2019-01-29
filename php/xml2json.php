<?php
$xmlFile = $_GET["link"];
$xml_string = file_get_contents($xmlFile);
$xml = simplexml_load_string($xml_string);
$json = json_encode($xml, JSON_FORCE_OBJECT);
$array = json_decode($json,TRUE);

if ($xmlFile == "makleri.xml") {
    foreach ($array["uzivatel"] as $value) {
        $i = $value["id"];
        $tmp[$i] = $value;
    }
}

if ($xmlFile == "nabidky.xml") {
    foreach ($array["nabidka"] as $value) {
        $i = $value["id"];
        $tmp[$i] = $value;
    }
}

echo json_encode($tmp, JSON_FORCE_OBJECT);
