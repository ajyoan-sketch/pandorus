# Plan Developpeur Pandorus

## Role du document

Ce document traduit le pilotage chef de projet en plan de production concret.

Il sert a organiser les evolutions du site `wiki-pandorus` de maniere executable :

- par lots
- par taches techniques
- par fichiers concernes
- par ordre d'execution
- avec verification attendue

Ce document doit permettre de passer a l'action sans perdre la logique du projet.

---

## 1. Regles de travail

### Regle 1 - Toujours privilegier la coherence narrative

Si une belle interface contredit le récit, il faut corriger l'interface.

### Regle 2 - Toujours penser "prochain chapitre"

Chaque changement doit etre juge selon cette question :

"Est-ce que cela rendra le prochain ajout de chapitre plus simple ou plus fragile ?"

### Regle 3 - Ne pas melanger refonte visuelle et refactor structurel profond dans le meme lot

Sinon :

- les regressions sont plus difficiles a isoler
- les validations deviennent floues
- on perd en lisibilite de chantier

### Regle 4 - Finir un systeme avant d'en ouvrir un autre

Exemple :

- finir la logique des timelines personnages
- puis seulement attaquer les statuts narratifs
- puis seulement revoir plus largement les cartes ou la home

---

## 2. Fichiers structurants du projet

### Fichiers centraux actuels

- `index.html`
- `style.css`
- `app.js`

### Fichiers de pilotage

- `ROADMAP-UX-UI-PANDORUS.md`
- `PLAN-DIRECTEUR-PANDORUS.md`
- `PLAN-DEVELOPPEUR-PANDORUS.md`

### Observation technique

Le projet est encore tres centralise.

Le point de fragilite principal est `app.js`, qui porte a la fois :

- la donnee
- le rendu
- une partie de la navigation
- une partie des comportements

Le premier grand chantier developpeur doit donc reduire cette concentration.

---

## 3. Ordre recommande des lots

### Lot 1 - Clarte narrative immediate

But :
faire en sorte que chaque fiche personnage reponde clairement a :

- qui est ce personnage
- ou en est-il
- quel est son dernier jalon narratif

### Lot 2 - Normalisation des donnees

But :
sortir progressivement le contenu de `app.js`.

### Lot 3 - Pipeline de mise a jour par chapitre

But :
rendre l'integration des futurs chapitres fiable et repetable.

### Lot 4 - Navigation et exploration

But :
mieux relier les sections entre elles.

### Lot 5 - Design system et finitions

But :
augmenter la maturite visuelle une fois le socle clarifie.

### Lot 6 - Refactor technique

But :
stabiliser durablement le site.

---

## 4. Backlog developpeur detaille

## LOT 1 - Clarte narrative immediate

### DEV-01 - Uniformiser toutes les timelines personnages

**Objectif**

Utiliser une meme grammaire temporelle sur toutes les fiches.

**Fichiers cibles**

- `app.js`
- `index.html`

**Travail**

- definir les labels standards :
  - `Jour X`
  - `Nuit du Jour X`
  - `Fin du Jour X`
  - `Avant le récit`
  - `Après le Jour X`
- supprimer les labels trop vagues si un jour peut etre deduit
- verifier les personnages actifs en priorité

**Verification**

- on peut repondre clairement a des questions du type :
  - "que fait Ezze au Jour 11 ?"
  - "ou en est Ab'Youbi au Jour 12 ?"

**Priorite**

Critique

### DEV-02 - Aligner les fiches personnages avec la chronologie centrale

**Objectif**

Faire de la chronologie centrale la reference commune du site.

**Fichiers cibles**

- `app.js`

**Travail**

- comparer les timelines individuelles aux `timelineEvents`
- identifier les trous ou les divergences
- corriger les evenements non alignes
- documenter les cas encore ambigus

**Verification**

- aucune contradiction evidente entre fiche personnage et chronologie generale

**Priorite**

Critique

---

## LOT 2 - Normalisation des donnees

### DEV-03 - Extraire les donnees personnages dans un module dedie

**Objectif**

Sortir les personnages de `app.js`.

**Fichiers cibles**

- `app.js`
- nouveau fichier recommande :
  - `assets/data/characters.js`

**Travail**

- extraire les fiches personnages dynamiques
- conserver un point d'entree simple dans `app.js`
- ne pas casser les hashes, les liens contextuels ni le rendu actuel

**Verification**

- le site fonctionne a l'identique
- la lecture de `app.js` devient plus simple

**Priorite**

Critique

### DEV-04 - Extraire les donnees lieux, creatures et chronologie

**Objectif**

Continuer la decomposition du contenu.

**Fichiers cibles**

- `app.js`
- nouveaux fichiers recommandes :
  - `assets/data/locations.js`
  - `assets/data/creatures.js`
  - `assets/data/timeline.js`
  - `assets/data/chapters.js`

**Travail**

- deplacer les jeux de donnees
- garder les fonctions de rendu au bon endroit
- eviter les dependances circulaires

**Verification**

- le contenu reste inchangé
- le code est plus lisible

**Priorite**

Critique

### DEV-05 - Normaliser les champs de donnees

**Objectif**

Avoir un schema clair par type de contenu.

**Fichiers cibles**

- modules de donnees
- `app.js`

**Travail**

- definir les champs minimums pour :
  - personnage
  - creature
  - lieu
  - evenement de chronologie
  - chapitre
- verifier les contenus existants
- combler les trous les plus critiques

**Verification**

- chaque type de contenu suit une structure stable

**Priorite**

Haute

---

## LOT 3 - Pipeline de mise a jour par chapitre

### DEV-06 - Ecrire une checklist standard d'integration de chapitre

**Objectif**

