let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    const days = await fetch(`https://raw.githubusercontent.com/swatky/swty/main/database/api/anime/dayofweek.json`)
    const day = await days.json()
    await conn.sendFile(m.chat, day.sexta.image, '', day.sexta.desc, m)
}
handler.help = ['sexta']
handler.tags = ['Lancamentos de Animes']
handler.command = /^(sexta)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
