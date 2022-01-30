const similarity = require('similarity')
const threshold = 0.72
module.exports = {
    async before(m) {
        let id = m.chat
        if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Modelo.*teka/i.test(m.quoted.text)) return !0
        this.tebakkata = this.tebakkata ? this.tebakkata : {}
        if (!(id in this.tebakkata)) return m.reply('O assunto acabou')
        if (m.quoted.id == this.tebakkata[id][0].id) {
            let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
            // m.reply(JSON.stringify(json, null, '\t'))
            if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
                global.db.data.users[m.sender].exp += this.tebakkata[id][2]
                m.reply(`*Direito!*\n+${this.tebakkata[id][2]} XP`)
                clearTimeout(this.tebakkata[id][3])
                delete this.tebakkata[id]
            } else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*um pouco mais!*`)
            else m.reply(`*Direito!*`)
        }
        return !0
    },
    exp: 0
}
