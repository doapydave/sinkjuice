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

echo "Time: ".$time."<br>";
echo "Amt: ".$amount."<br>";
echo "Key: ".$key."<br>";
echo "Key_id: ".$key_id."<br>";
echo "<br>";
//$hash= MD5($time);
$hash= MD5($orderid + '|' +$amount + '|' + $time + '|' + $key);
echo "<br>";
echo "Create Hash...<br><br>";
echo "     HASH: ".$hash."<br>";


//wget https://paycom.credomatic.com/PayComBackEndWeb/common/requestPaycomService.go?
?>

<form name="autorizationForm" method="POST" action="https://paycom.credomatic.com/PayComBackEndWeb/common/requestPaycomService.go">

	<input type="hidden" name="username" value="<?php echo $name; ?>" id="username" />￼￼
	<input type="hidden" ￼name="type" value="auth" id="type" />￼￼
	<input type="hidden" ￼name="key_id" value="<?php echo $key_id; ?>" id="key_id" />￼￼
	<input type="hidden" ￼name="hash" value="<?php echo $hash; ?>" id="hash" />￼￼
	<input type="hidden" ￼name="processor_id" value=<?php echo "doap.com"; ?> id="processor_id" />￼￼<br>
<label> Timestamp:
	<input type="text" ￼name="time" value="<?php echo $time;  ?>" id="time" />￼￼
</label></br>
	<input type="hidden" ￼name="redirect" value="https://sinkjuice.com/confirmation/" id="redirect" />￼￼
	<input type="hidden" ￼name="orderid" value="<?php echo $time; ?>" id="orderid" />￼￼
	<input type="hidden" ￼name="processor_id" value="<?php echo "doap.com"; ?>" id="processor_id" />￼￼<br>
<label> Amount:
	<input type="text" ￼name="amount" value="<?php echo $amount; ?>" id="amount" />￼￼
</label><br>
<label> Credit Card Number:
	<input type="text" ￼name="ccnumber" value="<?php echo $ccnumber; ?>" id="ccnumber" />￼￼
</label>
<br>
<label>CVV: 
	<input type="text" ￼name="cvv" value="<?php echo $cvv; ?>" id="cvv" />￼￼
</label>
<br>
<label>AVS: 
	<input type="text" ￼name="avs" value="<?php echo $avs; ?>" id="avs" />￼￼
</label>
<br>
<label>Zip: 
	<input type="text" ￼name="zip" value="<?php echo $zip; ?>" id="zip" />￼￼
</label>
<br>

	<input type="submit" ￼name="edtSubmit" value="Cobrar" />￼￼
</form>

Submit results look like this so far:
<br>
<br>
?response=3&responsetext=time parameter is empty&authcode=&transactionid=&avsresponse=&cvvresponse=&orderid=&type=&response_code=301&username=aporrasr201&time=1409844145&amount=&purshamount=&hash=3a26db49ff3779c994ee4a86242358b5
