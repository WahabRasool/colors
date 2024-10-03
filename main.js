//#weirdweboctober pens

let colors;
let d, a, b, c, g, f;
function setup() {
  c = max(800, min(windowWidth * 0.9, windowHeight * 0.9));
  describe("");
  d = c / 10;
  colors = [];
  createCanvas(c / 2, c);
  angleMode(DEGREES);
  a = random(30, 41);
  b = random(70, 90);
  f = random(30, 150);
  g = random(180, 260);
  cnt = 0;
  for (let i = 0; i < c; i += d) {
    colors[cnt] = {
      r: int(i / 4) % 255,
      g: int(i / 5) % 255,
      b: int(i / 6) % 255
    };
    cnt++;
  }

  describe(
    "A tall canvas with 10 rectangles of gradient color and from top to bottom with 10 circles centered on each that has the same gradient but from bottom to top. Over time the gradients change hues."
  );
}

function draw() {
  noStroke();
  background(20, 40, 55, 70);
  translate(width / 2, height / 2);
  t = frameCount * 6;
  for (let i = 0; i < colors.length; i++) {
    fill(
      colors[i].r + 255 * sin(t / b),
      colors[i].g - 255 * cos(t / f),
      colors[i].b + 255 * sin(t / g) * cos(t / a)
    );
    rect(-width / 2, -height / 2 + i * d, width);
  }
  for (let i = 0; i < colors.length; i++) {
    fill(
      colors[i].r + 255 * sin(t / b),
      colors[i].g - 255 * cos(t / f),
      colors[i].b + 255 * sin(t / g) * cos(t / a)
    );
    circle(0, height / 2 - i * d - d / 2, d);
  }
}

function mousePressed() {
  setup();
  draw();
}

function windowResized() {
  setup();
  draw();
}
