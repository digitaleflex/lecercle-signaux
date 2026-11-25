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
├── temoignages/
│   ├── temoignage-1           S19   · Math, maman de deux enfants
│   ├── temoignage-2           S19   · Salarié débutant
│   ├── temoignage-3           S19   · Ancien arnaqué par un VIP
│   └── temoignage-4           S19   · Étudiant ou commerçant
└── partage.jpg                       Aperçu affiché quand le lien est partagé (WhatsApp, Facebook)
```

`partage.jpg` est un cas à part : il n'apparaît pas sur la page, et son nom et son format sont fixes (JPG, 1200 × 630 px). Une fois le domaine choisi, son adresse complète doit être indiquée dans la balise `og:image` de `index.html` (Facebook et WhatsApp l'exigent).

## Formats acceptés

Le nom ci-dessus + l'une de ces extensions : `.webp`, `.jpg`, `.jpeg` ou `.png`.
Exemple : `assets/img/emerson/emerson-mentor.jpg`.

- Le nom doit être **exactement** celui de la liste : minuscules, tirets, sans accents ni espaces.
- S'il existe plusieurs versions (par exemple `.webp` et `.jpg`), c'est le `.webp` qui est utilisé.
- Conseillé : **WebP, moins de 200 Ko par image**, pour un chargement rapide sur mobile.
- Les images ne sont chargées qu'à l'approche de leur section : elles ne ralentissent pas l'ouverture de la page.

### Avant la mise en ligne finale

Tant que le nom n'a pas d'extension, la page essaie jusqu'à 4 formats, ce qui crée des requêtes en erreur (visibles dans la console du navigateur, sans effet sur l'affichage). Quand toutes les images sont en place, ajoute l'extension réelle dans `index.html` :

```html
<!-- avant -->
<div class="ph" data-img="assets/img/emerson/emerson-mentor" …>
<!-- après -->
<div class="ph" data-img="assets/img/emerson/emerson-mentor.jpg" …>
```

La page ne fait alors plus qu'un seul essai par image.

## Tailles conseillées

| Image | Format | Taille conseillée |
| --- | --- | --- |
| `telephone-signal` | Paysage ou carré | 1000 × 800 px |
| `cercle`, `cercle-accelerateurs` | Paysage, fond transparent (PNG/WebP) | 1000 × 700 px |
| `emerson-pourquoi`, `emerson-mentor` | Portrait | 800 × 1000 px |
| `temoignage-1` à `temoignage-4` | Capture d'écran ou vignette | 1000 px de large |
| `partage.jpg` | Paysage, JPG uniquement | 1200 × 630 px |

## Ajouter un témoignage de plus

Dans `index.html`, section S19, copie une ligne `<div class="ph" data-img="assets/img/temoignages/temoignage-4" …>` et remplace `4` par `5`. Dépose ensuite `temoignage-5.jpg` dans `temoignages/`.

## Vérifier en local

Ouvrir `index.html` directement dans le navigateur suffit. Pour un test au plus proche de la mise en ligne, lance un petit serveur depuis la racine du projet :

```bash
python3 -m http.server 8000
```

Puis ouvre http://localhost:8000.
