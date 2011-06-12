define(["model/generator"], function (generator) {

    function updateForPosition(pos, wheels) {
        var current  = wheels[pos],
            previous = wheels[((wheels.length + (pos - 1)) % wheels.length)],
            next     = wheels[(pos + 1) % wheels.length];
        return {
            previous : previous, 
            current  : current, 
            next     : next
        };
    }

    var Wheel = function () {
        this.list     = Array.prototype.concat.apply([], arguments);
        this.index    = 0;
        var positions = updateForPosition(this.index, this.list);
        this.current  = positions.current;
        this.previous = positions.previous;
        this.next     = positions.next;
    };
    Wheel.prototype.spin = function () {
        if (!this.generator) { return; }
        this.index = this.generator(this.list.length);
        var positions = updateForPosition(this.index, this.list);
        this.current  = positions.current;
        this.previous = positions.previous;
        this.next     = positions.next;
    };
    Wheel.prototype.generator = generator;
    return Wheel;
});