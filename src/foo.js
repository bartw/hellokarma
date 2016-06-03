var Foo = function Foo() {
    this.uppercase = function uppercase(toUppercase) {
        return toUppercase.toUpperCase();
    };

    return {
        uppercase: this.uppercase
    };
};