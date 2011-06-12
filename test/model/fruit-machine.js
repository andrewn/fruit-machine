require(['model/fruit-machine', 'model/wheel'], function (FruitMachine, Wheel) {
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
    test("should correctly read winner from wheels", function () {
        var result = [  new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C') ];
        fm.result = result;
        ok(fm.isWinner());
    });
    test("should correctly read loser", function () {
        var result = [  new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C'), 
                        new Wheel('A', 'B', 'C') ];
        result[1].update(2);
        fm.result = result;
        ok(!fm.isWinner());
    });
});