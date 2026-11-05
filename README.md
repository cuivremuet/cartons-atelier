# cartons-atelier

Compose un carton documentaire SVG à partir de quatre lignes de texte.

## Usage

Node.js 22+ ; aucune dépendance externe. Depuis ce dossier :

```powershell
node main.mjs example.json exemple-sortie.svg
node --test test.mjs
```

Entrée : `title`, `classification`, `date`, `id` : textes d'une ligne, non vides, 64 caractères maximum. Sortie : SVG statique 1280 × 480, caractères XML échappés. L'ID d'exemple n'est pas celui d'un dossier réel. Les noms et guildes éventuels peuvent figurer dans le titre ou la classification après validation des textes. Ouvrir le SVG dans un navigateur. Aucune vidéo, piste audio, animation ou opération de montage ; la lisibilité d'un export vidéo reste une vérification distincte.

La sortie est écrite seulement après validation complète et remplace le fichier de sortie choisi. Utiliser un chemin distinct de l'entrée. JSON UTF-8 sans BOM. Le dossier de destination doit exister. Erreur de lecture/JSON/validation/écriture : message sur stderr, code 1. Aucun accès réseau.

## Exemple

Voir `example.json` et `exemple-sortie.svg`. Les exemples n'utilisent que des métadonnées ou des textes fictifs.

Licence MIT. Version 0.1.0.

