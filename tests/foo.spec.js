var foo = require('../src/foo');

describe('foo', function() {
    it('uppercase', function() {
        expect(foo.uppercase('low')).toBe('LOW');
    });
});