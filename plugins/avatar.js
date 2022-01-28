let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  const link = 'https://hardianto.xyz/api/anime/random?sfw=avatar&apikey=hardianto'
  
  conn.sendFile(m.chat, link, '', 'Avatar', m)
}
handler.help = ['avatar']
handler.tags = ['internet']
handler.command = /^(avatar)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
