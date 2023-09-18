"use strict";
class Postagem {
    constructor(id, texto, quantasCurtidas) {
        this.id = id;
        this.texto = texto;
        this.quantasCurtidas = quantasCurtidas;
    }
    //metodos
    incrementarCurtida() {
        this.quantasCurtidas++;
    }
    toString() {
        let texto = "\n" + this.texto + "\nQuantidade de curtidas: " + this.quantasCurtidas;
        return texto;
    }
}
class Microblog {
    constructor() {
        this.postagens = [];
    }
    incluirPostagem(p) {
        this.postagens.push(p);
    }
    buscarPostagem(id) {
        let postagemEncontrada = {};
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                postagemEncontrada = this.postagens[i];
                break;
            }
        }
        return postagemEncontrada;
    }
    excluir(id) {
        let postagemParaExcluir = this.buscarPostagem(id);
        if (postagemParaExcluir != null) {
            this.postagens.splice(id - 1, 1);
            console.log("Postagem excluída!");
        }
    }
    postagemMaisCurtida() {
        let postagemMaisMais = this.postagens[0];
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].quantasCurtidas > postagemMaisMais.quantasCurtidas) {
                postagemMaisMais = this.postagens[i];
                break;
            }
        }
        return postagemMaisMais;
    }
    curtir(id) {
        let postagemEncontrada = this.buscarPostagem(id);
        postagemEncontrada.incrementarCurtida();
    }
    toString() {
        let texto = '';
        for (let i = 0; i < this.postagens.length; i++) {
            texto += this.postagens[i].toString();
        }
        return texto;
    }
}
let microblog1 = new Microblog();
microblog1.incluirPostagem(new Postagem(1, "Minha primeira Postagem", 2));
//criando segundo postagem
microblog1.incluirPostagem(new Postagem(2, "Minha segunda Postagem", 1));
//procurando postagem
console.log(microblog1.buscarPostagem(2));
//postagem mais curtida
console.log(microblog1.postagemMaisCurtida());
//curtindo post
microblog1.curtir(2);
microblog1.curtir(2);
//to String
console.log(microblog1.toString());
//excluindo postagem
microblog1.excluir(1);
console.log(microblog1);
