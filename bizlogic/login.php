<?php 

require_once 'connection.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true"); 
header("Content-Type: application/json");

$postdata  =file_get_contents("php://input");
// print_r($postdata);

if(isset($postdata) && !empty($postdata)){

    $request = json_decode($postdata);

    $username = $request -> username;
    $password = $request -> password;


    $query = "Select * from user where username = '$username' and password = '$password'";



if(mysqli_query($connection,$query)){

    $result = mysqli_query($connection,$query);

    if(mysqli_fetch_row($result)){
    $valid = true;
    echo 'successfully Logged';

    }

    else{

        $valid = false;

        echo "Username or Password Invalid!"; 
    }

        echo json_encode($valid);
}

else{

    echo "error!";
}
}
?>
