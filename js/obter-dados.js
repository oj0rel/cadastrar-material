window.onload = function() {
    const material1 = new Material();
    material1.obterInformacoes();

    document.getElementById('txtCodigo').value = material1.codigo;
    document.getElementById('txtNome').value = material1.nome;
    document.getElementById('txtDescricao').value = material1.descricaoMaterial;
    document.getElementById('txtQuantidade').value = material1.quantidadeMaterial;
};
