let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `exemplo:\n${usedPrefix + command} 1 2\n\nentão o resultado é a surata Al-Fatihah verso 2 junto com o áudio, e o verso é apenas 1`
    if (isNaN(args[0]) || isNaN(args[1])) throw `exemplo:\n${usedPrefix + command} 1 2\n\nentão o resultado é a surata Al-Fatihah verso 2 junto com o áudio, e o verso é apenas 1`

    let res = await fetch(global.API('https://islamic-api-indonesia.herokuapp.com', '/api/data/quran', { surah: args[0], ayat: args[1] }))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (json.code != 200) throw json
    let mes = `
${json.result.data.text.arab}
    
${json.result.data.translation.id}
( Q.S ${json.result.data.surah.name.transliteration.id} : ${json.result.data.number.inSurah} )
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, json.result.data.audio.primary, 'audio.mp3', '', m, 0, { mimetype: 'audio/mp4' })
}
handler.help = ['alquran <114> <1>']
handler.tags = ['quran']
handler.command = /^(al)?quran$/i
module.exports = handler