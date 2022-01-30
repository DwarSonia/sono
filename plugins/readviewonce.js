let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'Onde está a mensagem?', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'Itu bukan pesan viewOnce'
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('Talvez o barco tenha sido aberto antes'))
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler