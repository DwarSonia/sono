let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Não: node main.js\nDo: node index.js'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Redefinindo o bot...\nAguarde cerca de 1 minuto')
    await global.db.write()
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['debounce' + (process.send ? '' : ' (Não está funcionando)')]
handler.tags = ['host']
handler.command = /^debounce$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

