let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/trendingtwitter', {}, 'APIKEY'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let trd = json.result[0].trends.map((v, i) => `#${i + 1}. (${v.name}) \n*Volume de tweets:* ${v.tweet_volume}\n*Conteúdo Promovido:* ${v.promoted_content? 'Ya' : 'Não'}\n*Inquerir:* ${v.query}\n${v.url}`).join('\n')
  if (json.status) m.reply(trd)
  else throw json
}
handler.help = ['trendtwit', 'trendingtwitter']
handler.tags = ['internet']
handler.command = /^(trend(twit|ingtwitter))$/i

module.exports = handler
