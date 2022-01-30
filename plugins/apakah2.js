let handler = async (m, { command, text }) => {
  m.reply(`
*Pergunta:* ${command} ${text}
*Responder:* ${pickRandom(['Sim', 'Talvez sim', 'Talvez', 'Talvez não', 'Não', 'De jeito nenhum'])}
`.trim())
}
handler.help = ['apakah <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^apakah$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}