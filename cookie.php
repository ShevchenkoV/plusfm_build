<?
if (isset($_COOKIE['plusfm_vote'])){

    if($_COOKIE['plusfm_vote']<=4){
        $value=$_COOKIE['plusfm_vote']+1;
        setcookie("plusfm_vote", $value, 0x6FFFFFFF);
    }
    else{
         echo "you haven't vote points";
    }
}
else{
    $value=1;
    setcookie("plusfm_vote", $value, 0x6FFFFFFF);
}
?>