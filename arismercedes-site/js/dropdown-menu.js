/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("fullscreen-menu-activated");
	document.getElementById("drop-button").classList.toggle("close-nav");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.burger-nav'||'.close-nav')) {

    var dropdowns = document.getElementsByClassName("fullscreen-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('fullscreen-menu-activated')) {
        openDropdown.classList.remove('fullscreen-menu-activated');
		document.getElementById("drop-button").classList.remove('close-nav');
      }
    }
  }
}

