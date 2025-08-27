class Usuario{
    static totalUsuarios = 0;

    #ativo
    constructor(nome,idade,email){
        this.#ativo = false
        this.nome = nome
        this.idade = idade
        this.email = email
        Usuario.totalUsuarios++;
    }

    get ativo(){
        return this.#ativo

        }
    
    set ativo(valor) {
        if(valor == true || valor == false){
            this.#ativo = "S";
        }
    this.#ativo = (valor);

    }

    get boasVindas() {
    return `Bem-vindo, ${this.nome}!`;
    }

    mostrarDados() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Idade: ${this.idade}`);
    console.log(`Emial: ${this.email}`);
    console.log(`Ativo: ${this.ativo}`);

    }


    static contarUsuarios() {
    console.log(`Total de usuários: ${Usuario.totalUsuarios}`);
     }


}



 