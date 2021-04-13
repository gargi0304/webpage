window.onload = () => {
    const page_switch = document.querySelector('[data-switcher]');

    for (let i = 0; i < page_switch.length; i++) {
        const page_switches = page_switch[i];
        const page_id = page_switches.dataset.tab;

        page_switches.addEventListener('click', () => {
            document.querySelector('.navbar__menu .navbar__item').classList.remove('navbar__item');
            page_switches.parentNode.classList.add('navbar__item');

            SwitchPage(page_id); 

        });


    }

}

function SwitchPage (page_id) {
    console.log(page_id);
    const current_page = document.querySelector('.pages .page.navbar__item');
    current_page.classList.remove('navbar__item');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('navbar__item');

}
