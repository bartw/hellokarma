var hellokarma = (function HelloKarmaModule() {
    function reverse(toReverse) {
        return toReverse.split('').reverse().join('');
    }

    return {
        reverse: reverse
    };
})();