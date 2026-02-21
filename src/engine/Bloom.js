// Bloom class - individual flower petals
import Point from './Point.js';
import { random } from './utils.js';

export default function Bloom(tree, point, figure, color, alpha, angle, scale, place, speed) {
    this.tree = tree;
    this.point = point;
    this.color = color || 'rgb(255,' + random(0, 255) + ',' + random(0, 255) + ')';
    this.alpha = alpha || random(0.3, 1);
    this.angle = angle || random(0, 360);
    this.scale = scale || 0.1;
    this.place = place;
    this.speed = speed;

    this.figure = figure;
}

Bloom.prototype = {
    setFigure: function (figure) {
        this.figure = figure;
    },
    flower: function () {
        var s = this;
        s.draw();
        s.scale += 0.1;
        if (s.scale > 1) {
            s.tree.removeBloom(s);
        }
    },
    draw: function () {
        var s = this,
            ctx = s.tree.ctx,
            figure = s.figure;

        ctx.save();
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.translate(s.point.x, s.point.y);
        ctx.scale(s.scale, s.scale);
        ctx.rotate(s.angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (var i = 0; i < figure.length; i++) {
            var p = figure.get(i);
            ctx.lineTo(p.x, -p.y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    },
    jump: function () {
        var s = this,
            height = s.tree.height;

        if (s.point.x < -20 || s.point.y > height + 20) {
            s.tree.removeBloom(s);
        } else {
            s.draw();
            s.point = s.place.sub(s.point).div(s.speed).add(s.point);
            s.angle += 0.05;
            s.speed -= 1;
        }
    },
};
