// Class schedule tabs (Danzas, Teatro Musical, Teatro).
// Called from the onclick of each .tab-button with the id of the .tab-panel it opens.
function openClassTab(event, tabId) {
    var i, tabPanels, tabButtons;

    // Hide every tab panel
    tabPanels = document.getElementsByClassName("tab-panel");
    for (i = 0; i < tabPanels.length; i++) {
      tabPanels[i].style.display = "none";
    }

    // Remove the "active" class from every tab button
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Show the selected panel and mark the clicked button as active
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
  }
