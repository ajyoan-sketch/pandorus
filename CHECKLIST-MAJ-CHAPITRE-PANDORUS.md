# Checklist Mise a Jour Chapitre Pandorus

## Role du document

Cette checklist sert a integrer un nouveau chapitre dans `wiki-pandorus` sans oublier de section.

Elle doit etre suivie a chaque ajout de chapitre, meme si le chapitre semble ne concerner qu'une petite partie du lore.

---

## 1. Sources a verifier

- verifier la presence du fichier source dans `Chapitres`
- verifier la presence du PDF dans `PDF Pandorus`
- verifier les nouveaux medias lies au chapitre :
  - personnages
  - lieux
  - creatures
  - cartes

Validation :

- le chapitre existe bien en version lisible
- les medias associes sont identifies avant l'integration

---

## 2. Integration du chapitre dans le site

- copier le PDF dans `media/chapitres`
- ajouter l'entree correspondante dans les donnees de chapitres
- verifier le titre exact
- verifier le chemin exact du PDF
- ecrire un resume court et propre

Validation :

- le chapitre est visible dans la section `Chapitres`
- le lien ouvre bien le bon PDF

---

## 3. Chronologie generale

- lire le chapitre
- identifier les nouveaux jalons narratifs
- ajouter les evenements dans la chronologie generale
- verifier l'ordre des evenements
- verifier les repères de temps :
  - jour
  - nuit
  - lendemain
  - apres

Validation :

- la chronologie centrale raconte bien ce qui se passe dans le nouveau chapitre
- les jours sont coherents avec les chapitres precedents

---

## 4. Fiches personnages

- identifier tous les personnages :
  - nouveaux
  - modifies
  - simplement evoques mais importants
- ajouter les nouvelles fiches si besoin
- enrichir les fiches existantes :
  - biographie
  - resume
  - relations
  - timeline
- verifier que la timeline repond clairement a :
  - que se passe-t-il pour ce personnage a ce moment-la ?

Validation :

- aucune figure importante du chapitre n'est absente des fiches
- les timelines personnages sont alignees avec la chronologie centrale

---

## 5. Relations

- identifier les nouveaux liens entre personnages
- verifier les relations existantes impactees
- ajouter les miniatures manquantes si besoin
- verifier les liens depuis la section `Relations`

Validation :

- les relations racontent bien les nouvelles alliances, tensions, transmissions ou affrontements

---

## 6. Lieux

- identifier les lieux traverses, evoques ou reveles
- ajouter les nouveaux lieux si necessaire
- mettre a jour les fiches de lieux existantes
- verifier les images associees
- verifier les liens contextuels vers les lieux

Validation :

- chaque lieu important du chapitre existe ou a ete mis a jour
- les images du lieu s'affichent bien sur le site

---

## 7. Creatures

- identifier les creatures nouvelles
- verifier les creatures deja presentes mais enrichies par le chapitre
- ajouter les nouvelles fiches si besoin
- mettre a jour les timelines et descriptions

Validation :

- le bestiaire couvre toutes les creatures vraiment importantes du chapitre

---

## 8. Mysteres

- identifier les questions ouvertes creees ou renforcees par le chapitre
- mettre a jour la section `Mysteres` si besoin
- retirer ou reformuler un mystere si le chapitre a apporte une reponse claire

Validation :

- la section `Mysteres` reste a jour par rapport au récit

---

## 9. Liens contextuels

- verifier les liens automatiques dans les textes
- ajouter les nouveaux noms importants :
  - personnages
  - lieux
  - creatures
- verifier les redirections vers les bonnes fiches

Validation :

- les nouveaux noms importants sont bien cliquables
- les liens ne pointent pas vers la mauvaise fiche

---

## 10. Verification visuelle

- tester la section `Chapitres`
- tester la `Chronologie`
- ouvrir les fiches personnages modifiees
- ouvrir les lieux modifies
- ouvrir les creatures modifiees
- tester les relations mises a jour

Validation :

- aucun bloc vide
- aucune image manquante
- aucune section oubliee
- aucune incoherence visible dans l'ordre narratif

---

## 11. Verification technique

- verifier `git status`
- s'assurer que seuls les fichiers utiles sont suivis
- verifier la syntaxe JS si `app.js` a ete modifie
- verifier les chemins medias si de nouvelles images ont ete ajoutees

Validation :

- pas de fichier temporaire inutile dans le commit
- pas d'erreur de syntaxe

---

## 12. Publication

- faire le commit Git avec un message clair
- pousser sur GitHub
- deployer sur Vercel si le site visible a change

Validation :

- la version publiee correspond bien a la mise a jour faite localement

---

## Definition d'une mise a jour complete

Une mise a jour de chapitre est consideree complete si :

- le chapitre PDF est integre
- la chronologie est a jour
- les fiches personnages sont a jour
- les relations sont a jour
- les lieux sont a jour
- les creatures sont a jour
- les mysteres sont verifies
- les liens contextuels sont verifies
- le rendu visuel est controle
- le commit est propre
