let { WAMessageProto } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw 'Balas pesan!'
    if (!text) return conn.sendButton(m.chat, `Hum... Onde está o Texto?\n\nExemplo:\n${usedPrefix + command} tes`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    let msgs = db.data.msgs
    if (text in msgs) return conn.sendButton(m.chat, `'${text}' já registrado, use outro nome!`, 'Kitagawa ✨', 'Lista de Mensagens', `${usedPrefix}list${which}`, m)
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    if (db.data.chats[m.chat].getmsg) return m.reply(`Mensagem adicionada com sucesso '${text}'
    
Acesse digitando '${text}'`)
    else return conn.sendButton(m.chat, `Mensagem adicionada com sucesso '${text}'

Acesse com ${usedPrefix}get${which} ${text}

Se o Getmsg estiver ativado, não há mais necessidade de digitar*${usedPrefix}get${which}*`, 'Kitagawa ✨', 'Aktifkan', '.1 getmsg', m)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <texto>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler