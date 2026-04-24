# Roadmap UX/UI Pandorus

## Objectif

Structurer les prochaines evolutions UX/UI du site `wiki-pandorus` avec une logique de production exploitable par un developpeur front-end. Cette roadmap est issue d'un audit technique, ergonomique et visuel du site actuel.

## Vision

L'objectif n'est plus d'ajouter des elements de maniere ponctuelle, mais de faire evoluer le site vers un systeme plus maitrise :

- renforcer la clarte de lecture
- stabiliser la coherence visuelle
- fluidifier les parcours entre sections
- ameliorer la maintenabilite front-end
- conserver pleinement l'identite Pandorus

## Priorites globales

1. Stabiliser le design system
2. Clarifier la hierarchie visuelle de la home
3. Ajouter des passerelles UX entre sections
4. Uniformiser les comportements interactifs
5. Consolider responsive et accessibilite
6. Refactoriser progressivement le CSS et le JS
7. Structurer les donnees pour faciliter les mises a jour narratives

---

## Phase 1 - Stabilisation du socle

### UI-01 - Formaliser un mini design system

**Objectif**

Definir une base coherente pour tous les composants premium du site.

**Taches techniques**

- recenser les composants existants : cartes, panneaux, portraits, sceaux, boutons, onglets, miniatures
- identifier les styles communs et les styles dupliques
- definir une base commune pour :
  - padding
  - border-radius
  - ombres
  - bordures
  - hiarchie titre / texte / meta
  - hover / active / selected
- regrouper les styles repetitifs dans des classes ou groupes logiques

**Criteres d'acceptation**

- les composants similaires partagent une structure visuelle unifiee
- les variations sont volontaires et non accidentelles
- le CSS devient plus lisible sur les composants premium

**Priorite**

Critique

### UI-02 - Normaliser les tokens visuels

**Objectif**

Centraliser les valeurs de design recurrentes pour reduire la dispersion dans `style.css`.

**Taches techniques**

- creer ou consolider des variables CSS pour :
  - couleurs
  - espacements
  - rayons
  - ombres
  - transitions
  - opacites
- remplacer les valeurs isolees les plus recurrentes par des variables
- verifier la coherence des themes premium existants

**Criteres d'acceptation**

- les couleurs et espacements clefs sont piloter par variables
- les ajustements visuels deviennent plus simples a maintenir

**Priorite**

Critique

### UI-03 - Uniformiser les etats interactifs

**Objectif**

Assurer une lecture coherente des etats visuels sur tout le site.

**Taches techniques**

- harmoniser les etats :
  - actif
  - survol
  - selectionne
  - epingle
  - section courante
- verifier les cas dans :
  - navigation principale
  - onglets de fiches
  - miniatures du carrousel
  - cartes de relations
  - elements de la carte vivante

**Criteres d'acceptation**

- l'utilisateur reconnait immediatement les etats UI
- les composants interactifs ne changent pas de logique visuelle selon la section

**Priorite**

Haute

---

## Phase 2 - Clarification de la hierarchie visuelle

### UX-01 - Reprioriser la home

**Objectif**

Faire de l'accueil une page d'orientation claire, pas seulement une page d'immersion.

**Taches techniques**

- definir trois niveaux de lecture :
  - niveau 1 : entree principale
  - niveau 2 : orientation utilisateur
  - niveau 3 : enrichissement narratif
- reduire la concurrence entre les blocs premium
- revoir les masses visuelles et les alignements
- verifier les zones les plus fortes sur desktop et mobile

**Criteres d'acceptation**

- l'oeil sait quoi regarder en premier
- la home reste riche, mais plus lisible
- le parcours d'entree est plus evident

**Priorite**

Critique

### UX-02 - Revoir les respirations visuelles

**Objectif**

Diminuer la densite percue sans appauvrir l'univers.

**Taches techniques**

- auditer les marges et espacements entre blocs
- identifier les zones de superposition texte / texture / decor trop denses
- alleger les zones de lecture critique
- verifier la respiration verticale globale

**Criteres d'acceptation**

- la lecture gagne en confort
- les sections respirent mieux
- les blocs premium paraissent plus haut de gamme

**Priorite**

Haute

### UI-04 - Clarifier la typographie fonctionnelle

**Objectif**

Mieux distinguer les niveaux de texte selon leur role.

**Taches techniques**

- distinguer visuellement :
  - titre de section
  - titre de carte
  - texte d'ambiance
  - texte informatif
  - meta-information
- ajuster tailles, graisse, interlignage et contrastes
- verifier les zones longues de lecture

**Criteres d'acceptation**

- la page devient plus scannable
- les informations importantes emergent plus facilement

**Priorite**

Haute

---

## Phase 3 - Navigation et parcours utilisateur

### UX-03 - Ajouter des passerelles contextuelles entre sections

**Objectif**

Transformer la navigation en parcours d'exploration.

**Taches techniques**

- depuis une fiche personnage, ajouter des acces vers :
  - relations associees
  - chronologie associee
  - territoire associe
- depuis la chronologie, ajouter des liens vers les fiches concernees
- depuis les cartes, ajouter des acces vers les personnages ou forces lies
- definir un pattern visuel commun pour ces passerelles

