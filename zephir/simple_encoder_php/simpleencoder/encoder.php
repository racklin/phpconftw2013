<?php
namespace SimpleEncoder;

class Encoder {

    public function encodeContent($content) {
        $buf = base64_encode(str_rot13($content));
        return $buf;
    }


    public function encodeFile($file) {
        if (!file_exists($file)) {
            throw new Exception("File Not Found");
        }

        $buf = file_get_contents($file);
        return $this->encodeContent($buf);

    }

}
