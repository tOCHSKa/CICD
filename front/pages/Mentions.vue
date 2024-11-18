<template>
    <div class="content">
      <NavigationBar />
      <h1>Les Malédictions Légales</h1>
  
      <h2>Mentions Légales</h2>
  
      <h3>1. Éditeur du site</h3>

        Le présent site internet Chills est édité par :
        <ul>
          <li>Nom de l'entreprise : Chillsenterprise</li>
          <li>Forme juridique : Société à responsabilité limitée (SARL)</li>
          <li>Capital social : 1€</li>
          <li>Siège social : 19 rue des écoles 59512 Roubaix</li>
          <li>Numéro d'immatriculation : 01054789625</li>
          <li>Numéro de TVA intracommunautaire : 8196271</li>
          <li>Directeur de la publication : Krueger Freddy</li>
          <li>Email de contact : Fredkrueger@gmail.com</li>
          <li>Numéro de téléphone : 010102030405</li>
        </ul>
  
      <h3>2. Hébergement</h3>

        Le site internet est hébergé par :
        <ul>
          <li>Nom de l'hébergeur : Ionos</li>
          <li>Adresse de l'hébergeur : 12 rue de Paris, 75000 Paris</li>
          <li>Numéro de téléphone de l'hébergeur : 0103050408</li>
        </ul>

  
      <h3>3. Propriété intellectuelle</h3>
      <p>
        Tous les contenus présents sur le site Chills, y compris les films, vidéos, textes, graphiques, logos, icônes, images, et tout autre contenu,
        sont la propriété exclusive de Chillsenterprise ou de ses partenaires. Toute reproduction, distribution, modification ou exploitation de ces contenus sans autorisation
        écrite est strictement interdite et peut entraîner des poursuites judiciaires.
      </p>
  
      <h3>4. Protection des données personnelles</h3>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD), les données personnelles collectées sur le site Chills font l'objet d'un traitement destiné
        à la gestion du compte.
        Les informations recueillies sont strictement confidentielles et ne sont en aucun cas divulguées à des tiers sans le consentement préalable de l'Utilisateur.
        Vous disposez d'un droit d'accès, de modification et de suppression des données vous concernant en nous contactant à l'adresse suivante :
        <strong>suppressionchills@gmail.com</strong>
      </p>
  
      <h3>5. Utilisation des cookies</h3>
      <p>
        Le site Chills utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visite. En naviguant sur ce site, vous acceptez
        l’utilisation de cookies conformément à notre [Politique de gestion des cookies]. Vous pouvez à tout moment désactiver les cookies dans les paramètres
        de votre navigateur.
      </p>
  
      <h3>6. Limitation de responsabilité</h3>
      <p>
        Le site Chills s'efforce de fournir des informations aussi exactes que possible, mais ne saurait garantir l'exactitude, la complétude ou l'actualité des informations diffusées
        sur le site. En conséquence, l'éditeur du site ne pourra être tenu responsable des omissions, inexactitudes, et carences dans la mise à jour des informations,
        qu'elles soient de son fait ou du fait des tiers partenaires.
        Le site peut contenir des liens hypertextes vers d'autres sites, mais n'assume aucune responsabilité quant au contenu ou à l'accessibilité de ces sites externes.
      </p>
  
      <h3>7. Droit applicable et juridiction compétente</h3>
      <p>
        Les présentes mentions légales sont régies par la législation [française ou autre] en vigueur. En cas de litige et à défaut de résolution amiable,
        les tribunaux de [Ville] seront seuls compétents pour traiter tout litige lié à l'utilisation du site.
      </p>
  
      <Footer />
    </div>
  </template>
  
  <script>
  export default {
    name: "MentionsLegales",
  };
  </script>
  
  <style scoped>
  .content {
    background-color: black;
    padding: 0px 30px;
    color: white;
    font-family: var(--fontFamilyAndale);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-family: var(--fontFamilyImpact);
  }
  
  h2 {
    font-family: var(--fontFamilyImpact);
    margin-top: 30px;
  }
  
  h3 {
    margin-top: 20px;
  }
  
  ul {
    margin-left: 20px;
  }
  
  li {
    margin: 5px 0;
  }
  </style>
  