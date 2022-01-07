"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
function groupBy(fakeData, propriedade) {
    var _a;
    var pessoas = 0;
    var finalValue = {};
    var reducedArr = fakeData.reduce(function (acc, obj) {
        var key = obj[propriedade];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(pessoas++);
        return acc;
    }, {});
    for (var key in reducedArr) {
        if (Object.prototype.hasOwnProperty.call(reducedArr, key)) {
            var element = reducedArr[key];
            finalValue = __assign(__assign({}, finalValue), (_a = {}, _a[key] = element.length, _a));
        }
    }
    var companies = [];
    for (var key in finalValue) {
        if (Object.prototype.hasOwnProperty.call(finalValue, key)) {
            var element = finalValue[key];
            var males = element;
            companies.push({
                Empresas: key,
                Pessoas: element,
                Homens: Math.round(element / 2),
                Mulheres: Math.round(element / 2),
                avarageAge: "".concat(Math.round(Math.random() * (35 - 18) + 18), " anos"),
            });
        }
    }
    companies.sort(function (a, b) {
        return b["Pessoas"] - a["Pessoas"];
    });
    return companies;
}
var companies = groupBy(data_1.fakeData, "company");
console.table(companies);
//# sourceMappingURL=index.js.map