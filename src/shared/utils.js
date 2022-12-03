// Округление к ближайшему
//   Math.round10(55.55, -1);   // 55.6
//   Math.round10(55.549, -1);  // 55.5
//   Math.round10(55, 1);       // 60
//   Math.round10(54.9, 1);     // 50
//   Math.round10(-55.55, -1);  // -55.5
//   Math.round10(-55.551, -1); // -55.6
//   Math.round10(-55, 1);      // -50
//   Math.round10(-55.1, 1);    // -60
//   Math.round10(1.005, -2);   // 1.01
/**
 * Корректировка округления десятичных дробей.
 *
 * @param {String}  type  Тип корректировки.
 * @param {Number}  value Число.
 * @param {Integer} exp   Показатель степени (десятичный логарифм основания корректировки).
 * @returns {Number} Скорректированное значение.
 */
export function decimalAdjust(type, value, exp) {
    // Если степень не определена, либо равна нулю...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value)
    }
    value = +value
    exp = +exp
    // Если значение не является числом, либо степень не является целым числом...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN
    }
    // Сдвиг разрядов
    value = value.toString().split('e')
    value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)))
    // Обратный сдвиг
    value = value.toString().split('e')
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp))
}

// Десятичное округление к ближайшему
if (!Math.round10) {
    Math.round10 = function (value, exp) {
        return decimalAdjust('round', value, exp)
    }
}
// Десятичное округление вниз
if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
        return decimalAdjust('floor', value, exp)
    }
}
// Десятичное округление вверх
if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
        return decimalAdjust('ceil', value, exp)
    }
}
