function validacao(){
const nome = document.getElementById("nome").value;
const email = document.querySelector("#email").value;
const senha = document.getElementById("senha").value;

console.log(nome)

if(nome == '' || email == '' || senha == ''){
    alert('Preenche o campo, meu patrão!!')
    return
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (!emailRegex.test(email)){
    window.alert("DIGITE UM EMAIL QUE EXISTA ADERBAL")
    return
}

if(senha.length > 8){
    window.alert('BOTE UMA SENHA DE RESPEITO COM OITO CARACTERES')
    return
}


window.alert("cadastro realizado")
}