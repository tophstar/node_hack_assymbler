(function () {
    var CompileCode = function (str) {
        str = (str).split('\n');
        var newString = "";

        for (var i = 0, l = str.length; i < l; i++) {
            var removeLine = true;

            if(i===(2023)){
                console.log(str[i]);
            }

            if(str[i] === ''){
                continue;
            }if(str[i][0] === "@"){
                newString +=CompileCode.aCommand(str[i]);
            }else{
                newString +=CompileCode.bCommand(str[i]);
            }

            if(i < (l-1)){
                newString +="\n";
            }else{
                //console.log("IGNORE3");
            }
        }

        return newString;
    }


    define([
    ], function (
        ) {
        CompileCode.aCommand = require('./a-command');
        CompileCode.bCommand = require('./b-command');
        return CompileCode;
    });
}());