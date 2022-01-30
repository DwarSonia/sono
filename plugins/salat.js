const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return m.reply(`exemplo:\n${usedPrefix + command} jakarta`)
    let res = await fetch(global.API('zeks', '/api/jadwalsholat', { daerah: text }, 'apikey'))
    if (res.status != 200) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) {
        if (json.message == 'uso de apikey atingiu o limite') throw json
        let hasil = json.listdaerah.map((v, i) => `│ ${i + 1}. ${v}`).join`\n`
        m.reply(`
*${json.message}*

exemplo:
${usedPrefix + command} jakarta

┌ *Lista de Regiões*
│ 
${hasil}
│ 
└────`.trim())
        throw false
    }
    m.reply(`Cronograma de Oração ${text}\n\n${json.data.string}`.trim())

}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler