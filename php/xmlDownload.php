<?php

// define some variables
$local_file1 = 'makleri';
$local_file2 = 'nabidky';
$server_file1 = '/F354044/makleri.xml';
$server_file2 = '/F354044/nabidky.xml';
$ftp_server = 'xmlmaxis.remax-slovakia.sk';
$ftp_user_name = 'rmxskxmlmaxis';
$ftp_user_pass = 'NWVxmJ2z8X0X';


// set up basic connection
$conn_id = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");


// login with username and password
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);


// try to download $server_file and save to $local_file
if (ftp_get($conn_id, $local_file1 . ".xml", $server_file1, FTP_BINARY)) {
    echo "Successfully written to $local_file1\n";
} else {
    echo "There was a problem\n";
}

if (ftp_get($conn_id, $local_file2 . ".xml", $server_file2, FTP_BINARY)) {
    echo "Successfully written to $local_file2\n";
} else {
    echo "There was a problem\n";
}

// close the connection
ftp_close($conn_id);

function save2JSON($fname){
    $xml_string = file_get_contents($fname . ".xml");
    $xml = simplexml_load_string($xml_string);
    $json = json_encode($xml, JSON_UNESCAPED_UNICODE);
    $array = json_decode($json,TRUE);

    if ($fname == "makleri") {
        foreach ($array["uzivatel"] as $value) {
            $i = $value["id"];
            $tmp[$i] = $value;
        }
    }

    if ($fname == "nabidky" ) {
        foreach ($array["nabidka"] as $value) {
            $i = $value["kod"];
            $tmp[$i] = $value;
        }
    }
    
    $tmp = json_encode($tmp, JSON_UNESCAPED_UNICODE);
    

         $file = fopen($fname . ".json",'w');
         fwrite($file, $tmp);
         fclose($file);

    
}

save2JSON($local_file1);
save2JSON($local_file2);

?>
