let { WA_MESSAGE_STUB_TYPES,  MessageType  } = require('@adiwajshing/baileys')
let fs = require('fs')

async function reply2(m, { conn }) {
    conn.sendMessage(m.chat, '_Processando..._', MessageType.text, {
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
        }, contextInfo: { "forwardingScore": 999, "isForwarded": false }, sendEphemeral: true
    })
}

module.exports = { reply2 }
