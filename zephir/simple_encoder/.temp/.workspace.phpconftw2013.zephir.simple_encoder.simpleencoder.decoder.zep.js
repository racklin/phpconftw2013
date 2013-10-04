[ { "type": "namespace", "name": "SimpleEncoder", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 3, "char": 5 }, { "type": "class", "name": "Decoder", "abtract": 0, "final": 0, "definition": { "methods": [ { "visibility": [ "public" ], "type": "method", "name": "decodeContent", "parameters": [ { "type": "parameter", "name": "content", "data-type": "variable", "mandatory": 0, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 5, "char": 46 } ], "statements": [ { "type": "declare", "data-type": "variable", "variables": [ { "variable": "buf", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 6, "char": 16 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 7, "char": 11 }, { "type": "let", "assignments": [ { "assign-type": "variable", "operator": "assign", "variable": "buf", "expr": { "type": "fcall", "name": "str_rot13", "call-type": 1, "parameters": [ { "type": "fcall", "name": "base64_decode", "call-type": 1, "parameters": [ { "type": "variable", "value": "content", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 7, "char": 50 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 7, "char": 51 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 7, "char": 52 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 7, "char": 52 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 8, "char": 14 }, { "type": "return", "expr": { "type": "variable", "value": "buf", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 8, "char": 19 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 9, "char": 5 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 12, "char": 10 }, { "visibility": [ "public" ], "type": "method", "name": "decodeFile", "parameters": [ { "type": "parameter", "name": "file", "data-type": "variable", "mandatory": 0, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 12, "char": 40 } ], "statements": [ { "type": "declare", "data-type": "variable", "variables": [ { "variable": "buf", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 13, "char": 9 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 14, "char": 10 }, { "type": "if", "expr": { "type": "list", "left": { "type": "not", "left": { "type": "fcall", "name": "file_exists", "call-type": 1, "parameters": [ { "type": "variable", "value": "file", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 14, "char": 30 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 14, "char": 31 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 14, "char": 31 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 14, "char": 33 }, "statements": [ { "type": "throw", "expr": { "type": "new", "class": "Exception", "dynamic": 0, "parameters": [ { "type": "string", "value": "File Not Found", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 15, "char": 49 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 15, "char": 50 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 16, "char": 9 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 18, "char": 11 }, { "type": "let", "assignments": [ { "assign-type": "variable", "operator": "assign", "variable": "buf", "expr": { "type": "fcall", "name": "file_get_contents", "call-type": 1, "parameters": [ { "type": "variable", "value": "file", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 18, "char": 41 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 18, "char": 42 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 18, "char": 42 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 19, "char": 14 }, { "type": "return", "expr": { "type": "mcall", "variable": "this", "name": "decodeContent", "call-type": 1, "parameters": [ { "type": "variable", "value": "buf", "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 19, "char": 39 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 19, "char": 40 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 21, "char": 5 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 23, "char": 1 } ], "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 23, "char": 1 }, "file": "\/workspace\/phpconftw2013\/zephir\/simple_encoder\/simpleencoder\/decoder.zep", "line": 24, "char": 0 } ]