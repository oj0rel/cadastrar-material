function cadastrar() {
    const mensagemDiv = document.getElementById("txtMensagem");
    let mensagem;

    if (document.getElementById("txtCodigo").value == "") {
        mensagem = "Preencha o campo de código.";
        document.getElementById("txtCodigo").focus();
    } else if (document.getElementById("txtNome").value == "") {
        mensagem = "Preencha o nome do material.";
        document.getElementById("txtNome").focus();
    } else if (document.getElementById("txtDescricao").value == "") {
        mensagem = "Preencha a descrição do material.";
        document.getElementById("txtDescricao").focus();
    } else {
        const material1 = new Material();
        material1.cadastrar(
        document.getElementById("txtCodigo").value,
        document.getElementById("txtNome").value,
        document.getElementById("txtDescricao").value,
        0
        );
        mensagem = "Material cadastrado com sucesso!";
    }

    document.getElementById("txtMensagem").innerHTML = `<b>${mensagem}</b>`;
    mensagemDiv.style.display = 'block';
}
