/* ============================================================
   COMPORTEMENTS DE LA PAGE
   1. Lien du bon de commande sur tous les boutons d'achat
   2. Compteur des places restantes
   3. Barre d'achat collante sur mobile
   ============================================================ */

(function () {
  "use strict";

  var config = window.CERCLE_CONFIG || {};

  /* 1. Boutons d'achat */
  function setCheckoutLinks() {
    if (!config.checkoutUrl) return;
    document.querySelectorAll(".js-cta").forEach(function (link) {
      link.href = config.checkoutUrl;
    });
  }

  /* 2. Compteur des places */
  function setCounter() {
    var counter = document.getElementById("counter");
    var left = config.placesRestantes;
    var total = config.placesTotal || 27;
    if (!counter || typeof left !== "number") return;

    counter.textContent =
      left > 0
        ? "Plus que " + left + " place" + (left > 1 ? "s" : "") + " sur " + total
        : "Les " + total + " places sont prises : les accélérateurs reviennent à la prochaine vague";
    counter.hidden = false;
  }

  /* 3. Barre collante : visible dès que le hero sort de l'écran */
  function setStickyBar() {
    var sticky = document.getElementById("sticky");
    var hero = document.querySelector(".hero");
    if (!sticky || !hero || !("IntersectionObserver" in window)) return;

    new IntersectionObserver(function (entries) {
      sticky.classList.toggle("is-visible", !entries[0].isIntersecting);
    }).observe(hero);
  }

  setCheckoutLinks();
  setCounter();
  setStickyBar();
})();
