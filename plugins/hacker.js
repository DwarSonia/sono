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
    "Querido, está escrito na minha página de desfiguração, quando você será minha namorada?",
    "Estou disposto a ser um processador quente, desde que você seja o dissipador de calor que possa me esfriar a qualquer momento.",
    "Você não precisa procurar um xss gap, porque quando você clica no meu coração, aparece um pop up com seu nome.",
    "Espero que, depois que eu fizer login com sucesso em seu coração, não haja botão de logout e minha sessão nunca expire.",
    "Quando eu tenho que usar a técnica de desvio de link simbólico para abrir sua pasta de coração que está habilitada para open_basedir.",
    "Eu e você somos como PHP e MySQL que ainda não estão conectados.",
    "Não apenas injete o coração, mas você tem que ser capaz de remendá-lo também. Assim você não trapaceia com outros hackers.",
    "Sou um programador PHP, mas não vou php-in você de qualquer maneira.",
    "Eneeeng. | Apache? | Você é a mulher mais Unix que eu já conheci |",
    "Querida, seu capslock está ligado? | Não, por que está? | Porque seu nome está escrito tão grande no meu coração | zzz! smile",
    "Eu me aproximei de você apenas para redirecionar para o coração do seu amigo.",
    "Domínios podem estacionar, meu amor não pode estacionar em seu coração?",
    "Posso ser sua namorada? | 400(Bad Request) | Posso te beijar? | 401(Autorização Necessária) | Vou tirar sua camisa ok | 402(Pagamento Necessário) triste",
    "Você sabe que não há diferença entre você e a sintaxe do PHP, a sintaxe do PHP é difícil de memorizar, você é difícil de esquecer",
    "Qual escola profissional você fez? | Engenharia de Computação em Rede | Então, o que você pode fazer agora? | Capturar seu coração através do meu computador | biggrin",
    "Se o amor é um Array, então, meu amor por você nunca é vazio se não for definido ().",
    "SQLI (Injeção de Amor de Consulta Estruturada)",
    "Eu quero que você rm -rf todos os ex em seu cérebro, eu sou a raiz do seu coração",
    "Seu sorriso é como um cooler que esfria meu coração quando está com overclock.",
    "Você é meu terminal, onde passo meu tempo digitando milhares de linhas de código de amor para você sorrir",
    "Gosto de ficar na zona-h, porque é onde arquivo vários sites com fotos suas.",
    "Meu coração é como um vps só para você, não hospedagem compartilhada que pode empilhar vários domínios de amor.",
    "Eu não sou um servidor VNC sem autenticação que você pode monitorar a qualquer momento.",
    "Não dê dualboot meu coração para você.",
    "Meu amor eu Ctrl + A depois eu Ctrl + C e eu Ctrl + V bem na pasta do sistema do seu coração.",
    "KDE perdido em beleza, GNOME perdido em termos simples, FluxBox perdido em luz, basicamente todos os DEs perdem para você.",
    "Seu amor é como o TeamViewer sempre controlando meu coração",
"Nosso amor não pode ser separado, não importa a espessura do firewall...!!"
]
