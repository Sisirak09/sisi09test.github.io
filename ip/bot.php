<?php
 $token='1299257404:AAHanpkPrq_1X9e4r9S-Vpk7VYtABfLAgqk';
 $chatId='354748742';
 $text=$_GET["q"];
 $sendResponseUrl = 'https://api.telegram.org/bot'.$token . '/sendMessage?parse_mode=HTML&chat_id='.$chatId.'&text='.urlencode($text).'';
 file_get_contents($sendResponseUrl);
?>