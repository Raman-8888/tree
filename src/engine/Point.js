// Point class for 2D vector operations

export default function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Point.prototype = {
    clone: function () {
        return new Point(this.x, this.y);
    },
    add: function (o) {
        var p = this.clone();
        p.x += o.x;
        p.y += o.y;
        return p;
    },
    sub: function (o) {
        var p = this.clone();
        p.x -= o.x;
        p.y -= o.y;
        return p;
    },
    div: function (n) {
        var p = this.clone();
        p.x /= n;
        p.y /= n;
        return p;
    },
    mul: function (n) {
        var p = this.clone();
        p.x *= n;
        p.y *= n;
        return p;
    },
};
