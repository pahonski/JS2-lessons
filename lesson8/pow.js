var lib = {
    pow: function (x, n) {

        //Проверки

        if (x < 0 || n < 0) {
            return null;
        }

        if (parseInt(x) !== x || parseInt(n) !== n) {
            return null
        }

        var result = 1;
        for (var i = 0; i < n; i++) {
            result *= x;
        }
        return result;
    }
};