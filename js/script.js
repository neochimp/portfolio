let navOpen = false;

// Closes menu when clicking outside
window.addEventListener('click', function(e) {
	const menuBtn = document.getElementById("menuBtn");
	const mobileMenu = document.getElementById("mobileMenu");

	if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target) && navOpen) {
		menuIconAnim(menuBtn);
	}
});

// Toggle hamburger animation + open/close mobile menu
function menuIconAnim(x) {
	x.classList.toggle("change");
	openNav();
}

function openNav() {
	const mobileMenu = document.getElementById("mobileMenu");
	if (navOpen) {
		mobileMenu.classList.remove("open");
		navOpen = false;
	} else {
		mobileMenu.classList.add("open");
		navOpen = true;
	}
}
