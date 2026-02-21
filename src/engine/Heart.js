// Heart class - generates parametric heart-curve points
import Point from './Point.js';

export default function Heart() {
    // x = 16 sin^3 t
    // y = 13 cos t - 5 cos 2t - 2 cos 3t - cos 4t
    var points = [],
        x,
        y,
        t;
    for (var i = 10; i < 30; i += 0.2) {
        t = i / Math.PI;
        x = 16 * Math.pow(Math.sin(t), 3);
        y =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);
        points.push(new Point(x, y));
    }
    this.points = points;
    this.length = points.length;
}

Heart.prototype = {
    get: function (i, scale) {
        return this.points[i].mul(scale || 1);
    },
};
