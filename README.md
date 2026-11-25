# Le Cercle Signaux X · Page de vente

Page de vente du **Cercle Signaux X** (15 000 FCFA, accès à vie), construite sur le format de la page Freedom Cash IA. Le texte suit le document « Scripts VSL & pages · V2 ».

Site statique : HTML, CSS et JavaScript, sans framework ni étape de build.

## Structure

```
.
├── index.html                 # La page : 22 sections (S1 à S22)
├── assets/
│   ├── css/
│   │   ├── base.css           # Variables (couleurs, police), reset, typographie, grilles
│   │   ├── components.css     # Éléments réutilisés : boutons, listes, prix, garantie, FAQ, barre mobile
│   │   └── sections.css       # Styles propres à chaque section, dans l'ordre de la page
│   ├── js/
│   │   ├── config.js          # Réglages : vidéo, lien du bon de commande, compteur des 27 places
│   │   └── main.js            # Comportements : vidéo, images, liens d'achat, compteur, barre mobile
│   └── img/                   # Images : voir assets/img/README.md
│       ├── mockups/           # Visuels du produit (téléphone, mockups 3D)
│       ├── emerson/           # Photos d'Emerson
│       └── temoignages/       # Captures des témoignages
└── README.md
```

## Réglages courants

Tout se fait dans `assets/js/config.js` :

| Réglage | Rôle | Valeur actuelle |
| --- | --- | --- |
| `vslUrl` | Lien YouTube ou Vimeo de la VSL, transformé automatiquement en lecteur | `""` (vide) |
| `checkoutUrl` | Lien du bon de commande, appliqué à tous les boutons d'achat | `#offre` (provisoire) |
| `placesTotal` | Nombre de places donnant droit aux 7 accélérateurs | `27` |
| `placesRestantes` | Affiche « Plus que X places sur 27 » ; `null` masque le compteur | `null` |

Les couleurs et la police se changent dans les variables en haut de `assets/css/base.css`.

## Ajouter les images

Dépose chaque image dans `assets/img/`, dans le bon sous-dossier et avec le nom prévu : la page l'affiche toute seule, sans toucher au HTML. La liste des noms est dans [`assets/img/README.md`](assets/img/README.md), et chaque cadre `[NEED]` de la page affiche aussi le chemin attendu.

## Compatibilité

- **Mobile d'abord** : vérifiée sans débordement de 320 px (petits Android) à 1440 px (ordinateur).
- **Connexions lentes** : aucun framework, images chargées à la demande, police avec affichage immédiat du texte.
- **Sans JavaScript** (Opera Mini en mode extrême, par exemple) : la page reste lisible et les boutons mènent à la section de l'offre. Seuls la vidéo, les images, le compteur et la barre mobile dépendent du JavaScript.
- **Accessibilité** : contour visible au clavier, icônes décoratives masquées aux lecteurs d'écran, tableau comparatif lu « Oui / Non », zones de clic d'au moins 44 px, animations réduites si le téléphone le demande.
- **Partage** : titre, description et image d'aperçu pour WhatsApp et Facebook (voir `partage.jpg` dans `assets/img/README.md`).

## Voir la page en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur :

```bash
python3 -m http.server 8000
```

## Mise en ligne

- **Netlify, Vercel ou GitHub Pages** : publier le dossier tel quel, aucune configuration n'est nécessaire.
- **Systeme.io** : possible, mais plus délicat. Le bloc « Code HTML » ne reçoit que le contenu de `<body>` : les fichiers CSS, JS et les images doivent alors être hébergés ailleurs (Netlify, GitHub Pages) et appelés par leur adresse complète (`https://…/assets/css/base.css`, etc.). Le plus simple reste d'héberger la page entière sur Netlify ou GitHub Pages et de garder Systeme.io pour le paiement ou l'e-mailing.

## Avant de publier : éléments à compléter

Les emplacements à remplir sont des cadres en pointillés marqués **[NEED]** dans la page. Le suivi détaillé de chaque élément est dans les [issues du dépôt](https://github.com/digitaleflex/lecercle-signaux/issues).

- [ ] La vidéo VSL (`vslUrl` dans `assets/js/config.js`)
- [ ] Le mockup du téléphone (`assets/img/mockups/telephone-signal`)
- [ ] Les 2 mockups 3D (`assets/img/mockups/cercle` et `cercle-accelerateurs`)
- [ ] Les 2 photos d'Emerson (`assets/img/emerson/`)
- [ ] Les témoignages, avec accord écrit (`assets/img/temoignages/`)
- [ ] La réponse FAQ « Je suis déjà inscrit chez un autre trader »
- [ ] Le lien du bon de commande (`checkoutUrl`) et la plateforme de paiement Mobile Money
- [ ] Le vrai compteur des 27 places et la règle après la 27e inscription
- [ ] Les pages légales du pied de page : mentions légales, confidentialité, CGV, politique de remboursement
- [ ] La validation de l'avertissement sur les risques du trading (pied de page)
- [ ] L'image de partage `assets/img/partage.jpg` et son adresse complète dans `og:image`
- [ ] L'extension réelle dans chaque `data-img`, une fois les images définitives en place
