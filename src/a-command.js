(function () {
    var ACommand = function (str) {
        var newString = '0';

        var binary = ''
        binary += parseInt(str.substring(1), 10).toString(2);

        var emptyBits = 15 - binary.length;

        for (var i = 0; i < emptyBits; i++) {
            newString += '0';
        }

        newString += binary;

        return newString;
    }


    define([
    ], function () {
        return ACommand;
    });
}());