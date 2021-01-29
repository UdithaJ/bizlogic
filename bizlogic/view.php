<?php 

require_once 'connection.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Credentials: true"); 
header("Content-Type: application/json");


$query = "Select * from user ";


if(mysqli_query($connection,$query)){

$result = mysqli_query($connection,$query);

if(mysqli_fetch_row($result)){

echo 'retriving users..';

echo json_encode($result);

}

else{

    echo "error!";    }
}




?>