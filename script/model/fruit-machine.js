define(["model/wheel"], function (Wheel) {
    var FruitMachine = function () {
        this.result = [];
        this.wheels = [ new Wheel('A', 'D', 'C', 'B', 'E', 'F', 'G', 'H', 'I', 'J'), 
                        new Wheel('B', 'H', 'C', 'G', 'E', 'J', 'A', 'F', 'D', 'I'), 
                        new Wheel('E', 'F', 'A', 'I', 'J', 'C', 'G', 'B', 'H', 'D') ];
    };

//    FruitMachine.prototype.winningLines = {
//        'ABC' 
//    };

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