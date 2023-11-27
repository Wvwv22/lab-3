/** @type HTMLElement */
function init(element) {
    const menuBtn = element.querySelector('.menu_btn')
    const menuList = element.querySelector('.menu_list')

    function toggleMenu() {
        menuBtn.classList.toggle('rotate')
        menuList.classList.toggle('hide')
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    });

    menuBtn.addEventListener('click', toggleMenu)
}

init(document.getElementById("top_block"))
init(document.getElementById("info"))
init(document.getElementById("portfolio"))