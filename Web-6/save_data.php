<?php
$data = file_get_contents('php://input');
$obj = json_decode($data);
$file = 'saved_data.json';
file_put_contents($file, json_encode($obj));
http_response_code(200);
?>