function openTab(evt, tabName) {
    // Déclaration des variables
    var i, tabcontent, tablinks;
  
    // Cache tous les contenus des onglets
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Désélectionne tous les boutons des onglets
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Affiche le contenu de l'onglet sélectionné et met en surbrillance le bouton correspondant
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Affiche le premier onglet par défaut
  document.getElementById("defaultOpen").click();