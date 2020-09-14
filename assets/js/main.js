var circles = [];
var keyData = {
  a: { color: "#BD93F9", sound: "bubbles" },
  b: { color: "#50FA7B", sound: "clay" },
  c: { color: "#F9D368", sound: "confetti" },
  d: { color: "#8ADEEF", sound: "corona" },
  e: { color: "#E87BC2", sound: "flash-1" },
  f: { color: "#EDEDED", sound: "dotted-spiral" },
  g: { color: "#35AF94", sound: "glimmer" },
  h: { color: "#FA877A", sound: "moon" },
  i: { color: "#E0554A", sound: "pinwheel" },
  j: { color: "#FFE473", sound: "piston-1" },
  k: { color: "#B06428", sound: "piston-2" },
  l: { color: "#FF5252", sound: "piston-3" },
  m: { color: "#CCCCCE", sound: "prism-1" },
  n: { color: "#33B5C6", sound: "prism-2" },
  o: { color: "#52C3A3", sound: "prism-3" },
  p: { color: "#5E73DD", sound: "splits" },
  q: { color: "#5AFFB7", sound: "squiggle" },
  r: { color: "#FDED32", sound: "strike" },
  s: { color: "#D587EB", sound: "squiggle" },
  t: { color: "#50BC69", sound: "timer" },
  u: { color: "#E87BC2", sound: "ufo" },
  v: { color: "#75A5D3", sound: "veil" },
  w: { color: "#FC5426", sound: "wipe" },
  z: { color: "#B0DDE9", sound: "zig-zag" },
  y: { color: "#A72975", sound: "flash-2" },
  z: { color: "#4B68D1", sound: "flash-3" },
  shift: { color: "#F9D368", sound: "bubbles" },
  control: { color: "#BD93F9", sound: "squiggle" },
  space: { color: "#F9D368", sound: "corona" },
  tab: { color: "#50FA7B", sound: "clay" },
};

function onKeyDown(event) {
  // get key color and sound using keyData object
  var color = keyData[event.key] ? keyData[event.key].color : "#50FA7B";
  var soundSrc = keyData[event.key]
    ? "assets/sounds/" + keyData[event.key].sound + ".mp3"
    : "assets/sounds/bubbles.mp3";
  var sound = new Howl({
    src: [soundSrc],
  });
  // play sound
  sound.play();
  generateRandomCircle(color);
}
function onMouseDown(event) {
  var color = randomProperty(keyData).color;
  var soundSrc = "assets/sounds/" + randomProperty(keyData).sound + ".mp3";
  var sound = new Howl({
    src: [soundSrc],
  });
  // play sound
  sound.play();
  generaleCircle(event.point, color);
}

function onFrame(event) {
  // animate hue, size of each circle in circles array
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
    if (circles[i].area < 1) {
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
    }
  }
}

function generateRandomCircle(color) {
  // generate a random point on canvas
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, 500);
  newCircle.fillColor = color;
  circles.push(newCircle);
}

function generaleCircle(point, color) {
  var newCircle = new Path.Circle(point, 500);
  newCircle.fillColor = color;
  circles.push(newCircle);
}

function randomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}
