let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) return conn.sendButton(m.chat, `Hum... Onde está o Texto?\n\nExemplo:\n${usedPrefix + command} tes`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    let msgs = global.db.data.msgs
    if (!text in msgs) return conn.sendButton(m.chat, `'${text}' não listado!`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    delete msgs[text]
    m.reply(`Berhasil menghapus pesan dengan nama '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <texto>')
handler.tags = ['database']
handler.command = /^(-|del)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler