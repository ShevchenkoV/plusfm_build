<?php
    include 'cookie.php';
    include 'login.php';
    $sql_select  =  "UPDATE stations SET vote = vote+1 WHERE name = '".$_POST['name']."'";
    mysql_query($sql_select);
    mysql_close();
?>