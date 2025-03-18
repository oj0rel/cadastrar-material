class Material {
    codigo;
    nome;
    descricaoMaterial;
    quantidadeMaterial;

    cadastrar(codigo, nome, descricaoMaterial, quantidadeMaterial) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricaoMaterial = descricaoMaterial;
        this.quantidadeMaterial = quantidadeMaterial;

        sessionStorage.setItem("codigo", this.codigo);
        sessionStorage.setItem("nome", this.nome);
        sessionStorage.setItem("descricaoMaterial", this.descricaoMaterial);
        sessionStorage.setItem("quantidadeMaterial", this.quantidadeMaterial);
    }

    obterInformacoes() {
        this.codigo = Number(sessionStorage.getItem("codigo")) || 0;
        this.nome = sessionStorage.getItem("nome");
        this.descricaoMaterial = sessionStorage.getItem("descricaoMaterial");
        this.quantidadeMaterial = Number(sessionStorage.getItem("quantidadeMaterial")) || 0;
    }

    adicionarMaterial(valor) {
        valor = Number(valor);
        if (isNaN(valor) || valor <= 0) {
            return false;
        }
        this.obterInformacoes();
        this.quantidadeMaterial += valor;
        sessionStorage.setItem("quantidadeMaterial", this.quantidadeMaterial);
        return true;
    }
    
    retirarMaterial(valor) {
        this.obterInformacoes();
        valor = Number(valor);
        if (isNaN(valor) || valor < 0) {
            return false;
        }
        let novoValorMaterial = this.quantidadeMaterial - valor;
        if (novoValorMaterial < 0) {
            return false;
        }
        this.quantidadeMaterial = novoValorMaterial;
        sessionStorage.setItem("quantidadeMaterial", this.quantidadeMaterial);
        return true;
    }
}