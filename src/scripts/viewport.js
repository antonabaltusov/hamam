const m = document.getElementById("viewport");
const c = "content";
const u = "user-scalable=0";
const v = "width=";

resize();

window.addEventListener("resize", resize);

function resize() {
  const w = screen.width;
  if (w < 1250) {
    if (window.innerWidth > window.innerHeight) {
      m.setAttribute(c, v + "1024," + u);
    } else {
      if (w < 500) {
        m.setAttribute(c, v + "320," + u);
      } else {
        m.setAttribute(c, v + "768," + u);
      }
    }
  } else {
    m.setAttribute(c, v + "device-width," + u);
  }
}
