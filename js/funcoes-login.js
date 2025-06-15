function sair() {
  location.replace("./js-encerrar.html");
}

function entrar() {
    const mensagemDiv = document.getElementById("txtMensagem");
    let mensagem;

    if (document.getElementById("txtEmail").value == "") {
        mensagem = "Preencha o campo de Email.";
        document.getElementById("txtEmail").focus();
    } else if (document.getElementById("txtEmail").value != "teste@teste.com") {
        mensagem = "Email incorreto!";
        document.getElementById("txtEmail").focus();
    } else if (document.getElementById("txtSenha").value == "") {
        mensagem = "Preencha o campo de Senha.";
        document.getElementById("txtSenha").focus();
    } else if (document.getElementById("txtSenha").value != "teste") {
        mensagem = "Senha incorreta!";
        document.getElementById("txtSenha").focus();
    } else {
        window.open("./js-menu.html");
    }
    
    document.getElementById("txtMensagem").innerHTML = `<b>${mensagem}</b>`;
    mensagemDiv.style.display = 'block';
}
