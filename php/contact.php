<?php
$hypo = $_POST["hypo"];
$name = $_POST["name"];
$surname = $_POST["surname"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$typ = $_POST["typ"];
$typneh = $_POST["typneh"];
$krytie = $_POST["krytie"];
$mlady = $_POST["mlady"];
$hypoplus = $_POST["hypoplus"];
$message = $_POST["message"];
$region = $_POST["region"];
$mesto = $_POST["mesto"];
$psc = $_POST["psc"];
$ulica = $_POST["ulica"];
$EmailTo1 = "karierads@re-max.sk";
$EmailTo = "stefan.matis@re-max.sk";



$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
$header .= 'From: ' . "info@remaxdunajskastreda.sk" . "\r\n";
if ($typ== "Chcem byť maklér") {
    $EmailTo = $EmailTo1;
}
$Subject = "WEB: Kontakt " . $typ;

// prepare email body text
$Body = "Meno: ";
$Body .= $name . " " . $surname;
$Body .= "\n <br>";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n <br>";

$Body .= "Tel: ";
$Body .= $tel;
$Body .= "\n <br>";

$Body .= "Typ: ";
$Body .= $typ;
$Body .= "\n <br>";

$Body .= "Správa: ";
$Body .= $message;
$Body .= "\n <br>";

$Body .= "Typ nehnuteľnosti: ";
$Body .= $typneh;
$Body .= "\n <br>";

$Body .= "Región: ";
$Body .= $region;
$Body .= "\n <br>";

$Body .= "Mesto: ";
$Body .= $mesto;
$Body .= "\n <br>";

$Body .= "PSČ: ";
$Body .= $psc;
$Body .= "\n <br>";

$Body .= "Ulica: ";
$Body .= $ulica;
$Body .= "\n\n\n <br><br><br>";

$Body .= "Poznámky k financovaniu: ";
$Body .= "\n <br>";
$Body .= "Výška hypotéky: " . $hypo;
$Body .= "\n <br>";
$Body .= "Hypo pre mladých: " . $mlady;
$Body .= "\n <br>";
$Body .= "100% hypotéka: " . $krytie;
$Body .= "\n <br>";


// send email
$success = mail($EmailTo, $Subject, $Body, $header);

// redirect to success page
if ($success) {
    echo "success";
} else {
    echo "invalid";
}

?>
