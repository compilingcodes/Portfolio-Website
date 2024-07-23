<?php

$server ="localhost:5173";
$username ="root";
$password = "";
$dbname = "portfoliodata" ;

$con = mysqli_connect($server, $username , $password, $dbname);

if(!$con)
{
  echo "not connected";

}
else{

  echo "connected";
}
?>