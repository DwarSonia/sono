let fs = require('fs')

let handler = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `*${pickRandom(hacker)}*`, m)
}
handler.help = ['hacker']
handler.tags = ['quotes']
handler.command = /^(hacker)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const hacker = [
    "Querido, est� escrito na minha p�gina de desfigura��o, quando voc� ser� minha namorada?",
    "Estou disposto a ser um processador quente, desde que voc� seja o dissipador de calor que possa me esfriar a qualquer momento.",
    "Voc� n�o precisa procurar um xss gap, porque quando voc� clica no meu cora��o, aparece um pop up com seu nome.",
    "Espero que, depois que eu fizer login com sucesso em seu cora��o, n�o haja bot�o de logout e minha sess�o nunca expire.",
    "Quando eu tenho que usar a t�cnica de desvio de link simb�lico para abrir sua pasta de cora��o que est� habilitada para open_basedir.",
    "Eu e voc� somos como PHP e MySQL que ainda n�o est�o conectados.",
    "N�o apenas injete o cora��o, mas voc� tem que ser capaz de remend�-lo tamb�m. Assim voc� n�o trapaceia com outros hackers.",
    "Sou um programador PHP, mas n�o vou php-in voc� de qualquer maneira.",
    "Eneeeng. | Apache? | Voc� � a mulher mais Unix que eu j� conheci |",
    "Querida, seu capslock est� ligado? | N�o, por que est�? | Porque seu nome est� escrito t�o grande no meu cora��o | zzz! smile",
    "Eu me aproximei de voc� apenas para redirecionar para o cora��o do seu amigo.",
    "Dom�nios podem estacionar, meu amor n�o pode estacionar em seu cora��o?",
    "Posso ser sua namorada? | 400(Bad Request) | Posso te beijar? | 401(Autoriza��o Necess�ria) | Vou tirar sua camisa ok | 402(Pagamento Necess�rio) triste",
    "Voc� sabe que n�o h� diferen�a entre voc� e a sintaxe do PHP, a sintaxe do PHP � dif�cil de memorizar, voc� � dif�cil de esquecer",
    "Qual escola profissional voc� fez? | Engenharia de Computa��o em Rede | Ent�o, o que voc� pode fazer agora? | Capturar seu cora��o atrav�s do meu computador | biggrin",
    "Se o amor � um Array, ent�o, meu amor por voc� nunca � vazio se n�o for definido ().",
    "SQLI (Inje��o de Amor de Consulta Estruturada)",
    "Eu quero que voc� rm -rf todos os ex em seu c�rebro, eu sou a raiz do seu cora��o",
    "Seu sorriso � como um cooler que esfria meu cora��o quando est� com overclock.",
    "Voc� � meu terminal, onde passo meu tempo digitando milhares de linhas de c�digo de amor para voc� sorrir",
    "Gosto de ficar na zona-h, porque � onde arquivo v�rios sites com fotos suas.",
    "Meu cora��o � como um vps s� para voc�, n�o hospedagem compartilhada que pode empilhar v�rios dom�nios de amor.",
    "Eu n�o sou um servidor VNC sem autentica��o que voc� pode monitorar a qualquer momento.",
    "N�o d� dualboot meu cora��o para voc�.",
    "Meu amor eu Ctrl + A depois eu Ctrl + C e eu Ctrl + V bem na pasta do sistema do seu cora��o.",
    "KDE perdido em beleza, GNOME perdido em termos simples, FluxBox perdido em luz, basicamente todos os DEs perdem para voc�.",
    "Seu amor � como o TeamViewer sempre controlando meu cora��o",
"Nosso amor n�o pode ser separado, n�o importa a espessura do firewall...!!"
]
