document.querySelectorAll('[navMenu]').forEach(value => {
    const content = document.querySelector(".content");

    value.onclick = function (e) {
        e.preventDefault();

        fetch(value.getAttribute('navMenu'))
            .then(resp => resp.text())
            .then(html => content.innerHTML = html)
    }
})