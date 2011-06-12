define(["model/fruit-machine", "model/player"], function (FruitMachine, Player) {
    var Game = function () {
        this.fm     = new FruitMachine();
        this.player = new Player();
    };
    Game.prototype.start = function () {
        //this.player.addCredits(1);
    };
    Game.prototype.score = function () {
        return {
            isWinner    : this.fm.isWinner(),
            result      : this.fm.result
        };
    };

    Game.prototype.play  = function () {
        this.fm.spin();
    };

    return Game;
});