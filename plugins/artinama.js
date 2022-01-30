let request = require('request')
let cheerio = require('cheerio')

let handler = async (m, { text }) => {
  if (!text) throw 'Qual é o nome?'
  let nama = text
  request.get({
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'http://www.primbon.com/arti_nama.php?nama1=' + nama + '&proses=+Submit%21+',
  }, function (error, response, body) {
    let $ = cheerio.load(body)
    var y = $.html().split('arti:')[1]
    var t = y.split('method="get">')[1]
    var f = y.replace(t, " ")
    var x = f.replace(/<br\s*[\/]?>/gi, "\n")
    var h = x.replace(/<[^>]*>?/gm, '')
    console.log("" + h)
    m.reply(
      `
      O significado do nome ${nama} é
-----------------------------------
         Nome ${nama} ${h}
         
-----------------------------------
`)
  })
}
handler.help = ['artinama'].map(v => v + ' <nama>')
handler.tags = ['kerang']
handler.command = ['artinama']

module.exports = handler