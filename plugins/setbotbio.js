// NurNurz
let handler = async (m, { conn, text }) => {
    if (!text) throw `Digite o texto para a nova biografia do bot`
  try {
    await conn.setStatus(text)
      conn.reply(m.chat, 'Sucesso na mudança do Bio Bot', m)
  } catch (e) {
    console.log(e)
    throw `Error`
  }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio|setbio)$/i
handler.owner = true

module.exports = handler
