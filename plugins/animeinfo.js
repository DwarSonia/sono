let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Hum... Onde está o Texto?\n\nExemplo:\n${usedPrefix + command} naruto`
  let res = await fetch(API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
  //Scrape Genre MAL by DwiR
  let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
  if (!res2.ok) throw await res2.text()
  let html = await res2.text()
  let { document } = new JSDOM(html).window
  let genAnim = [...document.querySelectorAll('div[class="spaceit_pad"] > * a')].map(el => el.href).filter(href => href.startsWith('/anime/genre/'))
  let animeingfo = `✨️ *Título:* ${title}
🎆️ *Episódios:* ${episodes}
🎗️ *Gênero:* ${genAnim.join(", ")}
➡️ *Data Inicial:* ${start_date}
🔚 *Data Final:* ${end_date}
💬 *Tipo:* ${type}
💌️ *Rating:* ${rated}
❤️ *Score:* ${score}
👥 *Membros:* ${members}
💚️ *Sinopse:* ${synopsis}
🌐️ *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <judul>']
handler.tags = ['internet']
handler.command = /^(anime|animeinfo)$/i
//maapin fatur :<
module.exports = handler