const header = document.getElementById('header');

window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    (scrollPos > 0) ? header.classList.add('default') : header.classList.remove('default');
}

const body = document.body;

const menu = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__navigation');

menu.addEventListener('click', function() {
	this.classList.toggle('active');
	navigation.classList.toggle('active');
	body.classList.toggle('lock');
});