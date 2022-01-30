/* 
    Made by https://github.com/syahrularranger 
    Jangan di hapus credit nya :)
*/
let timeout = 60000
let poin = 500
let poin_lose = -100
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Complete seu terno anterior'
  if (!m.mentionedJid[0]) return m.reply(`_Sobre quem você quer falar?_\Marque a pessoa.. Exemplo\n\n${usedPrefix}suit @${owner[1]}`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `A pessoa que você está desafiando está jogando naipe com outra pessoa:(`
  let id = 'suit_' + new Date() * 1
  let caption = `
_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} jogar terno

Por favor @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `Digite "terima/ok/gas" para começar o terno\Modelo "tolak/gabisa/nanti" recusar`
  conn.suit[id] = {
    chat: await conn.send2Button(m.chat, caption, footer, 'Terima', 'ok', 'Tolak', 'tolak', m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_Tempo limite do terno_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit2'].map(v => v + ' @tag')
handler.command = /^suit(pvp|2)$/i
handler.limit = false
handler.group = true

module.exports = handler