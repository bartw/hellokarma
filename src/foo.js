'use strict';

var foo = (function FooModule() {
    function uppercase(toUppercase) {
        return toUppercase.toUpperCase();
    }

    return {
        uppercase: uppercase
    };
})();

module.exports = foo;