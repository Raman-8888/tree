// Utility functions shared across the canvas engine

export function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export function bezier(cp, t) {
    var p1 = cp[0].mul((1 - t) * (1 - t));
    var p2 = cp[1].mul(2 * t * (1 - t));
    var p3 = cp[2].mul(t * t);
    return p1.add(p2).add(p3);
}

export function inheart(x, y, r) {
    var z =
        ((x / r) * (x / r) + (y / r) * (y / r) - 1) *
        ((x / r) * (x / r) + (y / r) * (y / r) - 1) *
        ((x / r) * (x / r) + (y / r) * (y / r) - 1) -
        (x / r) * (x / r) * (y / r) * (y / r) * (y / r);
    return z < 0;
}

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
