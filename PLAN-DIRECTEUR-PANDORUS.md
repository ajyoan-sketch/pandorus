# Plan Directeur Pandorus

## Role du document

Ce document sert de pilotage global du projet `wiki-pandorus`.

Il ne remplace pas la roadmap UX/UI existante.
Il la complete avec une logique de chef de projet :

- vision d'ensemble
- ordre des chantiers
- dependances
- arbitrages
- criteres de priorisation
- definition de ce qui doit etre traite maintenant, ensuite, puis plus tard

---

## 1. Vision produit

Pandorus n'est plus seulement un site vitrine.
Le projet est en train de devenir une plateforme narrative d'univers :

- archive vivante
- outil d'exploration
- porte d'entree dans le lore
- systeme de navigation entre personnages, lieux, creatures, relations et chapitres

Le but n'est donc plus "ajouter des pages".
Le but est de faire grandir un univers sans perdre :

- la clarte
- la coherence
- l'emotion
- la maintenabilite

---

## 2. Probleme principal a resoudre

Le site ne souffre pas d'un manque de contenu.
Il souffre d'une croissance rapide.

Cela cree 3 risques majeurs :

1. Risque de lisibilite
Le lecteur peut admirer le site sans toujours comprendre ou regarder, par ou entrer, et ou en est exactement le récit.

2. Risque de coherence
Quand le lore avance vite, certaines sections peuvent etre mises a jour plus vite que d'autres.

3. Risque de maintenance
Plus le contenu augmente dans un fichier central, plus chaque nouveau chapitre devient couteux a integrer et facile a rater partiellement.

Conclusion :
la priorite du projet n'est pas de produire "plus".
La priorite est de rendre le "plus" durable.

---

## 3. Objectif directeur

Faire de Pandorus un site :

- plus lisible pour un nouveau lecteur
- plus fluide pour un lecteur regulier
- plus fiable a maintenir a chaque ajout de chapitre
- plus premium sans casser son identite artisanale et organique

---

## 4. Principes de pilotage

### Principe 1 - Ne pas casser l'ame du site

Pandorus a deja une identite forte.
Chaque evolution doit renforcer l'univers, pas le lisser.

### Principe 2 - Ne pas traiter le visuel avant la structure

Un embellissement sans clarification produit du bruit.
La structure narrative et la maintenance doivent passer avant la cosmétique de finition.

### Principe 3 - Prioriser les systemes, pas les exceptions

Chaque fois qu'un besoin revient plusieurs fois, il faut le traiter comme un systeme :

- statuts narratifs
- jours et nuits
- liens contextuels
- mise a jour par chapitre
- structure des fiches

### Principe 4 - Penser "ajout de chapitre" comme cas d'usage principal

Le site doit etre juge non seulement sur son apparence actuelle, mais sur sa capacite a absorber proprement les futurs chapitres.

---

## 5. Chantiers directeurs

Le projet doit etre mene selon 5 grands chantiers.

### Chantier A - Clarte narrative

But :
faire en sorte qu'un lecteur sache toujours :

- qui est ce personnage
- ou il en est
- a quel moment du récit cela correspond
- vers quoi aller ensuite

Cela inclut :

- harmonisation des timelines personnages
- alignement avec la chronologie centrale
- meilleure lisibilite des repères de jours, nuits et etapes

### Chantier B - Navigation et exploration

But :
transformer le site en systeme d'exploration fluide.

Cela inclut :

- liens contextuels
- passerelles entre sections
- parcours d'entree
- navigation secondaire
- relations plus structurantes

### Chantier C - Design system et premiumisation

But :
faire monter le niveau percu du site sans le denaturer.

Cela inclut :

- hierarchie visuelle
- coherence des composants
- etats interactifs
- respiration
- raffinements visuels

### Chantier D - Maintenance et architecture de donnees

But :
sortir d'une maintenance fragile.

Cela inclut :

- separation du contenu par familles
- logique de mise a jour par chapitre
- normalisation des statuts
- baisse de la dependance au gros fichier unique

### Chantier E - Robustesse technique

But :
garder un site stable, fluide et evolutif.

Cela inclut :

- responsive
- accessibilite
- performance
- refactor JS/CSS
- verification de coherences avant publication

---

## 6. Priorisation chef de projet

### Niveau 1 - Critique

Ce qui conditionne la suite du projet.

1. Structuration des donnees
Pourquoi :
si ce chantier n'est pas traite, chaque ajout narratif continuera a couter trop cher et a exposer le site aux oublis.

