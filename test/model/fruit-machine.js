require(['model/fruit-machine', 'model/wheel', 'model/payline'], function (FruitMachine, Wheel, Payline) {
    var fm;
    module("model/fruit-machine", {
        setup: function () {
            fm = new FruitMachine();
        }
    });
    test("should instantiate", function () {
        ok(new FruitMachine())
    });
    test("should load wheels", function () {
        ok(fm.wheels[0] instanceof Wheel);
    });
    test("spin should spin wheels", function () {
        sinon.spy(fm.wheels[0], "spin");
        sinon.spy(fm.wheels[1], "spin");
        sinon.spy(fm.wheels[2], "spin");

        fm.spin();

        ok(fm.wheels[0].spin.calledOnce);
        ok(fm.wheels[1].spin.calledOnce);
        ok(fm.wheels[2].spin.calledOnce);
    });
    test("should correctly fetch result from wheels", function () {
        var wheels = [  new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C') ];
        var paylines = [ new Payline('AAA', 10),
                         new Payline('BBB', 10),
                         new Payline('CCC', 10) ];
        fm.wheels = wheels;
        fm.paylines = paylines;

        fm.resultFromWheels();
        
        ok(fm.isWinner());
        equal(fm.result[0], 'A');
        equal(fm.result[1], 'A');
        equal(fm.result[2], 'A');
    });
    test("should payout on payline", function () {
        var wheels = [  new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C') ];
        var paylines = [ new Payline('AA', 10) ];

        fm.wheels   = wheels;
        fm.paylines = paylines;

        fm.resultFromWheels();

        equal(fm.isWinner(), 10);
    });
    test("should correctly read loser", function () {
        var wheels = [  new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C') ];
        var paylines = [ new Payline('AAA', 10),
                         new Payline('BBB', 10),
                         new Payline('CCC', 10) ];

        wheels[1].update(2);
        fm.wheels   = wheels;
        fm.paylines = paylines;

        fm.resultFromWheels();

        ok(!fm.isWinner());
        equal(fm.result[0], 'A');
        equal(fm.result[1], 'C');
        equal(fm.result[2], 'A');    
    });
});