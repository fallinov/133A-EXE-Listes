/**
 * Exercice Liste - étape 2
 *
 * Sur click du bouton "Ajouter" :
 *
 *     1. Valider que le champs texte n'est pas vide. S'il est vide afficher
 *        "Entrez un article !" dans une alert et terminer le script.
 *     2. Récupérer le texte entré par l’utilisateur et l’ajouter comme
 *        nouvel élément <li> à la fin de la liste.
 *     3. Vider le champ texte
 *
 * Contraintes :
 *     - Interdiction de modifier le document HTML
 *     - Utiliser les méthodes createElement() et  appendChild() pour créer
 *       et ajouter des éléments à la liste.
 *
 * ----------------------------------------------------------------------------
 *
 * Exercice Liste - Etape 3
 *
 *    1. En JavaScript, ajouter un bouton "Supprimer" à la fin du paragraphe
 *       contenant le champ texte et le bouton "Ajouter".
 *
 *    2. Sur click du nouveau bouton "Supprimer" supprimer le dernier élément
 *       de la liste.
 *
 *    3. Ajouter un événement double click à la liste <ul> :
 *        1. Récupérer l'élément <li> double clické (target) dans la liste <ul>
 *        2. Supprimer l'élément <li> double clické
 *
 * Contraintes :
 *    - Interdiction de modifier le document HTML
 *    - Utiliser  cloneNode(false) pour créer le bouton supprimer en clonant
 *      le bouton ajouter, puis en modifiant la valeur du bouton.
 *    - Utiliser la méthode remove() pour supprimer des éléments
 *
 * @author      Steve Fallet <steve.fallet@divtec.ch>
 * @version     3
 * @since       2014-03-31
 *
 * http://usejsdoc.org/
 */

//Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function () {
    "use strict";

    const listeCommissions = document.getElementById('listecommissions');
    const txtCourse = document.getElementById('course');

    /**
     * Supprime l'élément qui a appelé la fonction
     * @param event informations sur l'événement
     */
    function btSupprimerElement(event) {
        // event.target permet de récupérer l'élément qui a déclenché l'événemnt
        // Ensuite on btSupprimer cet élément avec remove()
        event.target.remove();

        // Ancienne méthode avant l'existance de la méthode de remove()
        //event.target.parentNode.removeChild(event.target);
    }

    /**
     * Supprime le dernier <li> da la liste des commissions
     * Si la liste est vide affiche une alert
     */
    function btSupprimerDernierElement() {
        //Si il y a encore des éléments dans la liste
        if (listeCommissions.children.length) {
            // Supprime le dernier <li> de la liste
            // Attention de s'assurer que le dernier fils est un élément HTML
            listeCommissions.querySelector('li:last-child').remove();
        } else {
            alert("Liste vide !");
        }
    }

    /**
     * Test si une valeur correcte a été saisie, la récupère et l'ajoute à
     * la fin de la liste des commissions.
     */
    function listeAjoute() {
        //Si l'utilisateur n'a rien saisi
        if (txtCourse.value.trim().length === 0) {
            alert("Entrez un article !");
            return;
        }

        //Créer un nouvel élément <li>
        let newEle = document.createElement('li');

        //Ajouter le texte saisi comme contenu du <li>
        newEle.innerText = txtCourse.value.trim();

        //Ajouter l'élément <li> à la liste #listelisteCommissions
        listeCommissions.appendChild(newEle);

        //Vide le champ de saisie après l'ajout
        txtCourse.value = '';
    }

    //Récupère le bouton et "écoute" l'événement click et lui affecte la fonction listeChange
    const btAjouter = document.querySelector('input[type="button"]');
    btAjouter.addEventListener('click', listeAjoute);

    // Création d'un bouton supprimer en clonant le bouton Ajouter
    // Le paramètre false passé à cloneNode indique que l'on clone
    // uniquement son l'élément et pas son contenu
    const btSupprimer = btAjouter.cloneNode(false);
    btSupprimer.value = 'Supprimer';

    // Ajour de l'événement click
    btSupprimer.addEventListener('click', btSupprimerDernierElement);

    // Ajout du bouton supprimer à la fin du paragraphe
    document.querySelector('p').appendChild(btSupprimer);

    // Ajoute le double click à la liste
    // Le fait d'ajouter un événement à un élément l'ajoute automatiquement
    // à tous ses enfants, ici tous les <li> actuels et futurs
    listeCommissions.addEventListener('dblclick', btSupprimerElement);

}()); //Main IIFE
