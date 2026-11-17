// Plays the recordings only while they are on screen, and not at all if the
// visitor asked for reduced motion (then they get the controls instead).
(function () {
  var vids = document.querySelectorAll('.vid video');
  if (!vids.length) return;
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  vids.forEach(function (v) {
    if (still) { v.removeAttribute('autoplay'); v.pause(); v.controls = true; }
  });
  if (still || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { var p = e.target.play(); if (p && p.catch) p.catch(function () {}); }
      else e.target.pause();
    });
  }, { threshold: 0.25 });
  vids.forEach(function (v) { io.observe(v); });
})();
