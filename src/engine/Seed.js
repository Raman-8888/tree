// Seed class - the clickable heart+text that starts the animation
import Point from './Point.js';
import Heart from './Heart.js';

export default function Seed(tree, point, scale, color) {
    this.tree = tree;

    var scale = scale || 1;
    var color = '#FFC0CB';

    this.heart = {
        point: point,
        scale: scale,
        color: color,
        figure: new Heart(),
    };

    this.cirle = {
        point: point,
        scale: scale,
        color: color,
        radius: 5,
    };
}

Seed.prototype = {
    draw: function () {
        this.drawHeart();
        this.drawText();
    },
    addPosition: function (x, y) {
        this.cirle.point = this.cirle.point.add(new Point(x, y));
    },
    canMove: function () {
        return this.cirle.point.y < this.tree.height + 20;
    },
    move: function (x, y) {
        this.clear();
        this.drawCirle();
        this.addPosition(x, y);
    },
    canScale: function () {
        return this.heart.scale > 0.2;
    },
    setHeartScale: function (scale) {
        this.heart.scale *= scale;
    },
    scale: function (scale) {
        this.clear();
        this.drawCirle();
        this.drawHeart();
        this.setHeartScale(scale);
    },
    drawHeart: function () {
        var ctx = this.tree.ctx,
            heart = this.heart;
        var point = heart.point,
            color = heart.color,
            scale = heart.scale;
        ctx.save();
        ctx.fillStyle = color;
        ctx.translate(point.x, point.y);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        for (var i = 0; i < heart.figure.length; i++) {
            var p = heart.figure.get(i, scale);
            ctx.lineTo(p.x, -p.y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    },
    drawCirle: function () {
        var ctx = this.tree.ctx,
            cirle = this.cirle;
        var point = cirle.point,
            color = cirle.color,
            scale = cirle.scale,
            radius = cirle.radius;
        ctx.save();
        ctx.fillStyle = color;
        ctx.translate(point.x, point.y);
        ctx.scale(scale, scale);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    },
    drawText: function () {
        var ctx = this.tree.ctx,
            heart = this.heart;
        var point = heart.point,
            color = heart.color,
            scale = heart.scale;
        ctx.save();
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.translate(point.x, point.y);
        ctx.scale(scale, scale);
        ctx.moveTo(0, 0);
        ctx.lineTo(15, 15);
        ctx.lineTo(130, 15);
        ctx.stroke();

        ctx.moveTo(0, 0);
        ctx.scale(0.75, 0.75);
        ctx.font = '12px Verdana';
        ctx.fillText('Click Me:) ', 30, -5);
        ctx.fillText('Birthday Queen !', 28, 10);
        ctx.restore();
    },
    clear: function () {
        var ctx = this.tree.ctx,
            cirle = this.cirle;
        var point = cirle.point,
            scale = cirle.scale,
            radius = 26;
        var w = (radius * scale);
        var h = w;
        ctx.clearRect(point.x - w, point.y - h, 4 * w, 4 * h);
    },
    hover: function (x, y) {
        var ctx = this.tree.ctx;
        var pixel = ctx.getImageData(x, y, 1, 1);
        return pixel.data[3] == 255;
    },
};
