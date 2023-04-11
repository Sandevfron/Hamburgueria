const form = document.querySelector('meuForm');
const hamburguerInput = document.querySelector('Hambúrgues');
const paoInput = document.querySelector('Pao');
const carnesInput = document.querySelector('Carnes');
const saladaInput = document.querySelector('Salada');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    //verificar se o nome esta vazio
    if(paoInput.value === "") {
        alert("Por favor escola o seu pao")
        return;
    }
});