/*
	Por favor, embale
    Mas ajuda a arrumar :v
    Feito: Miaweers
*/

let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `Foto n�o encontrada`
        conn.updateProfilePicture(bot, img)
        conn.reply(m.chat, 'Sucesso na mudan�a da foto do perfil do bot!', m)
    }
}
handler.help = ['setbotpp']
handler.command = /^(setbotpp|setpic)$/i
handler.owner = true

module.exports = handler
