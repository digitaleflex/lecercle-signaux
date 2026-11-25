/* ============================================================
   CONFIGURATION DE LA PAGE
   C'est le seul fichier à modifier pour les réglages courants.
   ============================================================ */

window.CERCLE_CONFIG = {
  /* Lien du bon de commande (plateforme de paiement avec Mobile Money).
     Il est appliqué à tous les boutons d'achat de la page.
     Tant qu'il n'est pas défini, les boutons ramènent à la section de l'offre. */
  checkoutUrl: "#offre",

  /* Nombre total de places donnant droit aux 7 accélérateurs. */
  placesTotal: 27,

  /* Places restantes sur les 27.
     Exemple : 12 affiche « Plus que 12 places sur 27 ».
     null masque le compteur. À mettre à jour à la main. */
  placesRestantes: null,
};
