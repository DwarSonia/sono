module.exports = Object.assign(async function handler(m, { conn, text, command, usedPrefix }) {
    let which = command.replace(/(un)?lock/i, '')
    if (!text) return conn.sendButton(m.chat, `Hum... Onde está o Texto?\n\nExemplo:\n${usedPrefix + command} tes`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    let msgs = db.data.msgs
    if (!(text in msgs)) return conn.sendButton(m.chat, `'${text}' não listado!`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    msgs[text].locked = !/^un/i.test(command)
    m.reply('Berhasil dikunci!')
}, {
    rowner: true,
    help: ['un', ''].map(v => v + 'lockmsg'),
    tags: ['database'],
    command: /^(un)?lock(vn|msg|video|audio|img|stic?ker|gif)$/i
})