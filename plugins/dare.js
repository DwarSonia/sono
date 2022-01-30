/*
Made by Aine
*/

let handler = async (m, { conn }) => {
	let img = 'https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg'
	let dares = [
"Você é corajoso o suficiente para tirar uma foto de um cemitério à meia-noite?",
"Tire uma foto do bot, faça dela sua foto de perfil por 1 dia",
"VN cante meu balão há 5",
"Envie uma mensagem para seu ex e diga _eu ainda gosto de você_",
"Ligue para o crush/namorada agora e mande uma mensagem para o jogador",
"Pap para um membro do grupo",
"SS recente chamada whatsapp",
"Enviar uma nota de voz dizendo posso te chamar de bebê?",
"Use a foto de Sule por 3 dias'",
"Modelo usa idioma local 24 horas",
"Mudar nome para _gue lucinta luna_ por 5 horas",
"Fale para entrar em contato com wa na ordem de acordo com o seu %batre, depois diga a ele _tenho sorte em hv você_",
"Faça uma pegadinha com seu ex e diga *eu te amo, por favor, volte*",
"Gravar voz leia surata al-kautsar",
"Mude o nome para *BOWO* por 24 horas",
"Diga seu tipo de namorado!",
"VN *eu te amo*",
"Você tem que papear agora!",
"Você deve dividir o limite, pelo menos 2 por usuário",
"Chat por 1 hora deve ser 4l4Y 8AN93T"
] // adiciona palavras próprias
	conn.sendFile(m.chat, img, 'maker.jpeg', `*DARE*\n\n“${pickRandom(dares)}”`, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare|berani|tantangan)$/i
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
