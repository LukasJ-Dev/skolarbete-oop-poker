function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    return "rgb("+ this.r + ", " + this.g + ", " + this.b + ")";
}

Color.prototype.hex = function() {
    return "#" + (1 << 24 | this.r << 16 | this.g << 8 | this.b).toString(16).slice(1);
}

console.log(new Color(0,0,0).hex());