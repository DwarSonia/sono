let fetch = require('node-fetch')
const fs = require('fs-extra')
const { MessageType } = require('@adiwajshing/baileys')
const { reply2, qtod } = require('../lib/replyDB')

let handler = async (m, { conn }) => {
   
    const rows = [
        { title: 'Domingo', description: "Lancamentos de Domingo", rowId: ".domingo" },
        { title: 'Segunda-Feira', description: "Lancamentos de Segunda", rowId: ".segunda" },
        { title: 'Terca-Feria', description: "Lancamentos de Terça", rowId: ".terca" },
        { title: 'Quarta-Feira', description: "Lancamentos de Quarta", rowId: ".quarta" },
        { title: 'Quinta-Feira', description: "Lancamentos de Quinta", rowId: ".quinta" },
        { title: 'Sexta-Feira', description: "Lancamentos de Sexta", rowId: "#sexta" },
        { title: 'Sabado', description: "Lancamentos de Sabado", rowId: "#sabado" }
    ]

    const sections = [{ title: "Section 1", rows: rows }]

    const button = {
        buttonText: 'Selecione o dia...',
        description: '🗓 *Lancamentos de Animes Semanal* 🗓\n\n🗃 *Temporada Atual:* _Inverno_ ❄️',
        sections: sections,
        listType: 1
    }
    //await reply2(m, { conn })
    await conn.sendMessage(m.chat, button, MessageType.listMessage, reply2(m))

    // fecha o handle
}
handler.help = ['animeday']
handler.tags = ['Animes']
handler.command = /^(animeweek|season|temporada|dia)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
module.exports = handler

