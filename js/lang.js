/* English / Spanish: every text carries both, the page shows one.
   The choice is remembered per browser; the first visit follows the browser's language. */
(function () {
  var html = document.documentElement;
  var titles = { en: html.getAttribute('data-title-en'), es: html.getAttribute('data-title-es') };
  function setLang(l) {
    html.setAttribute('data-lang', l);
    html.setAttribute('lang', l);
    if (titles[l]) document.title = titles[l];
    // an image's alt text can't be hidden with CSS like the spans, so it is swapped
    document.querySelectorAll('[data-alt-' + l + ']').forEach(function (img) {
      img.setAttribute('alt', img.getAttribute('data-alt-' + l));
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === l));
    });
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var nav = (navigator.language || 'en').toLowerCase();
  setLang(saved === 'en' || saved === 'es' ? saved : (/^(es|ca)/.test(nav) ? 'es' : 'en'));
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });
})();
