const similarity = require('similarity')
const threshold = 0.72
module.exports = {
  async before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Modelo.*hint/i.test(m.quoted.text)) return !0
    this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
    if (!(id in this.tebakgambar)) return m.reply('O assunto acabou')
    if (m.quoted.id == this.tebakgambar[id][0].id) {
      let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
      // m.reply(JSON.stringify(json, null, '\t'))
      if (m.text.toLowerCase() == json.result.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.tebakgambar[id][2]
        m.reply(`*Direito!*\n+${this.tebakgambar[id][2]} XP`)
        clearTimeout(this.tebakgambar[id][3])
        delete this.tebakgambar[id]
      } else if (similarity(m.text.toLowerCase(), json.result.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*um pouco mais!*`)
      else m.reply(`*Direito!*`)
    }
    return !0
  },
  exp: 0
}
