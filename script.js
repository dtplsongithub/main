let c = document.getElementById("ctxx");
let ctx = c.getContext("2d");
document.getElementById("e").innerHTML = ""
const FPS = 60
c.width = innerWidth - 25;
c.height = 720;
var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
if (isMobile) {

  document.getElementById("e").innerHTML = "You are on phone. this site is not mobile-friendly. :/ sorry";
} else {
  setInterval(update, 1000 / FPS);
}
//set things up for update
let wc = c.width / 2;
let hc = c.height / 2;
let t = 0
//update
function update() {

  c.width = innerWidth - 25;
  wc = c.width / 2;
  hc = c.height / 2;
  t += .01;
  // background
  let gradient = ctx.createLinearGradient(wc, 0, wc, c.height);
  gradient.addColorStop(0, "#000");
  gradient.addColorStop(0.25, "#005");
  gradient.addColorStop(0.75, "#005");
  gradient.addColorStop(1, "#000");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, c.width, c.height);
  //bars
  let gradient2 = ctx.createLinearGradient(wc, Math.sin(t * 4) * 220 + hc - 30, wc, Math.sin(t * 4) * 220 + hc + 30);
  gradient2.addColorStop(0, "#00000000");
  gradient2.addColorStop(0.5, "#0077ffff");
  gradient2.addColorStop(1, "#00000000");

  ctx.fillStyle = gradient2;
  ctx.fillRect(0, Math.sin(t * 4) * 220 + hc - 30, c.width, 60);
  let gradient3 = ctx.createLinearGradient(wc, Math.sin(t * 5) * 220 + hc - 30, wc, Math.sin(t * 5) * 220 + hc + 30);
  gradient3.addColorStop(0, "#00000000");
  gradient3.addColorStop(0.5, "#07f");
  gradient3.addColorStop(1, "#00000000");

  ctx.fillStyle = gradient3;
  ctx.fillRect(0, Math.sin(t * 5) * 220 + hc - 30, c.width, 60);
  let gradient4 = ctx.createLinearGradient(wc, Math.sin(t * 3) * 220 + hc - 30, wc, Math.sin(t * 3) * 220 + hc + 30);
  gradient4.addColorStop(0, "#00000000");
  gradient4.addColorStop(0.5, "#07f");
  gradient4.addColorStop(1, "#00000000");

  ctx.fillStyle = gradient4;
  ctx.fillRect(0, Math.sin(t * 3) * 220 + hc - 30, c.width, 60);
  //cube
  ctx.strokeStyle = "#000047";
  ctx.lineWidth = 10;
  line(singrade(t * 125) * 100 + 100, cosgrade(t * 125) * 25 + 500 + 80, singrade(t * 125 + 90) * 100 + 100, cosgrade(t * 125 + 90) * 25 + 500 + 80);
  line(singrade(t * 125 + 90) * 100 + 100, cosgrade(t * 125 + 90) * 25 + 650 + 80, singrade(t * 125 + 90) * 100 + 100, cosgrade(t * 125 + 90) * 25 + 500 + 80);
  line(singrade(t * 125 + 90) * 100 + 100, cosgrade(t * 125 + 90) * 25 + 500 + 80, singrade(t * 125 + 180) * 100 + 100, cosgrade(t * 125 + 180) * 25 + 500 + 80);
  line(singrade(t * 125 + 180) * 100 + 100, cosgrade(t * 125 + 180) * 25 + 650 + 80, singrade(t * 125 + 180) * 100 + 100, cosgrade(t * 125 + 180) * 25 + 500 + 80);
  line(singrade(t * 125 + 180) * 100 + 100, cosgrade(t * 125 + 180) * 25 + 500 + 80, singrade(t * 125 - 90) * 100 + 100, cosgrade(t * 125 - 90) * 25 + 500 + 80);
  line(singrade(t * 125 - 90) * 100 + 100, cosgrade(t * 125 - 90) * 25 + 650 + 80, singrade(t * 125 - 90) * 100 + 100, cosgrade(t * 125 - 90) * 25 + 500 + 80);
  line(singrade(t * 125 - 90) * 100 + 100, cosgrade(t * 125 - 90) * 25 + 500 + 80, singrade(t * 125) * 100 + 100, cosgrade(t * 125) * 25 + 500 + 80);
  line(singrade(t * 125) * 100 + 100, cosgrade(t * 125) * 25 + 650 + 80, singrade(t * 125) * 100 + 100, cosgrade(t * 125) * 25 + 500 + 80);

  line(singrade(t * 125) * 100 + 100, cosgrade(t * 125) * 25 + 650 + 80, singrade(t * 125 + 90) * 100 + 100, cosgrade(t * 125 + 90) * 25 + 650 + 80);
  line(singrade(t * 125 + 90) * 100 + 100, cosgrade(t * 125 + 90) * 25 + 650 + 80, singrade(t * 125 + 180) * 100 + 100, cosgrade(t * 125 + 180) * 25 + 650 + 80);
  line(singrade(t * 125 + 180) * 100 + 100, cosgrade(t * 125 + 180) * 25 + 650 + 80, singrade(t * 125 + 270) * 100 + 100, cosgrade(t * 125 + 270) * 25 + 650 + 80);
  line(singrade(t * 125 - 90) * 100 + 100, cosgrade(t * 125 - 90) * 25 + 650 + 80, singrade(t * 125) * 100 + 100, cosgrade(t * 125) * 25 + 650 + 80);

  //text
  writeint(wc, 40, "dtpls's site", "32px Consolas", 21, 9999, 2, 7, 0.07, t, "n", [20, 90, 100], "white");
  writeint(wc, c.height - 20, "copyleft 2017-2023", "16px Consolas", 10, 999, 2, 7, 0.07, t, "n", [20, 90, 100], "white");
  writeint(wc + Math.sin(t / 3 + 76) * 15, hc - 150, "Welcome to my site!", "64px Consolas", 34, 8, 15, 5, 0.04, t, "n", [20, 90, 100], "#eef");
  writeint(wc + Math.sin(t / 2 + 222) * 30, hc - 60, "This is my main page. You probably came here for the link below.", "32px Consolas", 18, 6, 8, 5, 0.04, t, "h", [0, 60, 75], "#eef");
  writeint(wc + Math.sin(t / 3) * 15, hc + 25, "also h because i ran out of ideas of what to put in here", "32px Consolas", 18, 6, 8, 5, 0.04, t, "s", [240, 60, 0], "#eef");
  // document.getElementById("abtme").style.color=hslToHex(240,60,Math.sin(t * 5) * 12+82)
}

