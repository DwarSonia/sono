let handler = async (m, { conn, command, usedPrefix, text, isROwner }) => {
    let which = command.replace(/get/i, '')
    if (!text) return conn.sendButton(m.chat, `Hum... Onde está o Texto?\n\nExemplo:\n${usedPrefix + command} tes`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    let msgs = db.data.msgs
    if (!(text in msgs)) return conn.sendButton(m.chat, `'${text}' não listado!`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    if (msgs[text].locked) if (!isROwner) return m.reply('Bloqueado!')
    let _m = conn.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    // m.reply(`[debug]\n${require('util').format(_m)}`)
    await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <texto>')
handler.tags = ['database']
handler.command = /^get(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler