describe('foo', function() {
    it('uppercase', function() {
        var foo = new Foo();
        expect(foo.uppercase('low')).toBe('LOW');
    });
});