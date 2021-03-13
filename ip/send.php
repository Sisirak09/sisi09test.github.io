<?php
$token='1331804810:AAEAcl4rkyqWBDCfuN8wuqqPunxgNucACEE';
$chatId='porpic';
$text='متن پیغام مورد نظر';
$sendResponseUrl = 'https://api.telegram.org/bot'.$token . '/sendMessage?parse_mode=HTML&chat_id='.$chatId.'&text='.$text.'';


file_get_contents($sendResponseUrl);
?>