**Criteres d'acceptation**

- l'utilisateur peut approfondir sans revenir au menu principal
- les sections dialoguent entre elles

**Priorite**

Critique

### UX-04 - Creer un parcours recommande sur la home

**Objectif**

Aider les nouveaux visiteurs a savoir par ou commencer.

**Taches techniques**

- ajouter 2 a 3 portes d'entree guidees
- definir des libelles clairs et editoriaux
- rendre ces chemins visibles sans casser l'esthetique actuelle

**Criteres d'acceptation**

- un visiteur novice comprend rapidement comment entrer dans l'univers
- la home gagne en utilite sans perdre son souffle narratif

**Priorite**

Haute

### UX-05 - Ajouter une navigation secondaire dans les sections longues

**Objectif**

Ameliorer la consultation des sections a fort volume de contenu.

**Taches techniques**

- identifier les sections longues : chronologie, mysteres, fiches riches
- ajouter ancres, mini-sommaires ou reperes internes
- tester la lisibilite desktop et mobile

**Criteres d'acceptation**

- l'utilisateur ne se sent pas perdu dans les longues pages
- la navigation interne devient plus efficace

**Priorite**

Moyenne

---

## Phase 4 - Robustesse interactionnelle

### FE-01 - Standardiser les patterns JS d'interface

**Objectif**

Fiabiliser les interactions et eviter une accumulation de logiques heterogenes dans `app.js`.

**Taches techniques**

- revoir les modules ou fonctions qui pilotent :
  - navigation hash
  - tabs de fiches
  - carrousel
  - miniatures
  - panneaux cartes
  - fiche epinglee
- harmoniser les conventions de nommage
- isoler les responsabilites quand c'est pertinent

**Criteres d'acceptation**

- la logique UI est plus lisible et plus previsible
- les futures evolutions generent moins de dette

**Priorite**

Haute

### A11Y-01 - Renforcer l'accessibilite des etats interactifs

**Objectif**

Ameliorer la robustesse d'usage pour clavier, focus et lecteurs d'ecran.

**Taches techniques**

- verifier et completer :
  - `aria-selected`
  - `aria-current`
  - `aria-controls`
  - roles utiles
- rendre le focus clavier explicite et coherent
- verifier les composants cliquables non standard

**Criteres d'acceptation**

- les elements navigables ont un etat focus visible
- les principales interactions restent comprehensibles sans souris

**Priorite**

Haute

### FE-02 - Stabiliser les comportements responsive

**Objectif**

Passer d'un responsive "present" a un responsive "maitrise".

**Taches techniques**

- tester la home, les cartes, les relations et la chronologie sur plusieurs largeurs
- corriger les collisions decor / texte
- revoir les zones de densite excessive
- s'assurer que l'ordre de lecture reste logique sur mobile

**Criteres d'acceptation**

- aucune section cle ne parait compressee ou desequilibree sur mobile
- l'experience reste coherente sur petit et grand ecran

**Priorite**

Critique

---

## Phase 5 - Qualite percue et finition premium

### UI-05 - Reduire le bruit decoratif la ou il nuit a la lecture

**Objectif**

Conserver l'identite visuelle forte sans penaliser la lecture fonctionnelle.

**Taches techniques**

- identifier les zones ou les textures ou halos perturbent le texte
- alleger ces zones de facon ciblee
- conserver les effets forts dans les zones d'ambiance ou de transition

**Criteres d'acceptation**

- la lecture gagne en nettete
- l'identite Pandorus reste intacte

**Priorite**

Moyenne

### UI-06 - Stabiliser les familles de cartes premium

**Objectif**

Donner une structure systemique aux cartes du site.

**Taches techniques**

- formaliser 4 familles :
  - portrait
  - archive
  - mystere
  - navigation
- definir pour chacune une structure stable
- aligner les sections sur ce systeme

**Criteres d'acceptation**

- les cartes paraissent plus coherentes entre sections
- les differences sont percues comme intentionnelles

**Priorite**

Moyenne

### UX-06 - Mettre en place une hierarchie d'importance du contenu

**Objectif**

Eviter que tous les elements narratifs aient le meme poids percu.

**Taches techniques**

- distinguer visuellement :
  - personnages majeurs
  - personnages secondaires
  - forces du monde
  - contenus speciaux
- ajuster tailles, contrastes, dimensions et placement

**Criteres d'acceptation**

- les contenus centraux emergent naturellement
- la lecture de l'univers devient plus intuitive

**Priorite**

Moyenne

---

## Phase 6 - Dette technique et evolutivite

### FE-03 - Refactoriser progressivement le CSS

**Objectif**

Rendre `style.css` plus maintenable a mesure que le site grandit.

**Taches techniques**

- regrouper le CSS par sections ou familles de composants
- eliminer les duplications de declarations
- commenter les zones complexes quand utile
- revoir les blocs premium pour mutualisation

**Criteres d'acceptation**

- le CSS devient plus facile a relire et modifier
- les regressions sont moins probables

**Priorite**

Haute

### FE-04 - Refactoriser les rendus dynamiques dans le JS

