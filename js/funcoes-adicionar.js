function entrar() {
    const mensagemDiv = document.getElementById("txtMensagem");
    let mensagem;

    const quantidadeAdicionar = Number(
        document.getElementById("txtQuantidade").value
    );

    if (!sessionStorage.getItem("codigo")) {
        mensagem =
        "Nenhum material cadastrado. Por favor, cadastre um material primeiro.";
        document.getElementById("txtMensagem").innerHTML = `<b>${mensagem}</b>`;
        mensagemDiv.style.display = 'block';
        return;
    }

    if (document.getElementById("txtQuantidade").value == "") {
        mensagem = "Preencha a quantidade a adicionar.";
        document.getElementById("txtQuantidade").focus();
    } else if (isNaN(quantidadeAdicionar)) {
        mensagem = "Preencha uma quantidade numérica.";
        document.getElementById("txtQuantidade").focus();
    } else if (quantidadeAdicionar < 0) {
        mensagem = "O valor deve ser maior que 0.";
        document.getElementById("txtQuantidade").focus();
    } else {
        const material1 = new Material();
        material1.obterInformacoes();
        material1.adicionarMaterial(quantidadeAdicionar);
        mensagem = "Material adicionado com sucesso!";
    }

    document.getElementById("txtMensagem").innerHTML = `<b>${mensagem}</b>`;
    mensagemDiv.style.display = 'block';
}
