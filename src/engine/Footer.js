// Footer class - the ground line animation
import Point from './Point.js';

export default function Footer(tree, width, height, speed) {
    this.tree = tree;
    this.point = new Point(tree.seed.heart.point.x, tree.height - height / 2);
    this.width = width;
    this.height = height;
    this.speed = speed || 2;
    this.length = 0;
}

Footer.prototype = {
    draw: function () {
        var ctx = this.tree.ctx,
            point = this.point;
        var len = this.length / 2;

        ctx.save();
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = this.height;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.translate(point.x, point.y);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(len, 0);
        ctx.lineTo(-len, 0);
        ctx.stroke();
        ctx.restore();

        if (this.length < this.width) {
            this.length += this.speed;
        }
    },
};
