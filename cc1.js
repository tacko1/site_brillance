/* ============================================================
   FICHIER : script.js
   RÔLE    : Gérer les interactions de la page :
             - Ouvrir la modale au clic sur un produit
             - Fermer la modale
============================================================ */


/* =====================
   POUR OUVRIR LA FENETRE MODALE
   Cette fonction est appelée depuis le HTML quand on
   clique sur un produit : onclick="ouvrirModal(...)"
   Elle reçoit les 4 informations sur le produit cliqué.
===================== */
function ouvrirModal(nom, prix, description, imageUrl) {

  /* On récupère chaque élément de la modale par son id
     et on le remplit avec les informations du produit */
  document.getElementById('modal-nom').textContent  = nom;
  document.getElementById('modal-prix').textContent = prix;
  document.getElementById('modal-desc').textContent = description;
  document.getElementById('modal-image').src        = imageUrl;
  document.getElementById('modal-image').alt        = nom;

  /* On affiche la modale en ajoutant la classe CSS "active"
     (dans style.css, .modal.active { display: flex; }) */
  document.getElementById('modal').classList.add('active');
}


/* =====================
   POUR FERMER LA MODALE
   (appelée par le bouton X)
===================== */
function fermerModal() {

  /* On retire la classe "active" pour cacher la modale */
  document.getElementById('modal').classList.remove('active');
}


