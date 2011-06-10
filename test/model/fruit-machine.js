require(['model/fruit-machine'], function (FruitMachine) {
    var fm;
    module("model/fruit-machine", {
        setup: function () {
            fm = new FruitMachine();
        }
    });
    test("should instantiate", function () {
        ok(new FruitMachine())
    });
    test("should correctly read winner", function () {
        var result = ['A', 'A', 'A'];
        fm.result = result;
        ok(fm.isWinner());
    });
    test("should correctly read loser", function () {
        var result = ['A', 'B', 'A'];
        fm.result = result;
        ok(!fm.isWinner());
    });
    test("spin should generate combination", function () {
        fm.generator = function () { return 'A'; };
        fm.spin();
        equal(fm.result[0], "A");
        equal(fm.result[1], "A");
        equal(fm.result[2], "A");
    });
});