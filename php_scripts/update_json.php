<?php
    if($_SERVER['REQUEST_METHOD'] == "POST"){
            $new_json_file = $_POST['json_object'];
            $file = fopen("./json_item_list.json","w");
            fwrite($file,$new_json_file);
            fclose($file);
    }
