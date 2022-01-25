let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
	const dayofw = await fetch(`https://raw.githubusercontent.com/swatky/swty/main/database/api/anime/dayofweek.json`)
	const days = await dayofw.json()
	conn.sendFile(m.chat, days.sunday.image, '', days.sunday.desc, m)
}
handler.help = ['gm']
handler.tags = ['internet']
handler.command = /^(gm)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
