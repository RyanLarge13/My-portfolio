const toggleNav = () => {
	const nav = document.querySelector(".menu");
	nav.classList.toggle("open")
}

document.querySelector(".icon-menu").addEventListener("click", toggleNav);
