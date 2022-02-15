<?php
	$sender_name = $_POST['name'];
	$sender_email = $_POST['email'];
	$phone = $_POST['phone'];
	$city = $_POST['city'];
	$amount = $_POST['amount'];
	
	$body = $sender_name." sent a new message for you<br><br> Name: ".$sender_name."<br>Email: ".$sender_email."<br>Phone: ".$phone."<br>City: ".$city."<br>Amount: ".$amount;
	
	sendMail($sender_name , $sender_email, $body);
	
	function sendMail($sender, $sender_mail, $body) {
		$to = 'mdsakanjabin@gmail.com'; // Set Receiver Email Here
		$myemail = 'sender@domain.com'; // Set Sender Email Here
		$subject = "New QuickLend Client"; // Set Subject Here
		$headers = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";            
		$headers .= "From: QuickLend <sender@domain.com>\r\n"; // Set Header Here
		
		$message = $body;
		
		$sentmail = mail($to,$subject,$message,$headers);
		if($sentmail) { echo "Thank you for your submission. We will reply you very soon."; }
		else { echo "Mail not sent"; }
	}

?>