module.exports = function reverse (n) {
    n = Math.abs(n);
    n = String(n);
    n = n.split("");
    n = n.reverse();
    n = n.join("");
    n = Number(n); 
    return n;
}
