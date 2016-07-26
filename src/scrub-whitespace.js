(function () {
    var ScrubWhitespace = function (str) {
        str = (str).split('\n');
        var newString = "";
        

        for (var i = 0, l = str.length; i < l; i++) {
            var removeLine = true;

            for(var j = 0, jl = str[i].length; j < jl; j++){
                if (str[i][j] === ' ') {
                    newString += '';
                }else{
                    newString += str[i][j];
                    removeLine = false;
                }
            }

            if(!removeLine && i < (l-1)){
                newString +="\n";
            }else{
                //console.log(parseInt(l-1));
                //console.log("IGNORE line " + i);                
            }
        }

//console.log(newString);

        return newString;
    }


    define([
    ], function () {
        return ScrubWhitespace;
    });
}());