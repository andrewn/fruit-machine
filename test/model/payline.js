require(['model/payline'], function (Payline) {
    var wheel;
    module('model/payline', {
        setup: function () {}
    });
    test("should correctly match completely", function (){
        payline = new Payline('AAA', 10);
        equal(payline.check(['A', 'A', 'A']), 10);
    });
    test("should return null if not matched", function (){
        payline = new Payline('AAA', 10);
        equal(payline.check(['A', 'B', 'A']), null);
    });
    test("should allow partial matches", function (){
        payline = new Payline('AA', 10);
        equal(payline.check(['A', 'B', 'A']), 10);
    });
    test("should allow partial matches on full matches", function (){
        payline = new Payline('AA', 10);
        equal(payline.check(['A', 'A', 'A']), 10);
    });
    test("should allow mixed partial matches", function (){
        payline = new Payline('AB', 10);
        equal(payline.check(['A', 'B', 'C']), 10);
        equal(payline.check(['D', 'B', 'C']), null);
    });
});