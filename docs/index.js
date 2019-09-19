var navBar = document.querySelector(".my-navbar");

var navLink = document.querySelectorAll('.nav-link');

var sections = document.querySelectorAll('section');

var collapse = document.querySelector('.navbar-toggler');

var navBarCollapse = document.querySelector('.navbar-collapse');

pageYOffset > 50 && navBar.classList.add('header');

window.addEventListener('scroll', () => {
    if (pageYOffset > 50) {
        navBar.classList.add('header')
    }
    else {
        navBar.classList.remove('header')
    }
    for (let i = 0; i < navLink.length; i++) {
        let link = navLink[i]
        let offsetTop = sections[i + 1].offsetTop - 300;
        let offsetBot = offsetTop + sections[i + 1].offsetHeight;
        if (pageYOffset >= offsetTop && pageYOffset <= offsetBot) {
            link.classList.add('current');
        }
        else navLink[i].classList.remove('current');
    }
})

for (let i = 0; i < navLink.length; i++) {
    let link = navLink[i];
    let offsetTop = sections[i + 1].offsetTop -100;
    link.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        collapse.setAttribute('aria-expanded', 'false');
        collapse.classList.add('collapsed');
        navBarCollapse.classList.remove('show');
    });
}


