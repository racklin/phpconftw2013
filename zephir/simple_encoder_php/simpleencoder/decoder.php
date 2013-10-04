<?php
namespace SimpleEncoder;

class Decoder {

    public function decodeContent($content) {
        $buf = str_rot13(base64_decode($content));
        return $buf;
    }


    public function decodeFile($file) {
        if (!file_exists($file)) {
            throw new Exception("File Not Found");
        }

        $buf = file_get_contents($file);
        return $this->decodeContent($buf);

    }

}
