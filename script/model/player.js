define(function () {
    var Player = function () {
        this.credits = 0;
    };

    Player.prototype.addCredits = function (credits) {
        this.credits += credits;
    };

    Player.prototype.useCredits = function (credits) {
        if ( (this.credits - credits) >= 0 ) {
            this.credits -= credits;
        } else {
            var error = new Error("Not enough credits");
                error.type = "NO_CREDIT";
            throw error;
        }
    }

    return Player;
});