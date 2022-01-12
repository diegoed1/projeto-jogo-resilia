function nextPage(){
    window.location = "escolhapersonagem/escolhapersona.html"
}

function goJason(){
    window.location = "../jason/fasejason.html"
}

function goMyers(){
    window.location = "../myers/fasemyers.html"
}

function goFreddy(){
    window.location = "../freddy/fasefreddy.html"
}

function voltarEscolha(){
    window.location = "../escolhapersonagem/escolhapersona.html"
}

function voltarInicio(){
    window.location = "../index.html"
}

function reiniciarJogo(){
    window.location = "../index.html"
}

function escolhaF(){
    while(escolha != 1 || escolha != 2 || escolha !=3 ){
    var escolha = prompt("Voçê está com sono, e Freddy está te esperando no mundo dos sonhos. \n Que tal beber algo para espantar o sono? \n Escolha uma opção! \n 1- Suco de maracujá \n 2- Água \n 3- Café");
    if (escolha ==1 ) { 
         window.location = "../freddy/gameoverf1.html";
         break;
    }    else if (escolha ==2) { 
         window.location = "../freddy/gameover2f1.html";
         break;
    }
    if(escolha ==3) {
        window.location = "../freddy/fase2freddy.html";
        break;
    }   else {
        alert("Digite 1 , 2 ou 3");
    }
  }      
}

function escolhaF2(){
    while(escolha2 != 1 || escolha2 != 2 || escolha2 !=3  ) {
    var escolha2 = prompt("Café apenas não vai adiantar. Faça algo! \n Escolha uma opção! \n 1- Ir malhar \n 2- Ler um livro \n 3- Pesquisar na internet sobre Freddy")
    if (escolha2 ==1) { 
        window.location = "../freddy/gameoverf2.html";
        break;
            } else if (escolha2 ==2){ 
                window.location = "../freddy/gameover2f2.html";
         break;
    }
    if(escolha2 ==3) {
        window.location = "../freddy/fase3freddy.html";
        break;
    }   else {
        alert("Digite 1, 2 ou 3")
    }
  }    
}

function escolhaF3(){
    while(escolha3 != 1 || escolha3 != 2 || escolha3 !=3  ) {
    var escolha3 = prompt("Voçê dormiu, porém agora voçê está preparado. Vamos derrotar Freddy usando a fraqueza dele \n Escolha uma opção! \n 1- Atear fogo em Freddy \n 2- Atear água em Freddy \n 3- Jogar um feitiço em Freddy")
    if (escolha3 ==1 ) { 
         window.location = "../freddy/winf.html";
         break;
            } else if (escolha3 ==2){  
                window.location = "../freddy/gameoverf3.html";
            break;
    }
    if(escolha3 ==3) {
        window.location = "../freddy/gameover2f3.html";
        break;
    }   else{
        alert("Digite 1, 2 ou 3")
    }
  }
}

function escolhaJ(){
    while(escolha != 1 || escolha != 2 || escolha !=3 ){
    var escolha = prompt("Voçê acabou de preceber que Jason te oberva. \n Escolha uma opção \n 1- Ligar para a policia \n 2- Se esconder e observar o que Jason irá fazer \n 3- Sair correndo da cabana");
    if (escolha ==1 ) { 
         window.location = "../jason/gameoverj1.html";
         break;
    }    else if (escolha ==2) { 
         window.location = "../jason/fase2jason.html";
         break;
    }
    if(escolha ==3) {
        window.location = "../jason/gameover2j1.html";
        break;
    }   else {
        alert("Digite 1 , 2 ou 3");
    }
  }      
}

function escolhaJ2(){
    while(escolha2 != 1 || escolha2 != 2 || escolha2 !=3 ){
    var escolha2 = prompt("Fuja pela janela dos fundos. Mas antes escolha um objeto da cabana para ajudar na fuga. \n Escolha uma opção! \n 1- Uma pedra \n 2- Uma espingarda \n 3- Uma faca");
    if (escolha2 ==1 ) { 
         window.location = "../jason/fase3jason.html";
         break;
    }    else if (escolha2 ==2) { 
         window.location = "../jason/gameoverj2.html";
         break;
    }
    if(escolha2 ==3) {
        window.location = "../jason/gameover2j2.html";
        break;
    }   else {
        alert("Digite 1 , 2 ou 3");
    }
  }      
}

function escolhaJ3(){
    while(escolha3 != 1 || escolha3 != 2 || escolha3 !=3 ){
    var escolha3 = prompt("Voçê está correndo na floresta e Jason está te alcançando. O que voçê vai fazer? \n Escolha uma opção! \n 1- Se esconder em cima de uma árvore\n 2- Continuar correndo \n 3- Fazer uma armadilha e ser a isca pra Jason cair no rio");
    if (escolha3 ==1 ) { 
         window.location = "../jason/gameoverj3.html";
         break;
    }    else if (escolha ==2) { 
         window.location = "../jason/gameover2j3.html";
         break;
    }
    if(escolha3 ==3) {
        window.location = "../jason/winj.html";
        break;
    }   else {
        alert("Digite 1 , 2 ou 3");
    }
  }      
}

function escolhaM(){
    while(escolha != 1 || escolha != 2 || escolha !=3 ){
    var escolha = prompt("Voçê foi convidado para 3 festas nesta sexta-feira. Cuidado para não virar alvo facil de Myers. \n Qual festa voçê escolhe? \n Escolha uma opção! \n 1- Festa brega \n 2- Festa do terror \n 3- Festa à fantasia");
    if (escolha ==1 ) { 
         window.location = "../myers/fase2myers.html";
         break;
    }    else if (escolha ==2) { 
         window.location = "../myers/gameoverm1.html";
         break;
    }
    if(escolha ==3) {
        window.location = "../myers/gameover2m1.html";
        break;
    }   else {
        alert("Digite 1 , 2 ou 3");
    }
  }      
}




function escolhaM2(){
    while(escolha2 != 1 || escolha2 != 2 || escolha2 !=3 ){
    var escolha2 = prompt("A festa acabou e as ruas estão cheias de pessoas fantasiadas pois é hallowen. \n Para onde voçê quer ir agora? \n Escolha uma opção! \n 1- Andar pela rua  \n 2- Ir pra casa de amigos \n 3- voltar para sua casa");
    if (escolha2 ==1 ) { 
         window.location = "../myers/gameoverm2.html";
         break;
    }    else if (escolha2 ==2) { 
         window.location = "../myers/fase3myers.html";
         break;
    }
    if(escolha2 ==3) {
        window.location = "../myers/gameover2m2.html" ;
        break;
    }   else {
        alert("Digite 1 , 2 ou 3");
    }
  }      
}



function escolhaM3(){
    while(escolha2 != 1 || escolha2 != 2 || escolha2 !=3 ){
    var escolha2 = prompt("Voçê está na casa de seus amigos, e Myers sabe disso. O que voçê fará agora? \n Escolha uma opção\n 1- Continuar na casa de seus amigos  \n 2- Se fantasiar de homem aranha e se misturar as pessoas fantasiadas \n 3- Enfrentar Myers cara a cara");
    if (escolha2 ==1 ) { 
         window.location = "../myers/gameoverm3.html";
         break;
    }    else if (escolha2 ==2) { 
         window.location = "../myers/winm.html";
         break;
    }
    if(escolha2 ==3) {
        window.location = "../myers/gameover2m3.html" ;
        break;
    }   else {
        alert("Digite 1 , 2 ou 3");
    }
  }      
}




