//Atividade 1- situação- Problema
/*Se a data do evento for posterior à data atual, permitir o evento; senão, 
alertar que o cadastro não será permitido por data inválida.
-Se o participante for maior de 18 anos, permitir o cadastro; senão, 
alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão,
 alertar que o cadastro não será permitido por ter excedido o limite.*/
//----------------------------------------------------------------------------------------//

let readlineSync = require('readline-sync');

var inicio = 0;
var cadastros = 2;
while (inicio < cadastros) {

	var primeiroDia = new Date();
    var dataAtual = String(primeiroDia. getDate()). padStart(2 ,'0');//buscando somente o primeiro dia da data
    var dataEvento = readlineSync.question("Digite o primeiro dia da data do Evento: ");  
    var nomeParticipante = readlineSync.question("Digite o nome do Participante : ");
    var idade = readlineSync.question("Digite a idade: ");
    var numeroParticipante = readlineSync.question("Digite a quantidade de Participante: ");  
    var numeroPalestrante = readlineSync.question("Digite a quantidade de Palestrante : ");
    console.log("----------------------------------------------------");
        if(dataEvento < dataAtual) {//condição para comparar a data atual com a data do evento inicialmente fixa.
            console.log("**cadastro não realizado, data inválida**");
       
        }else{
            
            console.log("**Cadastro realizado com sucesso!**");
        }
        if(idade >= 18) {
            console.log("**permitir cadastro, maior de idade!**");
        }else{
            console.log("**cadastro não realizado, menor de idade!**");
        }
    
    var vlrParticipante = 100;
   
        if(numeroPalestrante <= vlrParticipante){
         
            console.log(numeroParticipante + " ° Participante, seu nome é: " +nomeParticipante + ", Cadastro realizado!");
        }else{
       
            console.log(numeroParticipante + " Cadastro EXCEDIDO para Participante !");
        }
        if(numeroPalestrante <= 4){
            console.log("N° de Palestrante: "+ numeroPalestrante + " Permitir Cadastro !");
         
        }else{
            console.log(numeroPalestrante + " Cadastro EXCEDIDO para Palestrante!");
           
        }
        console.log("-----------------------------------------");
        inicio++;        
    } 
