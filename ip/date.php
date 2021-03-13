<?php
$token='1299257404:AAHanpkPrq_1X9e4r9S-Vpk7VYtABfLAgqk';
$chatId='@nightkingviewlog';

$ip = $_SERVER['REMOTE_ADDR'];
$detail = json_decode(file_get_contents("https://freegeoip.app/json/".$_SERVER['REMOTE_ADDR']),true);
$country = $detail["country_name"];
$text=' A new view from <b>'.$country."</b> \nIP: ".$ip." \nUser Agent: ".$_SERVER['HTTP_USER_AGENT'];

$sendResponseUrl = 'https://api.telegram.org/bot'.$token . '/sendMessage?parse_mode=HTML&chat_id='.$chatId.'&text='.urlencode($text).'';
file_get_contents($sendResponseUrl);
?>