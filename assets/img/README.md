# Images de la page

**Règle unique : dépose l'image dans le bon dossier, avec le bon nom. La page l'affiche toute seule.** Il n'y a rien à modifier dans le HTML.

Tant qu'une image manque, la page affiche à sa place un cadre en pointillés `[NEED]` avec le chemin attendu écrit dessous.

## Où mettre chaque image

```
assets/img/
├── mockups/
│   ├── telephone-signal       S2-S3 · Téléphone avec une alerte de signal, la note vocale et le calculateur
│   ├── cercle                 S13   · Visuel 3D du Cercle Signaux X (bloc prix)
│   └── cercle-accelerateurs   S15   · Visuel 3D « box » du Cercle + 7 accélérateurs (bloc prix)
├── emerson/
│   ├── emerson-pourquoi       S10   · Portrait d'Emerson (section « Pourquoi Emerson a créé le Cercle »)
│   └── emerson-mentor         S18   · Photo d'Emerson (section « Emerson, ton mentor »)
└── temoignages/
    ├── temoignage-1           S19   · Math, maman de deux enfants
    ├── temoignage-2           S19   · Salarié débutant
    ├── temoignage-3           S19   · Ancien arnaqué par un VIP
    └── temoignage-4           S19   · Étudiant ou commerçant
```

## Formats acceptés

Le nom ci-dessus + l'une de ces extensions : `.webp`, `.jpg`, `.jpeg` ou `.png`.
Exemple : `assets/img/emerson/emerson-mentor.jpg`.

- Le nom doit être **exactement** celui de la liste : minuscules, tirets, sans accents ni espaces.
- S'il existe plusieurs versions (par exemple `.webp` et `.jpg`), c'est le `.webp` qui est utilisé.
- Conseillé : **WebP, moins de 200 Ko par image**, pour un chargement rapide sur mobile.

## Tailles conseillées

| Image | Format | Taille conseillée |
| --- | --- | --- |
| `telephone-signal` | Paysage ou carré | 1000 × 800 px |
| `cercle`, `cercle-accelerateurs` | Paysage, fond transparent (PNG/WebP) | 1000 × 700 px |
| `emerson-pourquoi`, `emerson-mentor` | Portrait | 800 × 1000 px |
| `temoignage-1` à `temoignage-4` | Capture d'écran ou vignette | 1000 px de large |

## Ajouter un témoignage de plus

Dans `index.html`, section S19, copie une ligne `<div class="ph" data-img="assets/img/temoignages/temoignage-4" …>` et remplace `4` par `5`. Dépose ensuite `temoignage-5.jpg` dans `temoignages/`.

## Vérifier en local

Les images se vérifient avec un petit serveur local, lancé depuis la racine du projet :

```bash
python3 -m http.server 8000
```

Puis ouvre http://localhost:8000.
