# Simplified Templates Files

Une extension VSCode simple et efficace pour insérer des templates de fichiers dans votre éditeur, basée sur le langage détecté du fichier actif.

## Description

Cette extension permet d'insérer rapidement des templates prédéfinis pour différents langages de programmation directement dans votre éditeur VSCode. Elle détecte automatiquement le langage du fichier ouvert et propose uniquement les templates compatibles.

## Fonctionnalités

- **Détection automatique du langage** : L'extension filtre les templates en fonction du langage du fichier actif (par exemple, HTML, C, C++, Python, Batch).
- **Insertion facile** : Utilisez le menu contextuel de l'éditeur pour accéder aux templates.
- **Templates inclus** :
  - **HTML** : Template de base pour une page HTML avec structure standard.
  - **C** : Template pour un programme C simple avec `main`.
  - **C++** : Template pour un programme C++ avec `main`.
  - **Batch (.bat)** : Template de base pour un script Batch.
  - **Python** : Template de classe Python basique.
  - **Makefiles** : Templates pour compiler des projets C et C++.

## Installation

1. Téléchargez le fichier `.vsix` de l'extension depuis le [dépôt GitHub](https://github.com/codeartemis37/simplified-templates-files.git).
2. Ouvrez VSCode.
3. Allez dans la palette de commandes (`Ctrl+Shift+P` ou `Cmd+Shift+P` sur Mac).
4. Tapez `Extensions: Install from VSIX...` et sélectionnez le fichier téléchargé.
5. Redémarrez VSCode si nécessaire.

Alternativement, si l'extension est publiée sur le Marketplace VSCode, recherchez "Simplified Templates Files" dans l'onglet Extensions de VSCode et installez-la directement.

## Utilisation

1. Ouvrez un fichier dans VSCode (par exemple, un fichier `.c`, `.html`, etc.).
2. Faites un clic droit dans l'éditeur pour ouvrir le menu contextuel.
3. Naviguez vers **Templates** > **Select Template**.
4. Choisissez un template dans la liste proposée (filtrée par langage détecté).
5. Le contenu du template sera inséré à la position du curseur.

Si aucun template n'est disponible pour le langage détecté, un message informatif s'affichera.

## Structure des Templates

Les templates sont stockés dans le dossier `src/templates/` et configurés via `src/templates.json`. Chaque template est associé à un ou plusieurs langages.

Exemples de contenu :
- **HTML** : Structure de base avec DOCTYPE, head et body.
- **C** : Fonction `main` avec include de `stdio.h`.
- **C++** : Fonction `main` avec include de `iostream`.
- **Batch** : Script de base avec `@echo off`.
- **Python** : Classe simple avec `__init__`.

## Développement

Pour contribuer ou modifier les templates :
1. Clonez le dépôt : `git clone https://github.com/codeartemis37/simplified-templates-files.git`
2. Modifiez les fichiers dans `src/templates/` ou `src/templates.json`.
3. Testez l'extension en mode développement VSCode.
4. Soumettez une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE.md](../LICENSE.md) pour plus de détails.

**Note importante** : Toute modification ou distribution doit créditer l'auteur original et fournir un lien vers le dépôt officiel.

## Auteur

- **_shantorian // artemis37** - [GitHub](https://github.com/codeartemis37)

## Dépôt

[GitHub - simplified-templates-files](https://github.com/codeartemis37/simplified-templates-files.git)

---

*Extension développée en JavaScript pour VSCode.*
