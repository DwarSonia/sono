let fetch = require('node-fetch')
const fs = require('fs-extra')
const { MessageType } = require('@adiwajshing/baileys')
const caption = 'arrozaaaaaaaaaaaaaaaaaaaaaaaaa'
const filename = 'feijao.pdf'
let handler = async (m, { conn }) => {
    const rows = [
        { title: 'Row 1', description: "\ndia dos animes", rowId: ".gm" },
        { title: 'Row 2', description: "menu", rowId: ".menu" },
        { title: 'Row 3', description: "waifu", rowId: ".waifu" },
        { title: 'Row 4', description: "neko", rowId: ".neko" },
        { title: 'Row 5', description: "hacker", rowId: ".hacker" },
        { title: 'Row 6', description: "dado", rowId: ".dado" }
    ]

    const sections = [{ title: "Section 1", rows: rows }, {title: "Section 2", rows: rows}]

    const button = {
        buttonText: 'ABRIR O MENU',
        description: "BOMDIA SEMPAI\ntestando\nEspaços\nLançamentos",
        sections: sections,
        listType: 1
    }

    await conn.sendMessage(m.chat, button, MessageType.listMessage)

    // send a buttons message!
    const buttons = [
        { buttonId: 'id1', buttonText: { displayText: 'Button 1' }, type: 1 },
        { buttonId: 'id2', buttonText: { displayText: 'Button 2' }, type: 1 }
    ]

    const buttonMessage = {
        contentText: "Hi it's button message",
        footerText: 'Hello World',
        buttons: buttons,
        headerType: 1
    }

    //await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
    //return await conn.relayMessage(
    //    m.chat,
    //    template.message,
    //    { messageId: template.key.id }
    //)

    // fecha o handle
}
handler.help = ['hinata']
handler.tags = ['internet']
handler.command = /^(hinata)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler
