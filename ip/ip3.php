<?php 
 $ip = json_decode(file_get_contents("https://freegeoip.app/json/".$_SERVER['REMOTE_ADDR']),true);
 $country = $ip["country_name"];
 if ($country =="Iran") {
  echo "Iranians cant use this host";
 } else {
  echo file_get_contents("https://night-king.ir/672/index.html") ;
 }
?>