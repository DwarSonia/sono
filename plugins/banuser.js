let handler = async (m, { conn, text }) => {
    if (!text) throw 'Quem quer ser banido?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Marque um'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `banido com sucesso`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
