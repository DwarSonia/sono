let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
  let id = m.chat
  if (id in conn.tebakgambar) {
    conn.reply(m.chat, 'Ainda há perguntas sem resposta neste chat', conn.tebakgambar[id][0])
    throw false
  }
  let res = await fetch(global.API('zahir', '/api/kuis/tebakgambar', {}, 'apikey'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} segundos*
Modelo ${usedPrefix}hint para dica
Bonus: ${poin} XP
    `.trim()
  conn.tebakgambar[id] = [
    await conn.sendFile(m.chat, json.result.images, 'tebakgambar.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgambar[id]) conn.reply(m.chat, `O tempo acabou!\nA resposta é *${json.result.jawaban}*`, conn.tebakgambar[id][0])
      delete conn.tebakgambar[id]
    }, timeout)
  ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i

module.exports = handler