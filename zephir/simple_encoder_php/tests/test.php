<?php
include("../simpleencoder/encoder.php");
include("../simpleencoder/decoder.php");

$encoder = new SimpleEncoder\Encoder();
$decoder = new SimpleEncoder\Decoder();

$crypted = $encoder->encodeContent("XXX");

echo "$crypted \n\n";

echo $decoder->decodeContent($crypted);
