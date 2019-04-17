;(function () {
    function printNum() {
        var min = Number(document.getElementById("min").value);
        var max = Number(document.getElementById("max").value);
        function printPrimeNumbers(min, max) {
            if ((min == '') || (max == '')) {
                alert('Введите значения');
            } else if ((min < 2) || (min >= max)) {
                alert('Неправильно введен интервал значений')

            } else {
                var result = [];
                nextStep:
                    for (var i = min; i <= max; i++) {
                        for (var n = 2; n < i; n++) {
                            if (i % n == 0) {
                                continue nextStep;
                            }
                        }
                        result.push(i);
                    }
                return result.join(', ');
            }
        }
        var result = printPrimeNumbers(min, max);
        document.write('<p>' + result + '</p>');
    }
    document.getElementById("btn").onclick = printNum;
    /*var min = Number(prompt('Ддя отпеделения натуральных чисел введите минимальное значение интервала', 2));
    var max = Number(prompt('Теперь необходимо максимальное значение', 50));*/
})();