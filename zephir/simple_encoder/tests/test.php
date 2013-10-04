<?php
dl("simpleencoder.so");

$encoder = new SimpleEncoder\Encoder();
$decoder = new SimpleEncoder\Decoder();

$crypted = $encoder->encodeContent("XXX");

echo "$crypted \n\n";

echo $decoder->decodeContent($crypted);
