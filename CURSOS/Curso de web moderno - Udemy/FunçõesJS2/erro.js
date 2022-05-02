try {
    console.log(teste);
} catch (err) {
    err_msg(err);
} finally {
    console.log('Mesmo depois de todos os erros estou aqui!');
}

function err_msg(err) {
    throw new Error('Aconteceu o erro e ele será repassado: ' + err.message);
}