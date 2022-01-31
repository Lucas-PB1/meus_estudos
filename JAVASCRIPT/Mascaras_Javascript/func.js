window.onload = () => {
    var num = document.getElementById('txt');
    var err = document.getElementById('erro');

    num.addEventListener('change', () => {
        if (!maskphone(num)) {
            err.style.display = 'block';
        } else {
            err.style.display = 'none';
        }

        console.log(num.value);
    })
}
function maskphone(num) {

    var atual = num.value.replace(' ', '');
    atual = atual.replace(')', '');
    atual = atual.replace('(', '');
    atual = atual.replace('-', '');

    if (atual.length < 10 || atual.length > 11) {
        console.log('Erro de tamanho');
        return false;
    }
    if (!isNaN(parseFloat(atual)) && isFinite(atual)) {
        // Code
    } else {
        console.log('Erro de string');
        return false;
    }
    num.value = troca(atual);

    return true;
}

function troca(value) {
    if (value.length == 10) {
        value = value.replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length == 11) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    }

    return value;
}