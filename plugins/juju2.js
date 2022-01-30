let fetch = require('node-fetch')
const fs = require("fs")
const { MessageType } = require('@adiwajshing/baileys')
const jid = '12173311845@s.whatsapp.net'
//const { reply2, ftoko } = require('../lib/replyDB')
const MD5 = require("crypto-js/md5");



let handler = async (m, { conn, command }) => {
    const fakegroup = (m) => {
        conn.sendMessage(m.chat, m, MessageType.text, {
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
        })
    }
    const reply2 = (m) => {
        conn.sendMessage(m.chat, m, MessageType.text, {
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
            }, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true })
    }
    const replyy = (m) => {
        const isGroup = m.chat.endsWith('@g.us')
        const sender = m.key.fromMe ? conn.user.jid : isGroup ? m.participant : m.key.remoteJid
        const conts = m.key.fromMe ? conn.user.jid : conn.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = m.key.fromMe ? conn.user.name : conts.notify || conts.vname || conts.name || '-'
       
        const fgclink = {
            key: {
                participant: "0@s.whatsapp.net",
                "remoteJid": "0@s.whatsapp.net"
            },
            "message": {
                "groupInviteMessage": {
                    "groupJid": "5511934357367-1634956536@g.us",
                    "inviteCode": "m", "groupName": "P",
                    "caption": `${pushname} z\ncmd : ${command}`,
                    'jpegThumbnail': fs.readFileSync(`./media/shiraori.jpg`)
                }
            }
        }
        conn.sendMessage(m.chat, m, MessageType.text, { quoted: fgclink })
    }


    await fakegroup(m)
    await reply2(m)
    await replyy(m)
    //if (m.message.extendedTextMessage != undefined) {
    //    let mentioneddd = m.message.extendedTextMessage.contextInfo.mentionedJid
    //    try {
    //        pic = await alpha.getProfilePicture(mentioneddd[0])
    //    } catch {
    //        pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
    //    }
    //    seeer = `Nama : *t21`
    //    thumbb = await getBuffer(pic)
    //    anuu = { contextInfo: { "forwardingScore": 999, "isForwarded": true, 'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': { "imageMessage": { "caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`) } } } }
    //    conn.sendMessage(from, thumbb, image, anuu)
    //}

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    const idMD5 = MD5(`${makeid(5)}`).toString()
    await conn.reply(m.chat, idMD5 , m)

    // OK - await console.log(MD5("Message").toString());
   
    // fecha o handle
}
handler.help = ['juju']
handler.tags = ['internet']
handler.command = /^(juju2|j2)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler




