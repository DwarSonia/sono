async function handler(m) {
    if (!m.quoted) throw 'responda a mensagem!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'a mensagem que você está respondendo não contém uma resposta!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
module.exports = handler