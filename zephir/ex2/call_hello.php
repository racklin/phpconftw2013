<?php
dl("test.so");

$h = new Test\Hello();
$h->say();