2. Alignement des fiches avec la chronologie
Pourquoi :
les personnages sont une porte d'entree majeure. Si leur état narratif n'est pas clair, l'experience globale se fragilise.

3. Parcours de lecture plus clair
Pourquoi :
le contenu est riche, donc il faut orienter. Sinon la valeur existe mais reste moins accessible.

### Niveau 2 - Important

Ce qui augmente fortement la qualite percue et la robustesse.

1. Design system
2. Uniformisation interactive
3. Navigation secondaire
4. Relations comme outil de navigation
5. Responsive mieux maitrise

### Niveau 3 - Premium

Ce qui enrichit l'experience une fois le socle assaini.

1. Finitions visuelles avancées
2. Parcours lecteur très travaillés
3. Distinction forte entre contenus majeurs et secondaires
4. Mise en avant dynamique des nouveautes

---

## 7. Ordre d'execution recommande

### Etape 1 - Stabiliser le narratif

Objectif :
faire en sorte que le site raconte clairement ce qu'il sait deja.

A faire :

- harmoniser les jours et nuits dans les fiches
- aligner toutes les timelines personnages sur la chronologie centrale
- ajouter les statuts narratifs de base

Livrable attendu :
les personnages deviennent lisibles comme systeme narratif.

### Etape 2 - Stabiliser la maintenance

Objectif :
faire en sorte qu'un nouveau chapitre puisse etre integre proprement.

A faire :

- sortir les donnees du gros bloc central par familles
- definir une structure standard pour personnage, lieu, creature, chapitre, chronologie
- documenter une checklist de mise a jour par chapitre

Livrable attendu :
un pipeline de mise a jour fiable.

### Etape 3 - Mieux orienter la lecture

Objectif :
faire du site un espace d'exploration mieux guide.

A faire :

- revoir la home comme porte d'entree
- renforcer les passerelles entre sections
- faire monter la valeur des relations
- ajouter des reperes internes dans les sections longues

Livrable attendu :
le lecteur ne se perd plus, il navigue.

### Etape 4 - Raffiner l'interface

Objectif :
faire monter la sensation premium.

A faire :

- design system
- typographie fonctionnelle
- respirations
- coherence des cartes
- stabilisation des etats interactifs

Livrable attendu :
un site plus mature visuellement, sans perdre Pandorus.

### Etape 5 - Consolider techniquement

Objectif :
eviter que le site ralentisse ou se fragilise a mesure qu'il grandit.

A faire :

- refactor JS
- refactor CSS
- nettoyage maintenance
- optimisation de medias
- verification responsive/accessibilite

Livrable attendu :
un socle capable de tenir la croissance.

---

## 8. Ce qu'il ne faut pas faire maintenant

Pour bien piloter, il faut aussi savoir ce qu'on reporte.

### A ne pas prioriser tout de suite

- refaire entierement le style du site
- ajouter de nouvelles grosses categories avant d'avoir stabilise la maintenance
- multiplier les animations premium
- complexifier la home si l'orientation de base n'est pas encore totalement claire
- empiler encore du contenu sans methode d'integration

Pourquoi :
ces actions donneraient l'impression d'avancer, mais augmenteraient la dette.

---

## 9. Indicateurs de succes

Le projet va dans la bonne direction si :

- un lecteur peut comprendre rapidement ou en est un personnage
- les sections se repondent mieux entre elles
- l'ajout d'un chapitre suit une logique stable
- le nombre d'oublis lors des mises a jour baisse fortement
- la home oriente mieux sans perdre son souffle
- le site reste beau mais devient plus facile a lire
- la maintenance devient plus sereine

---

## 10. Decision recommandee

En tant que pilotage global, la meilleure strategie est :

1. traiter d'abord la clarte narrative
2. traiter ensuite la maintenance et la structuration des donnees
3. seulement apres, raffiner plus largement le premium visuel

Pourquoi :
sur Pandorus, la vraie valeur est le monde.
Le meilleur investissement n'est donc pas uniquement de rendre le site plus beau.
C'est de rendre ce monde plus lisible, plus navigable et plus facile a faire evoluer.

---

## 11. Passage a l'etape suivante

Ce document correspond a l'etape "chef de projet".

L'etape suivante logique est :

- convertir ce plan en version "developpeur"
- decoupee en taches concretes
- classees par ordre d'execution
- avec fichiers cibles et verification attendue

Cela permettra de passer du pilotage a la production sans perdre la vision.
