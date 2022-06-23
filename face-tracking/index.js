window.mobileCheck = function () {
  const ua = navigator.userAgent.toLowerCase();
  const isAndroid = ua.indexOf("android") > -1;
  return isAndroid;
};

document.addEventListener("DOMContentLoaded", () => {
  const camera = document.getElementById("camera");

  if (mobileCheck()) {
    console.log("i am here");
    camera.setAttribute("active", true);
    const head = document.getElementById("head");
    head.setAttribute("position", "-0.04 0.3 -0.02");
    head.setAttribute("scale", "0.06 0.05 0.07");
    const glasses = document.getElementById("glasses");
    glasses.setAttribute("position", "-0.05 -0.15 -0.018");
    glasses.setAttribute("scale", "0.27 0.35 0.2");
  }
});
