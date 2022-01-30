// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Insira um relatório'
    if (text.length > 300) throw 'Desculpe Texto Muito Longo, Máximo de 300 Textos!'
    const laporan = `*「 REPORT 」*\nNúmero: wa.me/${m.sender.split`@`[0]}\nMensagem : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️O problema foi relatado ao Proprietário Bot, relatórios falsos não serão respondidos!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler
