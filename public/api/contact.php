<?php

// Expects a few parameters in a JSON POST body:
// fname - name of person sending email
// fphone - phone number of person sending email (Optional)
// email - email address of person sending email
// message - message body
// token - CAPTCHA token

define("ADMIN_EMAIL", "admin@jbayplotandplan.co.za");

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

function clean_input($input) {
    $cleaned = trim($input);
    $cleaned = stripslashes($cleaned);
    $cleaned = htmlspecialchars($cleaned);
    return $cleaned;
}

$captcha_token = $_POST['token'];

if ( empty($_POST['fname']) && empty($_POST['email']) ) {
    die();
}

// Check ReCAPTCHA validation
$captcha_data = http_build_query(array(
    "secret" => "6Lc9ZykaAAAAAEG9SCN7t7fVPMEaDKwXJXDf_sXr",
    "response" => $captcha_token,
    "remoteip" => $_SERVER['REMOTE_ADDR']
));

$opts = array('http' => array(
    'method' => 'POST',
    'header' => 'Content-type: application/x-www-form-urlencoded',
    'content' => $captcha_data
));

$context = stream_context_create($opts);
$response = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
$result = json_decode($response);

if(!$result->success) {
    http_response_code(200);
    echo json_encode(array(["sent" => false, "message" => "ReCAPTCHA Failed"]));
    exit();
}

if($_POST) {
    http_response_code(200);
    $name = clean_input($_POST['fname']);
    $subject = "Contact Form Email from " . $name;
    $to = ADMIN_EMAIL;
    $from = clean_input($_POST['email']);
    $sender_phone = clean_input($_POST['fphone']);
    $body = clean_input($_POST['message']);

    // Body
    $msg = "<h3>Contact Form Message</h3>";
    $msg .= "<hr />";
    $msg .= "<p><strong>Source: jbayplotandplan.co.za</strong></p>";
    $msg .= "<p><strong>Sender Name: " . $name . "</strong></p>";

    if(!empty($sender_phone)) {
        $msg .= "<p><strong>Sender Phone Number: ". $sender_phone ." </strong></p>";
    }

    $msg .= "<h3>Message Body:</h3><hr />";
    $msg .= "<p>";
    $msg .= clean_input($_POST['message']);
    $msg .= "</p>";

    // Headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <" . $from . ">";
    mail(ADMIN_EMAIL, $subject, $msg, $headers);

    echo json_encode(array(["sent" => true, "name"=> $name, "to"=> $to, "from"=> $from, "phone"=> $sender_phone, "body"=> $body]));
} else {
    http_response_code(200);
    echo json_encode(array(["sent" => false, "message" => "Something went wrong"]));
}

?>