describe('Возведение в степень', function () {
    var pow = lib.pow;

    it('Проверка 2^3 == 8', function () {
        expect(pow(2, 3)).toBe(8);
    });

    it('Проверка 3^3 == 27', function () {
        expect(pow(3, 3)).toBe(27);
    });

    it('Проверка 2^5 == 32', function () {
        expect(pow(2, 5)).toBe(32);
    });
});

describe('Проверка на нестандартные ситуации', function () {
    var pow = lib.pow;
    it('Проверка на отрицательные значения', function () {
        expect(pow(-2, 5)).toBeNull();
        expect(pow(2, -5)).toBeNull();
        expect(pow(-2, -5)).toBeNull();
    });

    it('Проверка на дробные значения', function () {
        expect(pow(2.2, 5)).toBeNull();
        expect(pow(2, 5.1)).toBeNull();
        expect(pow(2.1, 5)).toBeNull();
    });
});