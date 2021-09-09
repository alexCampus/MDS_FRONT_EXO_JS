## Ex 3 - Manipuler des objets et tableaux
Nous allons manipuler un objet regroupant l'ensemble des villes de France.

### Etape 1

1. Affichez dans la console le nom et la population des communes de plus de 300 000 habitants, sous la forme: "nom (population)".


2. Affichez les dans l'ordre décroissant. Voir [Array.sort sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)

### Etape 2

Il est important, pour la clarté du code, de créer des petites fonctions autonomes qui ne font qu'une chose mais bien.

Nous allons donc commencer par extraire la partie qui parcourt la liste filtrée.

1. Écrivez une fonction getCitiesByDept qui prend en paramètre un code de département et retourne un tableau avec uniquement les communes de ce département


2. Utilisez cette fonction pour afficher dans la console le nom des villes de l'Isère

   [Array.filter sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)

   [Array.forEach sur MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/forEach)


3. Écrivez une fonction displayCity qui prend en paramètre les données d'une commune, c'est à dire un élément du tableau cities ou getCitiesByDept, et retourne sous forme de chaîne de
   caractères "xx - nom de la ville".


4. En utilisant les fonctions précédentes, affichez la liste de villes de l'Isère dans la console.

### Etape 3

1. Écrivez une fonction getCityByName qui retourne les infos sur une ville à partir de son nom


2. Afficher les infos pour Grenoble

### Etape 4

1. A partir du code précédemment fait, afficher sur la page html la liste des villes de l'isère


2. Permettre la modification de l'affichage grâce à un champ texte qui récupère le département souhaité