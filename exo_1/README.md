## Ex 1 - Un petit jeu

Vous allez programmer la logique du jeu Pierre, Feuille, Ciseau. Vous jouerez contre l'ordinateur. Pour se souvenir des [règles, cliquer ici](https://www.pierrefeuilleciseaux.fr/pierre-feuille-ciseaux-les-regles-classiques/).

Notre code va se décomposer en 4 parties :

- Récupérer le choix de l'utilisateur

- Récupérer le choix du programme

- Comparer les choix

- Annoncer le gagnant

1. Créer une variable `let playerInput = prompt("Your choice ( rock, paper, scissors) ?")` correspondant au choix de l'utilisateur.


2. Créer une fonction `getPlayerChoice()` qui prend en paramètre un seul argument `playerInput`


3. Puisque nous ne pouvons pas être certains que l'utilisateur va taper 'Rock' ou 'rock', nous devons être insensibles à la casse : nous allons dans un premier temps utiliser la fonction [`toLowerCase()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase) pour transformer en minuscules la chaine de caractères `playerInput`.


4. Nous devons aussi nous assurer que l'utilisateur rentre bien un des trois choix : 'rock', 'paper', ou 'scissors'.
   A l'intérieur de la fonction `getPlayerChoice()`, écrire une condition qui vérifie que la valeur entrée par l'utilisateur est bien l'une de ces trois valeurs attendues. Si c'est le cas, la fonction retourne la chaine de caractères `playerInput`, sinon afficher un message d'erreur dans la console.


5. C'est maintenant à l'ordinateur de faire un choix.
   Créer une nouvelle fonction `getComputerChoice()` qui ne prend pas de paramètre.
   A l'intérieur, en utilisant la fonction [`Math.random()`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random), tirer un nombre aléatoire entre 0 et 2 inclus : [0;2]. Suivant le résultat, la fonction doit retourner une valeur parmi {'rock', 'paper', 'scissors'}.

Maintenant, nous devons déterminer le gagnant.

6. Créer une fonction `findWinner()` qui prend deux paramètres, `playerChoice` et `computerChoice`.

Cette fonction va comparer les choix et va retourner un de ces 3 résultats :

- Tied : égalité

- Won : l'utilisateur a gagné

- Lost : l'utilisateur a perdu

7. Cas d'égalité.
   A l'intérieur de la fonction `findWinner()`, écrire une condition qui vérifie si le choix de l'utilisateur est égal à celui de l'ordinateur. Si c'est le cas, retourner la chaîne de caractères 'Tied'.


8. Si ce n'est pas une égalité alors quelqu'un a gagné. Commencer par vérifier si `playerChoice` est `rock`. A l'intérieur de cette condition, vérifier si le choix de l'ordinateur est 'scissors'. Si oui, alors retourner 'Won' ; sinon retourner 'Lost'.


9. Ensuite, écrire une nouvelle condition pour déterminer si le choix de l'utilisateur est 'paper'. À l'intérieur de cette condition, en fonction du choix de l'ordinateur, retourner une valeur parmi {'Lost', 'Won'}.


10. Traiter maintenant le cas où l'utilisateur a choisi 'scissors'.


11. Nos fonctions sont prêtes, nous pouvons maintenant commencer le jeu.
    Créer une fonction `playGame()` à l'intérieur de laquelle créer une variable `uChoice` qui prend pour valeur le résultat de la fonction `getPlayerChoice()` ; ajouter l'argument de votre choix : 'rock', 'paper', ou 'scissors'.
    Récupérer le résultat de l'appel de fonction `getComputerChoice()` dans une autre variable : `computerChoice`.
    Afficher chacune de ces variables dans la console.


12. Affichons maintenant le vainqueur.
    A l'intérieur de la fonction `playGame()`, appeller la fonction `findWinner()` avec en paramètre les variables `uChoice` et `computerChoice`. Pour connaitre le vainqueur vous devez mettre l'appel de la fonction à l'intérieur d'un `console.log()`.
    Maintenant appeler la fonction `playGame()`


13. On va ajouter un petit code secret (cheat code) afin d'être certain de gagner dans tous les cas : si l'utilisateur entre 'bomb' alors il a gagné. Modifier votre code en fonction.

