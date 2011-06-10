require(['model/wheel'], function (Wheel) {
    var wheel;
    module('model/wheel', {
        setup: function () {
            wheel = new Wheel('A', 'B', 'C', 'D');
        }
    });
    test('should instantiate with symbols', function () {
        equal(wheel.list.length, 4);
        equal(wheel.list[0], 'A');
        equal(wheel.list[1], 'B');
    });
    test('should default to first symbol', function () {
        equal(wheel.current, 'A');
    });
    test('should show previous symbol on wheel', function () {
        equal(wheel.previous, 'D');
    })
    test('should show next symbol on wheel', function () {
        equal(wheel.next, 'B');
    })
    test('spin should chose a new symbol', function () {
        wheel.generator = function () { return 2; };
        wheel.spin();
        equal(wheel.current, 'C');
    });
});