(function () {
    var ScrubVariables = function (str) {
        str = (str).split('\n');
        var noLabelString = "",
            newString = "",
            varsList = {
                'SP': 0,
                'LCL': 1,
                'ARG': 2,
                'THIS': 3,
                'THAT': 4,
                'R0': 0,
                'R1': 1,
                'R2': 2,
                'R3': 3,
                'R4': 4,
                'R5': 5,
                'R6': 6,
                'R7': 7,
                'R8': 8,
                'R9': 9,
                'R10': 10,
                'R11': 11,
                'R12': 12,
                'R13': 13,
                'R14': 14,
                'R15': 15,
                'SCREEN': 16384,
                'KBD': 24576
            }
            labelCount = 0,
            variableLocation = 16;


//console.log(str);

        //find the label symbols
        for (var i = 0, l = str.length; i < l; i++) {

            if(str[i][0] === ('(')){
                var key = str[i].substring(1, (str[i].length-1));

                if (!(key in varsList)) {
//console.log(i);
//console.log(labelCount);
                    varsList[key] = (i-labelCount);
                    labelCount++;
                }

            }
            else{
                noLabelString+=str[i]

                if(i < (l-2)){
                    noLabelString +="\n";
                }
            }
        }

//console.log('label count: '+labelCount);
//console.log(varsList);

        noLabelString = (noLabelString).split('\n');
//console.log(noLabelString);

        //find the variable symbols
        for (var i = 0, l = noLabelString.length; i < l; i++) {

            var key = noLabelString[i].substring(1);

            if(i===(2023)){
                console.log(noLabelString[i]);
            }

//console.log(noLabelString[i][0]);
//console.log(noLabelString[i][0] === ('@'));
//console.log(isNaN(key));
            if(noLabelString[i][0] === ('@') && isNaN(key)){
                if (!(key in varsList)) {
                    varsList[key] = variableLocation;
                    variableLocation++;
                }
                newString+='@'+varsList[key];
                if(i < (l-1)){
                    newString +="\n";
                }

            }
            else{
                newString+=noLabelString[i]

                if(i < (l-1)){
                    newString +="\n";
                }
            }
        }


//console.log(varsList);
//console.log(newString);

        return newString;
    }


    define([
    ], function () {
        return ScrubVariables;
    });
}());