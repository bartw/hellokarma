describe('hellokarma', function() {
    it('3 is 3', function() {
        expect(3).toBe(3);
    });

    describe('object', function() {
        it('reverse', function() {
            var hk = new HelloKarma();
            expect(hk.reverse('reverse')).toBe('esrever');
        });
    });
});