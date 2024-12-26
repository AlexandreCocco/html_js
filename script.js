const form = document.getElementById('formMaior');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const campoA = parseInt(document.getElementById('numeroCampoA').value);
    const campoB = parseInt(document.getElementById('numeroCampoB').value);
    const msnSucesso = `O valor do campo B: <b>${numeroCampoB.value}</b>, é maior que o campo A: <b>${numeroCampoA.value}</b>`;
    const msnfalha = `O valor do campo A: <b>${numeroCampoA.value}</b>, é maior que o campo B: <b>${numeroCampoB.value}</b>`;


    if (campoB > campoA) {
        const mensagemSucesso =  document.querySelector('.sucesso');
        mensagemSucesso.innerHTML = msnSucesso;
        mensagemSucesso.style.display = 'block';

        const mensagemfalha =  document.querySelector('.falha');
        mensagemfalha.innerHTML = '';
        mensagemfalha.style.display = 'none';

    } else {
        const mensagemfalha =  document.querySelector('.falha');
        mensagemfalha.innerHTML = msnfalha;
        mensagemfalha.style.display = 'block';

        const mensagemSucesso =  document.querySelector('.sucesso');
        mensagemSucesso.innerHTML = '';
        mensagemSucesso.style.display = 'none';
        
    }
});
