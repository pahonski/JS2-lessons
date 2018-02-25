describe('Возведение в степень', function () {
    var pow = lib.pow;

    it('Проверка 2^3 == 8', function () {
        assert.equal(pow(2, 3), 8);
    });

    it('Проверка 3^3 == 27', function () {
        assert.equal(pow(3, 3), 27);
    });

    it('Проверка 2^5 == 32', function () {
        assert.equal(pow(2, 5), 32);
    });
});

describe('Проверка на нестандартные ситуации', function () {
    var pow = lib.pow;
    it('Проверка на отрицательные значения', function () {
        expect(pow(-2, 5)).toBeNull();
        expect(pow(2, -5)).toBeNull();
        expect(pow(-2, -5)).toBeNull();
        assert.equal(pow(-2, 5), null);
        assert.equal(pow(2, -5), null);
        assert.equal(pow(-2, -5), null);
    });

    it('Проверка на дробные значения', function () {
        //Аналог записи попроще
        assert(pow(2.2, 5) === null);
        assert(pow(2, 5.1) === null);
        assert(pow(2.1, 5) === null);
    });
});