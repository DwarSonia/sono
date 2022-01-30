module.exports = Object.assign(async function handler(m, { conn, text }) {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw 'Hash não encontrado'
    let sticker = global.db.data.sticker[hash]
    if (sticker) return m.reply(`
*fileSha256:* ${hash}
*Text:* ${sticker.text}
*Time Create:* ${sticker.at}
*Locked:* ${sticker.locked ? 'Yes' : 'No'}
*Creator Name:* ${conn.getName(sticker.creator)}
*Creator Number:* ${splitM(sticker.creator)}
*Creator Jid:* ${sticker.creator}


${sticker.mentionedJid.length > 0 ? `*Cmd Mention:*

${sticker.mentionedJid.map((v, i) => `No. *${i + 1}*:\n*Nome de menção:* ${conn.getName(v)}\n*Número de menção:* ${splitM(v)}\n*Mencione Jid:* ${v}`).join('\n\n')}` : ''} 
`.trim())
    else m.reply('Adesivo Não está no banco de dados')
}, {
    help: ['cmd'].map(v => 'info' + v + ' <text>'),
    tags: ['database'],
    command: ['infocmd']
})

/**
 * split Jid
 * @param {String} jid 
 * @returns String
 */
function splitM(jid) {
    return jid.split('@')[0]
}