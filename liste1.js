/**
 * Exercice Liste - étape 1
 *
 * Sur click du bouton "Changer le contenu de la liste" :
 *
 *     1. Changer le style CSS de la liste, list-style-type, en carré : square
 *
 *     2. Remplacer le texte de tous les éléments de la liste par « CLICK ME n »
 *        n remprésentant la position de l'élément dans la liste : 1, 2, 3, ...
 *
 *     3. Affecter un évènement click à tous les éléments de la liste qui
 *        ouvrira une fenêtre d’avertissement (alert) affichant le contenu de
 *        de l'élément cliqué.
 *
 * Contraintes :
 *
 *     - Interdiction de modifier le code du document HTML
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

    /**
     * Ouvre un alert affichant le contenu HTML de l'élément qui a appelé la
     * fonction bonjour.
     *
     * @param e déclencheur de l'événement : l'objet qui a appelé la fonction
     */
    function bonjour(e) {
        console.log(e);
        alert(e.target.innerHTML);
    }

    /**
     * Récupère tous les <li> du document HTML et :
     *
     *     - change le style de leur puces en carré
     *     - remplace leur contenu HTML par "CLICK ME 1, CLICK ME 2, ..."
     *     - affecte un événement click qui appelle la fonction bonjour
     */
    function listeChange() {
        /*
        La méthode element.getElementsByTagName('nomBalise') retourne une liste,
        tableau, de tous les éléments avec cette balise.

        La recherche porte sur le sous-arbre de l'élément spécifié,
        à l'exception de cet élément lui-même.

        La liste retournée est live, c'est à dire qu'elle se met à jour automatiquement
        à chaque changement de l'arbre DOM.
        Par conséquent, il n'est pas nécessaire d'appeller plusieurs fois
        Element.getElementsByTagName().
        */
        let listeElements = document.getElementsByTagName('li');
        //console.log(listeElements);

        for(let i=0; i < listeElements.length; i++) {
            //Change le type de la puce du <li> par un carré
            listeElements[i].style.listStyleType = 'square';

            //Remplace le contenu du <li>
            listeElements[i].innerHTML = 'CLICK ME ' + (i+1);

            //Ecoute l'événement click sur le <li> et lui affecte la fonction bonjour
            listeElements[i].addEventListener('click', bonjour);
            //Même chose en optimisant le code : listeElements[i].addEventListener('click',() => alert("bonjour"));
        }
    }

    //Récupère le bouton et "écoute" l'événement click et lui affecte la fonction listeChange
    let a = document.querySelector('input[type="button"]').addEventListener('click', listeChange);

    a,onclick(alert("ok"))

}()); //Main IIFE
