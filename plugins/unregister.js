const { createHash } = require('crypto')
let handler = async function (m, { args, usedPrefix }) {
  if (!args[0]) throw `Número de série kosong\nHarap Verifique o número de série Mu..\nModelo:\n${usedPrefix}ceksn`
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Número de série errado'
  user.registered = false
  m.reply(`Unreg Sucesso`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

