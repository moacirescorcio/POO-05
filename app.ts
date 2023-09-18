import prompt from "prompt-sync";
import {Conta,Banco} from './array_de_objetos';

let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
    '4 - Depositar 5 - Excluir 6 - Transferir\n' +
    '7 – Totalizações' +
    '0 - Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            console.log("---Opção 1: Cadastrar conta---");
            
            let numeroConta = input("Digite o numero da conta: ");
            let saldo = Number(input("Digite valor inicial da conta: "));
            b.inserir(new Conta(numeroConta, saldo));
            break
        case "2":
            console.log("---Opção 2: Consultar conta---");

            let contaProcurada = input("Qual o numero da conta que deseja procurar: ");
            console.log(b.consultar(contaProcurada));
            break
        case "3":
            console.log("---Opção 3: Sacar---");

            let numeroDaConta = input("Digite o numero da conta: ");
            let sacar = Number(input("Digite o valor que deseja sacar: "));
            b.sacar(numeroDaConta, sacar);
            break
        case "4":
            console.log("---Opção 4: Depositar---");

            let numeroDepositar = input("Digite o numero da conta: ");
            let valorDeposito = Number(input("Digite o valor do depósito: "));
            b.depositar(numeroDepositar, valorDeposito);
            break;
        case "5":
            console.log("---Opção 5: Excluir conta---");

            let numeroExcluir = input("Numero da conta para excluir: ")
            b.excluir(numeroExcluir);
            break
        case "6":
            console.log("---Opção 6: Transferência---");

            let numeroCredito = input("Numero da conta para creditar: ")
            let numeroDebito = input("Numero da conta para debitar: ")
            let valorTransferencia = Number(input("Valor da transferência: "))
            b.transferir(numeroCredito, numeroDebito, valorTransferencia);
            break
        case "7":
            console.log("---Opção 7: Totalizações---");

            let totalizações = b.totalDeDinheiro();
            console.log(totalizações);
            break
}
input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

