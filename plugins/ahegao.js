let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  const link = 'https://xteam.xyz/randomimage/blackpink?APIKEY=cristian9407'
  conn.sendFile(m.chat, link, '', 'hehe', m).then(() => console.log('[SUCESSO] Imagem enviada com sucesso.'))
}
handler.help = ['bp', 'blackpink']
handler.tags = ['Imagens']
handler.command = /^(bp)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
