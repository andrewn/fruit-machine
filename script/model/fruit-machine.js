define(["model/wheel", "model/payline", "underscore"], function (Wheel, Payline, _) {
    var FruitMachine = function () {
        this.result = [];
        this.wheels = [ new Wheel('A', 'D', 'C', 'B', 'E', 'F', 'G', 'H', 'I', 'J'), 
                        new Wheel('B', 'H', 'C', 'G', 'E', 'J', 'A', 'F', 'D', 'I'), 
                        new Wheel('E', 'F', 'A', 'I', 'J', 'C', 'G', 'B', 'H', 'D') ];
    };

    FruitMachine.prototype.paylines = _.flatten([
        // full matches
        _.map(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], function(symbol) {
            return new Payline([symbol, symbol, symbol].join(''), 30)
        }),
        // partial matches
        _.map(['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I', 'J'], function(symbol) {
            return new Payline([symbol, symbol].join(''), 5)
        }),
    ]);

    FruitMachine.prototype.spin = function () {
        this.wheels.forEach( function (wheel) { wheel.spin(); } );
        this.resultFromWheels();
    };

    FruitMachine.prototype.resultFromWheels = function () {
        this.result     = this.wheels.map( function (wheel) { return wheel.current; } );
        this.previous   = this.wheels.map( function (wheel) { return wheel.previous; } );
        this.next       = this.wheels.map( function (wheel) { return wheel.next; } );
        return this.result;
    };

    FruitMachine.prototype.isWinner = function () {
        var result = this.result;
        var matchingPayline = _.detect(this.paylines, function (payline) {
            return payline.check(result) != null;
        });
        return matchingPayline ? matchingPayline.check(result) : null;
    };
    
    return FruitMachine;
})