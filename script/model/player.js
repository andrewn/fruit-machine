define(function () {
    var Player = function () {
        this.credits = 0;
    };

    Player.prototype.addCredits = function (credits) {
        this.credits += credits;
    };

    return Player;
});