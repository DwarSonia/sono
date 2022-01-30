let handler = async (m) => {
  m.reply(`
*Pergunta:* ${m.text}
*Responder:* ${pickRandom(['Sim', 'Provavelmente sim', 'Provavelmente', 'Provavelmente não', 'Não', 'De jeito nenhum'])}
`.trim())
}
handler.help = ['apakah <texto>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}