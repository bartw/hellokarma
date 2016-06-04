'use strict';

var hellokarma = require('../src/hellokarma');

describe('hellokarma', function() {
    it('3 is 3', function() {
        expect(3).toBe(3);
    });

    describe('object', function() {
        it('reverse', function() {
            expect(hellokarma.reverse('reverse')).toBe('esrever');
        });
    });
});