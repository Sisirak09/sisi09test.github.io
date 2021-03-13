<!DOCTYPE html>
<html>
<head>
<title>ip checker</title>
<meta charset="UTF-8" />
</head>
<body>
 <script type="text/javascript">
  var ip = <?php echo file_get_contents("https://freegeoip.app/json/".$_SERVER['REMOTE_ADDR']); ?>
  alert(ip.country_name)
 </script>
</body>
</html>