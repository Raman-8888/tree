// Tree class - main orchestrator for the animation
import Point from './Point.js';
import Seed from './Seed.js';
import Footer from './Footer.js';
import Branch from './Branch.js';
import Bloom from './Bloom.js';
import { random, inheart } from './utils.js';

export default function Tree(canvas, width, height, opt) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = width;
    this.height = height;
    this.opt = opt || {};

    this.record = {};

    this.initSeed();
    this.initFooter();
    this.initBranch();
    this.initBloom();
}

Tree.prototype = {
    initSeed: function () {
        var seed = this.opt.seed || {};
        var x = seed.x || this.width / 2;
        var y = seed.y || this.height / 2;
        var point = new Point(x, y);
        var color = seed.color || '#FF0000';
        var scale = seed.scale || 1;

        this.seed = new Seed(this, point, scale, color);
    },

    initFooter: function () {
        var footer = this.opt.footer || {};
        var width = footer.width || this.width;
        var height = footer.height || 5;
        var speed = footer.speed || 2;
        this.footer = new Footer(this, width, height, speed);
    },

    initBranch: function () {
        var branchs = this.opt.branch || [];
        this.branchs = [];
        this.addBranchs(branchs);
    },

    initBloom: function () {
        var bloom = this.opt.bloom || {};
        var cache = [],
            num = bloom.num || 500,
            width = bloom.width || this.width,
            height = bloom.height || this.height,
            figure = this.seed.heart.figure;
        var r = 240,
            x,
            y;
        for (var i = 0; i < num; i++) {
            cache.push(this.createBloom(width, height, r, figure));
        }
        this.blooms = [];
        this.bloomsCache = cache;
    },

    toDataURL: function (type) {
        return this.canvas.toDataURL(type);
    },

    draw: function (k) {
        var s = this,
            ctx = s.ctx;
        var rec = s.record[k];
        if (!rec) {
            return;
        }
        var point = rec.point,
            image = rec.image;

        ctx.save();
        ctx.putImageData(image, point.x, point.y);
        ctx.restore();
    },

    addBranch: function (branch) {
        this.branchs.push(branch);
    },

    addBranchs: function (branchs) {
        var s = this,
            b,
            p1,
            p2,
            p3,
            r,
            l,
            c;
        for (var i = 0; i < branchs.length; i++) {
            b = branchs[i];
            p1 = new Point(b[0], b[1]);
            p2 = new Point(b[2], b[3]);
            p3 = new Point(b[4], b[5]);
            r = b[6];
            l = b[7];
            c = b[8];
            s.addBranch(new Branch(s, p1, p2, p3, r, l, c));
        }
    },

    removeBranch: function (branch) {
        var branchs = this.branchs;
        for (var i = 0; i < branchs.length; i++) {
            if (branchs[i] === branch) {
                branchs.splice(i, 1);
            }
        }
    },

    canGrow: function () {
        return !!this.branchs.length;
    },
    grow: function () {
        var branchs = this.branchs;
        for (var i = 0; i < branchs.length; i++) {
            var branch = branchs[i];
            if (branch) {
                branch.grow();
            }
        }
    },

    addBloom: function (bloom) {
        this.blooms.push(bloom);
    },

    removeBloom: function (bloom) {
        var blooms = this.blooms;
        for (var i = 0; i < blooms.length; i++) {
            if (blooms[i] === bloom) {
                blooms.splice(i, 1);
            }
        }
    },

    createBloom: function (width, height, radius, figure, color, alpha, angle, scale, place, speed) {
        var x, y;
        while (true) {
            x = random(20, width - 20);
            y = random(20, height - 20);
            if (inheart(x - width / 2, height - (height - 40) / 2 - y, radius)) {
                return new Bloom(this, new Point(x, y), figure, color, alpha, angle, scale, place, speed);
            }
        }
    },

    canFlower: function () {
        return !!this.blooms.length;
    },
    flower: function (num) {
        var s = this,
            blooms = s.bloomsCache.splice(0, num);
        for (var i = 0; i < blooms.length; i++) {
            s.addBloom(blooms[i]);
        }
        blooms = s.blooms;
        for (var j = 0; j < blooms.length; j++) {
            blooms[j].flower();
        }
    },

    snapshot: function (k, x, y, width, height) {
        var ctx = this.ctx;
        var image = ctx.getImageData(x, y, width, height);
        this.record[k] = {
            image: image,
            point: new Point(x, y),
            width: width,
            height: height,
        };
    },
    setSpeed: function (k, speed) {
        this.record[k || 'move'].speed = speed;
    },
    move: function (k, x, y) {
        var s = this,
            ctx = s.ctx;
        var rec = s.record[k || 'move'];
        var point = rec.point,
            image = rec.image,
            speed = rec.speed || 10,
            width = rec.width,
            height = rec.height;

        var i = point.x + speed < x ? point.x + speed : x;
        var j = point.y + speed < y ? point.y + speed : y;

        ctx.save();
        ctx.clearRect(point.x, point.y, width, height);
        ctx.putImageData(image, i, j);
        ctx.restore();

        rec.point = new Point(i, j);
        rec.speed = speed * 0.95;

        if (rec.speed < 2) {
            rec.speed = 2;
        }
        return i < x || j < y;
    },

    jump: function () {
        var s = this,
            blooms = s.blooms;
        if (blooms.length) {
            for (var i = 0; i < blooms.length; i++) {
                blooms[i].jump();
            }
        }
        if ((blooms.length && blooms.length < 3) || !blooms.length) {
            var bloom = this.opt.bloom || {},
                width = bloom.width || this.width,
                height = bloom.height || this.height,
                figure = this.seed.heart.figure;
            var r = 240,
                x,
                y;
            for (var i = 0; i < random(1, 2); i++) {
                blooms.push(
                    this.createBloom(
                        width / 2 + width,
                        height,
                        r,
                        figure,
                        null,
                        1,
                        null,
                        1,
                        new Point(random(-100, 600), 720),
                        random(200, 300)
                    )
                );
            }
        }
    },
};
