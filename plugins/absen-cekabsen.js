let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return conn.sendButton(m.chat, `Não há faltas em andamento!`, 'Kitagawa ✨', 'Mulai', `${usedPrefix}+absen`, m)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Data: ${date}

${conn.absen[id][2] ? conn.absen[id][2] + '\n' : ''}
╭─「 Lista de Ausências 」
│ Total: ${absen.length}
${list}
╰────`.trim()
    conn.send2Button(m.chat, caption, 'Kitagawa ✨', 'Absen', `${usedPrefix}absen`, 'Hapus', `${usedPrefix}-absen`, m)
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i

module.exports = handler