Ne plus improviser les mises a jour de lore.

**Fichiers cibles**

- nouveau fichier recommande :
  - `CHECKLIST-MAJ-CHAPITRE-PANDORUS.md`

**Travail**

- formaliser les etapes obligatoires :
  - copie du PDF
  - mise a jour des chapitres
  - chronologie
  - personnages
  - relations
  - lieux
  - creatures
  - mysteres
  - liens contextuels
  - verification visuelle

**Verification**

- la checklist permet a une personne externe de suivre le meme process

**Priorite**

Critique

### DEV-07 - Ajouter un statut de completion par section

**Objectif**

Verifier qu'une mise a jour est complete.

**Fichiers cibles**

- checklist
- eventuellement donnees de chapitre

**Travail**

- definir pour chaque chapitre si la section est :
  - faite
  - non applicable
  - a verifier

**Verification**

- chaque mise a jour laisse une trace claire de ce qui a ete traite

**Priorite**

Haute

---

## LOT 4 - Navigation et exploration

### DEV-08 - Renforcer les blocs contextuels de fin de fiche

**Objectif**

Mieux orienter le lecteur apres la lecture d'une fiche.

**Fichiers cibles**

- `app.js`
- `style.css`

**Travail**

- standardiser les sorties de fiche :
  - voir le lieu
  - voir les relations
  - voir la chronologie
  - voir le chapitre ou l'evenement important

**Verification**

- un lecteur trouve toujours ou aller ensuite

**Priorite**

Haute

### DEV-09 - Repenser la section Relations comme hub de navigation

**Objectif**

Donner a `Relations` un role central, pas accessoire.

**Fichiers cibles**

- `app.js`
- `style.css`

**Travail**

- clarifier les types de liens
- renforcer les appels vers fiches et lieux
- mieux distinguer :
  - alliés
  - menaces
  - mémoires
  - souverainetés

**Verification**

- la section devient utile même en lecture rapide

**Priorite**

Haute

### DEV-10 - Ajouter des reperes dans les sections longues

**Objectif**

Eviter l'effet de grande page compacte.

**Fichiers cibles**

- `index.html`
- `app.js`
- `style.css`

**Travail**

- mini sommaires
- ancres internes
- reperes de progression

**Verification**

- les grandes sections deviennent plus faciles a parcourir

**Priorite**

Moyenne

---

## LOT 5 - Design system et finitions

### DEV-11 - Normaliser les cartes et panneaux

**Objectif**

Donner un systeme commun aux composants de contenu.

**Fichiers cibles**

- `style.css`
- `index.html`
- `app.js`

**Travail**

- definir familles de cartes
- harmoniser paddings, bordures, ombres, meta

**Verification**

- les cartes paraissent appartenir a la meme famille

**Priorite**

Moyenne

### DEV-12 - Revoir la home comme page d'aiguillage

**Objectif**

Ajouter une vraie valeur fonctionnelle a l'accueil.

**Fichiers cibles**

- `index.html`
- `style.css`

**Travail**

- parcours d'entree
- meilleure hierarchie
- meilleure orientation

**Verification**

- un nouveau lecteur sait par ou commencer

**Priorite**

Haute

---

## LOT 6 - Refactor technique

### DEV-13 - Decouper `app.js` par responsabilites

**Objectif**

Rendre le fichier principal plus lisible.

**Fichiers cibles**

- `app.js`
- nouveaux fichiers recommandes :
  - `assets/js/navigation.js`
  - `assets/js/render-fiches.js`
  - `assets/js/render-timeline.js`
  - `assets/js/render-relations.js`
  - `assets/js/lore-links.js`

**Travail**

- sortir les grandes familles de fonctions
- garder une initialisation simple

**Verification**

- le comportement reste stable
- le debuggage devient plus simple

**Priorite**

Haute

### DEV-14 - Nettoyer les fichiers temporaires et la maintenance locale

**Objectif**

Reduire le bruit de travail.

**Fichiers cibles**

- `.gitignore`
- organisation locale

**Travail**

- ignorer proprement les fichiers d'extraction de chapitres
- documenter les fichiers de travail non publiables

**Verification**

- `git status` devient plus lisible

**Priorite**

Haute

---

## 5. Premier sprint recommande

Si on doit lancer la production maintenant, le meilleur premier sprint est :

### Sprint 1 - Narratif + maintenance

1. DEV-01
2. DEV-02
3. DEV-06
4. DEV-14

Pourquoi :

- forte valeur immediate pour le lecteur
- baisse du risque d'oublis futurs
- faible conflit avec une future refonte visuelle

---

## 6. Deuxieme sprint recommande

### Sprint 2 - Architecture de donnees

1. DEV-03
2. DEV-04
3. DEV-05
4. DEV-07

Pourquoi :

- c'est le socle de croissance du projet
- tout ce qui vient ensuite devient plus simple

---

## 7. Troisieme sprint recommande

### Sprint 3 - Navigation utile

1. DEV-08
2. DEV-09
3. DEV-10
4. DEV-12

Pourquoi :

- meilleure exploration
- meilleure comprehension
- meilleure valeur percue

---

## 8. Definition du "fait"

Une tache n'est consideree comme terminee que si :

- le contenu est coherent
- le rendu est stable
- la verification syntaxique passe
- la navigation liee n'est pas cassée
- la mise a jour est visible dans le site

---

## 9. Recommandation developpeur

Le meilleur point d'entree de production n'est pas la refonte visuelle.

Le meilleur point d'entree est :

1. clarifier les fiches
2. fiabiliser le pipeline chapitre
3. decomposer les donnees

Une fois cela fait, le site pourra grandir plus vite, mieux, et avec moins de fatigue de maintenance.
