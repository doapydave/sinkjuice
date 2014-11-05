<?php 
$name = "aporrasr201";
$time = time(); //unix timestamp 
$orderid = "1234";
$amount = "1.00";
$key_id = (string)'70320993';
$key = 'BAh61foJLpKksJX1dAY6GIGiFEH8lXDz';
$ccnumber = 4111111111111111;;
$cvv = 121;;
$avs = 122;;
$zip = 1233333;;

//echo "Time: ".$time."<br>";
//echo "Amt: ".$amount."<br>";
//echo "Key: ".$key."<br>";
//echo "Key_id: ".$key_id."<br>";
//echo "<br>";
//$hash= MD5($time);
$hash= MD5($orderid + '|' + $amount + '|' + $time + '|' + $key);
//echo "<br>";
//echo "Create Hash...<br><br>";
//echo "     HASH: ".$hash."<br>";


//wget https://paycom.credomatic.com/PayComBackEndWeb/common/requestPaycomService.go?
?>

<form name="autorizationForm" method="POST" action="https://paycom.credomatic.com/PayComBackEndWeb/common/requestPaycomService.go">

	<input type=hidden ￼name=time value=<?php echo $time;  ?> id=time />￼￼
	<input type="hidden" name="username" value="aporrasr201" id="username" />￼￼
	<input type="hidden" ￼name="type" value="auth" id="type" />￼￼
	<input type="hidden" ￼name="key_id" value="<?php echo $key_id; ?>" id="key_id" />￼￼
	<input type="hidden" ￼name="hash" value="<?php echo $hash; ?>" id="hash" />￼￼
	<input type="hidden" ￼name="redirect" value="https://sinkjuice.com/paycom/pago.php" id="redirect" />￼￼
	<input type="hidden" ￼name="orderid" value="Test01" id="orderid" />￼￼

<label> Amount:
	<input type="text" ￼name="amount" value="<?php echo $amount; ?>" id="amount" />￼￼
</label><br>
<label> Credit Card Number:
	<input type="text" ￼name="ccnumber" value="<?php echo $ccnumber; ?>" id="ccnumber" />￼￼
</label>
<br>

	<input type="submit" ￼name="edtSubmit" value="Cobrar" />￼￼
</form>
