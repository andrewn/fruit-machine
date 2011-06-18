require(['controller/game'], function (Game) {
    module('controller/game'); 
    test("should instantiate", function () {
        ok( new Game() ); 
    });
});