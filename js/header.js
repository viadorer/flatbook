/* Flatbook.cz — Shared Header Component */
(function () {
  var page = document.body.dataset.page || 'index';
  function ac(p) { return p === page ? ' active' : ''; }

  document.getElementById('site-header').innerHTML =
    '<nav class="fixed-nav bg-walls" id="navbar">' +
      '<div class="container d-flex flex-nowrap align-items-center justify-content-between">' +
        '<div class="nav-links d-none d-lg-flex align-items-center gap-4">' +
          '<a href="index.html" class="nav-link-item' + ac('index') + '">Chci investovat</a>' +
          '<a href="pronajimame.html" class="nav-link-item' + ac('pronajimame') + '">Pronajímáme</a>' +
          '<a href="financovani.html" class="nav-link-item' + ac('financovani') + '">Financování</a>' +
        '</div>' +
        '<a href="index.html" class="nav-logo">' +
          '<span class="logo-text">Flatbook</span>' +
          '<span class="logo-dot">.cz</span>' +
        '</a>' +
        '<div class="nav-right d-flex align-items-center gap-3">' +
          '<a href="index.html#kontakt" class="btn btn-outline-dark btn-nav">Kontakt <i class="bi bi-arrow-right ms-2"></i></a>' +
          '<button class="btn-menu d-lg-none" id="menuToggle" aria-label="Menu">' +
            '<i class="bi bi-list"></i>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</nav>' +

    '<div class="mobile-menu" id="mobileMenu">' +
      '<div class="mobile-menu-header d-flex justify-content-between align-items-center">' +
        '<span class="logo-text">Flatbook<span class="logo-dot">.cz</span></span>' +
        '<button class="btn-menu" id="menuClose" aria-label="Zavřít"><i class="bi bi-x-lg"></i></button>' +
      '</div>' +
      '<div class="mobile-menu-links">' +
        '<a href="index.html"' + (page === 'index' ? ' class="active"' : '') + '>Chci investovat</a>' +
        '<a href="pronajimame.html"' + (page === 'pronajimame' ? ' class="active"' : '') + '>Pronajímáme</a>' +
        '<a href="financovani.html"' + (page === 'financovani' ? ' class="active"' : '') + '>Financování</a>' +
        '<a href="index.html#kontakt" class="btn btn-outline-dark w-100 mt-4">Kontakt <i class="bi bi-arrow-right ms-2"></i></a>' +
      '</div>' +
    '</div>' +
    '<div class="mobile-menu-overlay" id="menuOverlay"></div>';
})();
