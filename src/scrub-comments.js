(function () {
    var ScrubComments = function (str) {
        str = (str).split('\n');
        var clearLine = false;
        var newString = "";
        
        for (var i = 0, l = str.length; i < l; i++) {
            for(var j = 0, jl = str[i].length; j < jl; j++){
                if (clearLine || str[i][j] === '/' || str[i][j+1] === '/') {
                    newString += ' ';
                    clearLine = true;
                }else{
                    newString += str[i][j];
                }
            }

            clearLine = false;
            if(i < (l-1)){
                newString +="\n";
            }
        }

//console.log(newString);

        return newString;
    }


    define([
    ], function () {
        return ScrubComments;
    });
}());