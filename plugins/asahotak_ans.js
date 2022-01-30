const similarity = require('similarity')
const threshold = 0.72
module.exports = {
    async before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Modelo.*ao/i.test(m.quoted.contentText)) return !0
        this.asahotak = this.asahotak ? this.asahotak : {}
        if (!(id in this.asahotak)) return m.reply('O assunto acabou')
        if (m.quoted.id == this.asahotak[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
            if (['.ao', 'Bantuan', ''].includes(m.text)) return !0
            if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
                global.db.data.users[m.sender].exp += this.asahotak[id][2]
                await this.sendButton(m.chat, `*Correto!* +${this.asahotak[id][2]} XP`, author, 'Quebra-cabeças', '.asahotak', m)
                clearTimeout(this.asahotak[id][3])
                delete this.asahotak[id]
            } else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*um pouco mais!*`)
            else m.reply(`*Direito!*`)
        }
        return !0
    },
    exp: 0
}
