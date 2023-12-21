<?php
$file = 'saved_data.json';
if (file_exists($file)) {
    $data = file_get_contents($file);
    header('Content-Type: application/json');
    echo $data;
} else {
    http_response_code(404); 
}
?>