//other functions
function textwsh(x, y, color, text, styler, shadowoffset) {
  ctx.font = styler;
  // shadow
  ctx.fillStyle = "#0009";
  ctx.fillText(text, x + shadowoffset, y + shadowoffset);
  //actual text render
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}
function writeint(x, y, text, style, spacing, so, sinmulti, speed, obt, time, colorstyle, color1, ncolor) {           // colors should be written as h,s,b except for ncolor
  let splittext = text.split('');
  let tempx = 0;
  let tempy = 0;
  let tempcolor = 0;
  if (colorstyle == "n") {
    tempcolor = ncolor;
  } else if (colorstyle == "h") {
    tempcolor = hslToHex(time * 100 % 360, color1[1], color1[2]);
  } else if (colorstyle == "s") {
    tempcolor = hslToHex(color1[0], color1[1], Math.sin(time * speed) * 12 + 82)
  } else {
    tempcolor = ncolor;
    console.warn("bad colorstyle: \"" + colorstyle + "\" !");
  }
  for (let i = 0; i < text.length; i++) {
    tempx = (i * spacing + x) - (spacing - 2) * text.length / 2 - spacing - 2;
    tempy = ((Math.sin((time + obt * i) * speed) * sinmulti) + y);
    textwsh(tempx, tempy, tempcolor, splittext[i], style, so);
  }
}
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function singrade(grade) {
  return Math.sin(grade / 180 * Math.PI);
}
function cosgrade(grade) {
  return Math.cos(grade / 180 * Math.PI);
}
function line(x0, y0, x1, y1) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}