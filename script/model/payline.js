define(['underscore'], function (_) {
    var Payline = function (symbols, credits) {
        this.symbols = symbols.split("");
        this.credits = credits;
    };
    Payline.prototype.check = function (result) {
        var tryingToMatch = this.symbols.length,
            match = false;

        var argList = [].concat(this.symbols);
        argList.unshift(result);

        var nonMatched = _.without.apply(null, argList);
        var matched    = result.length - nonMatched.length;

        if (matched >= tryingToMatch) {
            match = true;
        }

        return (match) ? this.credits : null;
    };
    Payline.prototype.toString = function () {
        return this.symbols.join('');
    }
    return Payline;
});