(function () {
    var BCommand = function (str) {
        var newString = '111';

        var binary = '';
        var theCs = '';
        var theDs = '';
        var theJs = '';

        var firstSplit = str.split('=');
        var secondSplit = typeof firstSplit[1] !== 'undefined' ? firstSplit[1].split(';') : firstSplit[0].split(';');
        var dSection = firstSplit[0];
        var cSection = secondSplit[0];
        var jSection = secondSplit[1];

        //console.log(dSection);
//        console.log(cSection);
//        console.log(jSection);

        switch(cSection){
            case 'M':
                theCs = '1110000';
                break;
            case '!M':
                theCs = '1110001';
                break;
            case '-M':
                theCs = '1110011';
                break;
            case 'M+1':
                theCs = '1110111';
                break;
            case 'M-1':
                theCs = '1110010';
                break;
            case 'D+M':
                theCs = '1000010';
                break;
            case 'D-M':
                theCs = '1010011';
                break;
            case 'M-D':
                theCs = '1000111';
                break;
            case 'D&M':
                theCs = '1000000';
                break;
            case 'D|M':
                theCs = '1010101';
                break;
            case '0':
                theCs = '0101010';
                break;
            case '1':
                theCs = '0111111';
                break;
            case '-1':
                theCs = '0111010';
                break;
            case 'D':
                theCs = '0001100';
                break;
            case 'A':
                theCs = '0110000';
                break;
            case '!D':
                theCs = '0001101';
                break;
            case '!A':
                theCs = '0110001';
                break;
            case '-D':
                theCs = '0001111';
                break;
            case '-A':
                theCs = '0110011';
                break;
            case 'D+1':
                theCs = '0011111';
                break;
            case 'A+1':
                theCs = '0110111';
                break;
            case 'D-1':
                theCs = '0001110';
                break;
            case 'A-1':
                theCs = '0110010';
                break;
            case 'D+A':
                theCs = '0000010';
                break;
            case 'D-A':
                theCs = '0010011';
                break;
            case 'A-D':
                theCs = '0000111';
                break;
            case 'D&A':
                theCs = '0000000';
                break;
            case 'D|A':
                theCs = '0010101';
                break;
        }

        switch(dSection){
            case 'M':
                theDs = '001';
                break;
            case 'D':
                theDs = '010';
                break;
            case 'MD':
                theDs = '011';
                break;
            case 'A':
                theDs = '100';
                break;
            case 'AM':
                theDs = '101';
                break;
            case 'AD':
                theDs = '110';
                break;
            case 'AMD':
                theDs = '111';
                break;
            default:
                theDs = '000';
        }

        switch(jSection){
            case 'JGT':
                theJs = '001';
                break;
            case 'JEQ':
                theJs = '010';
                break;
            case 'JGE':
                theJs = '011';
                break;
            case 'JLT':
                theJs = '100';
                break;
            case 'JNE':
                theJs = '101';
                break;
            case 'JLE':
                theJs = '110';
                break;
            case 'JMP':
                theJs = '111';
                break;
            default:
                theJs = '000';  
                break;

        }

        newString += theCs;
        newString += theDs;
        newString += theJs;

        return newString;
    }


    define([
    ], function () {
        return BCommand;
    });
}());