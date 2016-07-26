(function () {
    var ScrubCode = function (str) {

        var newString = ScrubCode.scrubComments(str);
            newString = ScrubCode.scrubWhitespace(newString);
            newString = ScrubCode.scrubVariables(newString);

        return newString;
    }


    define([
    ], function (
        //scrubComments, 
        //scrubWhitespace
        ) {
        ScrubCode.scrubComments = require('./scrub-comments');
        ScrubCode.scrubWhitespace = require('./scrub-whitespace');
        ScrubCode.scrubVariables = require('./scrub-variables');

        return ScrubCode;
    });
}());