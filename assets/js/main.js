/* ============================================================
   COMPORTEMENTS DE LA PAGE
   1. Vidéo VSL à partir du lien YouTube ou Vimeo
   2. Images : chargées automatiquement depuis assets/img/
   3. Lien du bon de commande sur tous les boutons d'achat
   4. Compteur des places restantes
   5. Barre d'achat collante sur mobile
   ============================================================ */

(function () {
  "use strict";

  var config = window.CERCLE_CONFIG || {};

  /* 1. Vidéo VSL ------------------------------------------------ */
  function toEmbedUrl(url) {
    var m;
    if ((m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/))) {
      return "https://www.youtube-nocookie.com/embed/" + m[1] + "?rel=0&modestbranding=1";
    }
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return "https://player.vimeo.com/video/" + m[1];
    }
    return url; // autre lecteur : le lien est utilisé tel quel
  }

  function setVideo() {
    var box = document.getElementById("vsl");
    if (!box || !config.vslUrl) return;

    var iframe = document.createElement("iframe");
    iframe.src = toEmbedUrl(config.vslUrl);
    iframe.title = "Vidéo de présentation du Cercle Signaux X";
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    box.innerHTML = "";
    box.appendChild(iframe);
  }

  /* 2. Images ----------------------------------------------------
     Chaque emplacement porte data-img="assets/img/dossier/nom".
     - Sans extension : la page essaie .webp, puis .jpg, .jpeg et .png.
     - Avec extension (ex. "…/emerson-mentor.jpg") : un seul essai, aucune
       requête perdue. À privilégier une fois les images définitives en place.
     Si le fichier existe, il remplace le cadre [NEED] ; sinon le cadre reste.
     Les images ne sont cherchées qu'à l'approche de leur section, pour ne pas
     ralentir l'ouverture de la page sur mobile. */
  var EXTENSIONS = ["webp", "jpg", "jpeg", "png"];
  var HAS_EXTENSION = /\.(webp|jpe?g|png|gif|avif|svg)$/i;

  function loadImage(slot) {
    var base = slot.getAttribute("data-img");
    var alt = slot.getAttribute("data-alt") || "";
    var candidates = HAS_EXTENSION.test(base)
      ? [base]
      : EXTENSIONS.map(function (ext) { return base + "." + ext; });
    var i = 0;

    function tryNext() {
      if (i >= candidates.length) return; // aucune image : le cadre reste
      var img = new Image();
      img.alt = alt;
      img.decoding = "async";
      img.onload = function () {
        slot.innerHTML = "";
        slot.appendChild(img);
        slot.classList.add("has-img");
      };
      img.onerror = tryNext;
      img.src = candidates[i++];
    }

    tryNext();
  }

  function setImages() {
    var slots = document.querySelectorAll("[data-img]");

    if (!("IntersectionObserver" in window)) {
      slots.forEach(loadImage);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        loadImage(entry.target);
      });
    }, { rootMargin: "600px 0px" }); // commence 600 px avant que la section arrive

    slots.forEach(function (slot) { observer.observe(slot); });
  }

  /* 3. Boutons d'achat ------------------------------------------ */
  function setCheckoutLinks() {
    if (!config.checkoutUrl) return;
    document.querySelectorAll(".js-cta").forEach(function (link) {
      link.href = config.checkoutUrl;
    });
  }

  /* 4. Compteur des places -------------------------------------- */
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

  /* 5. Barre collante : visible dès que le hero sort de l'écran -- */
  function setStickyBar() {
    var sticky = document.getElementById("sticky");
    var hero = document.querySelector(".hero");
    if (!sticky || !hero || !("IntersectionObserver" in window)) return;

    new IntersectionObserver(function (entries) {
      sticky.classList.toggle("is-visible", !entries[0].isIntersecting);
    }).observe(hero);
  }

  setVideo();
  setImages();
  setCheckoutLinks();
  setCounter();
  setStickyBar();
})();
