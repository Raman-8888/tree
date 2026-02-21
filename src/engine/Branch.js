// Branch class - handles bezier-curve tree branch growth
import Point from './Point.js';
import { bezier } from './utils.js';

export default function Branch(tree, point1, point2, point3, radius, length, branchs) {
    this.tree = tree;
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
    this.radius = radius;
    this.length = length || 100;
    this.len = 0;
    this.t = 1 / (this.length - 1);
    this.branchs = branchs || [];
}

Branch.prototype = {
    grow: function () {
        var s = this,
            p;
        if (s.len <= s.length) {
            p = bezier([s.point1, s.point2, s.point3], s.len * s.t);
            s.draw(p);
            s.len += 1;
            s.radius *= 0.97;
        } else {
            s.tree.removeBranch(s);
            s.tree.addBranchs(s.branchs);
        }
    },
    draw: function (p) {
        var s = this;
        var ctx = s.tree.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#FFC0CB';
        ctx.shadowBlur = 2;
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, s.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
    },
};
