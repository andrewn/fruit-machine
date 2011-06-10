define(function () {
    var FruitMachine = function () {
        this.result = [];
    };

    FruitMachine.prototype.isWinner = function () {
        var same = true,
            first = this.result[0];

        if (this.result.length != 3) { return false; }

        this.result.forEach(function (item) {
            if (item != first) { same = false; }
        });
        return same; 
    };

    FruitMachine.prototype.spin = function () {
        if (!this.generator) { throw Error("No generator found"); }
        this.result = [this.generator(), this.generator(), this.generator()];
    };
    
    return FruitMachine;
})