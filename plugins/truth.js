/*
Made by Aine
*/

let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
    let trut = [
"Você já pegou o dinheiro dos seus pais ou não?",
"Você já mentiu para algum pai?\nConte-me sobre a mentira",
"Que comida você gosta?",
"Quem quer ser namorada neste GC?",
"Qual é o seu pior pesadelo?",
"Qual é a coisa mais embaraçosa sobre o seu amigo?",
"Você já gostou de alguém? Quanto tempo?",
"Se você puder ou se quiser, com qual gc/fora do gc você faria amizade? (talvez diferente/mesmo tipo)",
"Qual é o seu maior medo?",
"Você já gostou de alguém e sentiu que essa pessoa também gosta de você?",
"Qual é o nome da ex-namorada do seu amigo que você gostava secretamente?",
"Você já roubou dinheiro do seu pai ou pai? O motivo?",
"O que te faz feliz quando você está triste?",
"Você já teve um amor unilateral? Se você já esteve com quem? Como se sente, mano?",
"Você já foi amante de alguém?",
"A coisa mais temida",
"Quem é a pessoa mais influente em sua vida?",
"Do que você está orgulhoso este ano?",
"Quem pode te fazer grande :v",
"Quem é a pessoa que já te fez muito feliz?",
"(Para os muçulmanos) você já não orou o dia todo?",
"Quem está mais próximo do seu tipo ideal de parceiro aqui",
"Você gosta de mabar (tocar junto) com quem?",
"Já rejeitou as pessoas? o motivo?",
"Cite um incidente que fez você se sentir magoado e que você ainda se lembra.",
"Que conquistas você obteve este ano?",
"Qual é o seu pior hábito na escola?"
] // adiciona palavras próprias
	conn.sendFile(m.chat, img, 'maker.jpeg', `*Verdade*\n\n“${pickRandom(trut)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth|kebenaran|verdade)$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
