<?php
$visitor_ip = $_SERVER['REMOTE_ADDR'];
$visit_time = date("Y-m-d H:i:s");
$log_line = "$visit_time - IP: $visitor_ip\n";
file_put_contents("visitor_log.txt", $log_line, FILE_APPEND);
?>
