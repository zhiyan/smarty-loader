'use strict';

module.exports = function(source) {
    var jsmartPath = require.resolve("./jsmart.js");

    return 'var J = require('+JSON.stringify( jsmartPath )+');\n' +
           'module.exports = new J(' +
            JSON.stringify(source) +
            ');';
};
