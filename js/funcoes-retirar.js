function entrar() {
    const mensagemDiv = document.getElementById("txtMensagem");
    let mensagem;

    const quantidadeRetirada = Number(
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
        mensagem = "Preencha a quantidade a retirar.";
        document.getElementById("txtQuantidade").focus();
    } else if (isNaN(quantidadeRetirada)) {
        mensagem = "Preencha uma quantidade numérica.";
        document.getElementById("txtQuantidade").focus();
    } else if (quantidadeRetirada < 0) {
        mensagem = "O valor deve ser maior que 0.";
        document.getElementById("txtQuantidade").focus();
    } else {
        const material1 = new Material();
        material1.obterInformacoes();

    if (quantidadeRetirada > material1.quantidadeMaterial) {
        mensagem = "Não há essa quantidade para retirar.";
        document.getElementById("txtQuantidade").focus();
    } else {
        material1.retirarMaterial(quantidadeRetirada);
        mensagem = "Material retirado com sucesso!";
        }
    }

  document.getElementById("txtMensagem").innerHTML = `<b>${mensagem}</b>`;
  mensagemDiv.style.display = 'block';
}