**Objectif**

Preparer le site a une croissance de contenu sans faire exploser la complexite du fichier principal.

**Taches techniques**

- isoler les responsabilites :
  - navigation
  - fiches
  - chronologie
  - relations
  - cartes
- clarifier les zones de rendu dynamique
- reduire les dependances implicites entre composants

**Criteres d'acceptation**

- `app.js` devient plus modulaire dans sa logique
- les futures evolutions sont plus simples a integrer

**Priorite**

Haute

### FE-05 - Verifier la performance percue

**Objectif**

Preserver la fluidite malgre l'enrichissement visuel.

**Taches techniques**

- verifier le poids des images
- auditer les animations simultanees
- surveiller la fluidite du carrousel et des transitions
- optimiser si besoin les medias trop lourds

**Criteres d'acceptation**

- le site reste fluide sur machine standard
- les effets ne degradent pas le confort de navigation

**Priorite**

Moyenne

### FE-06 - Structurer les donnees de contenu

**Objectif**

Sortir d'une logique ou tout le contenu narratif est maintenu dans un seul gros fichier JS, afin de rendre les ajouts de chapitres plus fiables, plus rapides et moins oublies.

**Taches techniques**

- separer les donnees par familles :
  - personnages
  - creatures
  - lieux
  - chronologie
  - chapitres
  - relations
- definir une structure de donnees stable pour chaque famille
- isoler les donnees du rendu d'interface
- verifier que chaque fiche peut etre enrichie sans toucher a toute la logique du site

**Criteres d'acceptation**

- les ajouts de contenu ne demandent plus de fouiller l'ensemble de `app.js`
- la maintenance devient plus sure lors de l'ajout de nouveaux chapitres
- les oublis entre categories deviennent beaucoup moins probables

**Priorite**

Critique

### FE-07 - Mettre en place une logique de mise a jour par chapitre

**Objectif**

Faire en sorte qu'un nouveau chapitre puisse etre integre avec une methode claire, repetable et verifiable.

**Taches techniques**

- definir une checklist d'integration pour chaque nouveau chapitre :
  - chapitre PDF
  - chronologie
  - fiches personnages
  - relations
  - lieux
  - creatures
  - mysteres
  - liens contextuels
- documenter la procedure dans le projet
- identifier les champs minimums a renseigner pour qu'une mise a jour soit consideree complete
- prevoir une verification finale orientee contenu

**Criteres d'acceptation**

- chaque nouveau chapitre suit le meme pipeline de mise a jour
- le risque d'oublier une section diminue fortement
- la maintenance editoriale devient beaucoup plus professionnelle

**Priorite**

Critique

### FE-08 - Introduire des statuts narratifs normalises

**Objectif**

Rendre les fiches plus lisibles et plus faciles a maintenir en standardisant l'etat narratif des personnages, lieux et creatures.

**Taches techniques**

- definir une liste restreinte de statuts :
  - actif
  - evoque
  - disparu
  - captif
  - en veille
  - a venir
- appliquer ces statuts dans les fiches principales
- reutiliser ces valeurs dans :
  - fiches
  - relations
  - chronologie
  - futurs filtres

**Criteres d'acceptation**

- l'etat d'un personnage ou d'un lieu est compris rapidement
- la coherence editoriale progresse
- les futures evolutions peuvent s'appuyer sur des champs stables

**Priorite**

Haute

---

## Phase 7 - Clarte narrative et parcours de lecture

### UX-08 - Aligner toutes les timelines personnages sur la chronologie centrale

**Objectif**

Faire des fiches personnages un miroir exact, lisible et verifiable de la chronologie du récit.

**Taches techniques**

- harmoniser les labels temporels :
  - jour
  - nuit
  - lendemain
  - apres
- verifier les derniers jalons de chaque personnage actif
- eviter les formulations vagues quand un jour precis peut etre donne
- assurer la coherence entre fiche personnage et chronologie generale

**Criteres d'acceptation**

- on peut répondre clairement a des questions du type :
  - "que se passe-t-il pour Ezze au jour 11 ?"
  - "ou en est Shan au jour 12 ?"
- les fiches ne flottent plus par rapport au récit principal

**Priorite**

Critique

---

## Ordre d'execution recommande

1. UI-01
2. UI-02
3. UI-03
4. UX-01
5. FE-02
6. UX-03
7. FE-01
8. A11Y-01
9. FE-03
10. FE-04
11. FE-06
12. FE-07
13. UX-08
14. UI-04
15. UI-05
16. UI-06
17. UX-04
18. UX-05
19. UX-06
20. FE-05
21. FE-08

## Definition du succes

La roadmap sera consideree comme bien executee si :

- la home est plus lisible sans perdre son identite
- les sections communiquent mieux entre elles
- les composants premium suivent des regles stables
- les comportements interactifs sont coherents
- le mobile est propre et lisible
- le CSS et le JS deviennent plus maintenables
- l'ajout d'un nouveau chapitre suit une methode fiable et repetable
- les fiches permettent de savoir rapidement ou en est chaque personnage
- le site conserve l'ame Pandorus tout en gagnant en maturite produit
