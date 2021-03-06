const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = conn.cMod(
    m.chat,
    conn.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
          quoted: {
              key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5511934357367-1634956536@g.us" } : {})
              },
              message: {
                  "imageMessage": {
                      "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                      "mimetype": "image/jpeg",
                      "caption": 'renata ingrata\nopa2\nopa3',
                      "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                      "fileLength": "28777",
                      "height": 1080,
                      "width": 1079,
                      "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                      "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                      "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                      "mediaKeyTimestamp": "1610993486",
                      "jpegThumbnail": fs.readFileSync(`./media/shiraori.jpg`),
                      "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
              }
          }
      }
    ),
    text || q.text 
  )
  await conn.relayWAMessage(msg)
}
handler.help = ['pengumuman', 'announce', 'hidetag'].map(v => 'o' + v + ' [teks]')
handler.tags = ['group']
handler.command = /^o(pengumuman|announce|hiddentag|hidetag)$/i

handler.owner = true
handler.group = true

module.exports = handler
