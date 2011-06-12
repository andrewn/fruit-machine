define(["model/wheel"], function (Wheel) {
    var FruitMachine = function () {
        this.result = [];
        this.wheels = [ new Wheel('A', 'B', 'C', 'D'), 
                        new Wheel('A', 'B', 'C', 'D'), 
                        new Wheel('A', 'B', 'C', 'D') ];
    };

    FruitMachine.prototype.spin = function () {
        this.wheels.forEach( function (wheel) { wheel.spin(); } );
        this.resultFromWheels();
    };

    FruitMachine.prototype.resultFromWheels = function () {
        this.result = this.wheels.map( function (wheel) { return wheel.current; } );
        return this.result;
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
    
    return FruitMachine;
})