class Conta {
    numero: String;
    saldo: number;
    constructor(numero: String, saldo:number) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

class Banco{
    contas: Conta[] = [];
    inserir(c: Conta): void{
        let indice = this.consultarIndice(c.numero);
        if(indice == -1){
            this.contas.push(c);
        }else{
            console.log('Conta já existente!');
            
        }
    }

    consultar(numero: String): Conta{
        //a exclamção diz para o typescript que a variável não vai ser nula
        let contaProcurada!: Conta;
        for(let c of this.contas){
            if(c.numero == numero){
                contaProcurada = c;
                break
            }
        }
        return contaProcurada;
    }

    consultarIndice(numero: String): number{
        let indice: number = -1;
        for(let i: number = 0; i<this.contas.length; i++){
            if(this.contas[i].numero == numero){
                indice = i;
                break;
            }
        }
        return indice;
    }

    alterar(c: Conta): void{
        let indice = this.consultarIndice(c.numero);
        if(indice != -1){
            this.contas[indice] = c;
        }
    }

    excluir(numero: String): void{
        let indice: number = this.consultarIndice(numero);
        if(indice != -1){
            for(let i: number = indice; i<this.contas.length; i++){
                this.contas[i] = this.contas[i+1]
            }
            this.contas.pop();
        }
    }

    depositar(numero: String, valor: number){
        let conta: Conta = this.consultar(numero);

        if(conta != null){
            conta.depositar(valor);
        }
    }

    sacar(numero: String, valor: number){
        let indice: number = this.consultarIndice(numero);
        if(indice != -1){
            this.contas[indice].sacar(valor);
        }

    }

    transferir(numeroCredito: String, numeroDebito: string, valor: number){
        let indice1: number = this.consultarIndice(numeroCredito);
        let indice2: number = this.consultarIndice(numeroDebito);
        if(indice1 != -1 && indice2 != -1){
            this.contas[indice1].transferir(this.contas[indice2], valor);
        }
    }

    quantidadeDeContas(): number{
        return this.contas.length;
    }

    totalDeDinheiro(): number{
        let somatorio: number = 0
        for(let i = 0; i < this.contas.length; i++){
            somatorio += this.contas[i].saldo;
        }

        return somatorio;
    }

    mediaDeDinheiro(): number{
        let numeroDeContas: number = this.quantidadeDeContas();
        let totalDeDinheiro: number = this.totalDeDinheiro();
        let media = totalDeDinheiro / numeroDeContas;
        return media;
    }
}

let b: Banco = new Banco();
b.inserir(new Conta("111-2", 100));
console.log(b.consultar("111-2"));
console.log(b.consultar("22222-2"));

//repetindo o mesmo numero de conta
b.inserir(new Conta("111-2", 100));

//operacao de sacar
b.sacar("111-2", 50);
console.log(b.consultar('111-2'));

//operacao de transferir
b.inserir(new Conta("222", 100));
b.transferir("111-1", "222", 50);
console.log(b.consultar("111-2"));
console.log(b.consultar("222"));

//quantidade contas
console.log(b.quantidadeDeContas());

//somatorio contas
console.log(b.totalDeDinheiro());

//media
console.log(b.mediaDeDinheiro());

export {Conta, Banco};












