let list_item = [...document.querySelectorAll('[doc]')];

list_item.forEach(e => {
    e.onclick = () => {
        const ul = e.nextElementSibling;
        const d = ul.style.display;

        ul.style.display = d === 'none' ? 'block' : 'none';
    }
})