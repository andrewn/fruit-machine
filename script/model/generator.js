define(function () {
    var generator = function (max) {
        return Math.floor(Math.random()* 10) % max;
    };
    return generator;
});