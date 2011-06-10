define(function () {
    var Wheel = function () {
        this.list     = Array.prototype.concat.apply([], arguments);
        this.index    = 0;
        this.current  = this.list[this.index];
        this.previous = this.list[(this.list.length + (this.index - 1) % this.list.length)];
        this.next     = this.list[(this.index + 1) % this.list.length];
    };
    return Wheel;
});