const assert = require('assert');

describe('Array', () => {
    describe('#indexOf()', () => {
        it('should return -1 when element does not exist', () => {
            assert.equal(-1, [1, 2, 3].indexOf(4), 'test is not passed');
        });
    });
});

describe('Math', () => {
    it('should return 9', () => {
        assert.equal(9, 3 * 3);
    });

    it('should return -8', () => {
        assert.equal(-8, (3 - 4) * 8);
    });
});
