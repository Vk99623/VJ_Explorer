<?php
    require_once('inc/autoload.php');
    $path=ROOT_PATH;
    $rel=DS;
    $up=null;

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Directory Structure"/>
    <meta name="keywords" content="Directory Structure"/>
    <title>Directory Structure</title>
    <link href="./css/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
     
<div id="wrapper">
    <?php require_once('mod/structure.php')?>
</div>

<script src="/js/jquery-3.5.1.js" type="text/javascript"></script>
<script src="/js/core.js" type="text/javascript"></script>



</body>
</html>