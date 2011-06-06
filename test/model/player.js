require(['model/player'], function (Player){

    module('model/player');

    test("should exist", function () {
        ok(Player);
    });

    test("should be instantiatable", function () {
        ok(new Player());
    });
    
});