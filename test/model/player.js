require(['model/player'], function (Player){

    var player;

    module('model/player', {
        setup: function () {
            player = new Player();
        }
    });

    test("should exist", function () {
        ok(Player);
    });

    test("should be instantiatable", function () {
        ok(new Player());
    });

    test("should start with 0 credits", function () {
        equal(player.credits, 0);
    });

    test("should add credits", function () {
        player.addCredits(1);
        equal(player.credits, 1);
    });
    
});