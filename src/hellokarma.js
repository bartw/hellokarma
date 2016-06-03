var HelloKarma = function HelloKarma() {
    this.reverse = function reverse(toReverse) {
        return toReverse.split('').reverse().join('');
    };

    return {
        reverse: this.reverse
    };
};