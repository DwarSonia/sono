const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Você já está registrado\nQuer se registrar novamente?${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Formato incorreto\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Os nomes não podem ficar vazios (Alphanumeric)'
  if (!age) throw 'A idade não pode ficar em branco (Angka)'
  age = parseInt(age)
  if (age > 120) throw 'Idade muito velha 😂'
  if (age < 5) throw 'Os bebês podem digitar de acordo com o formato bjir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Registo realizado com sucesso!

╭─「 Info 」
│ Nome: ${name}
│ Idade: ${age} anos
│ SN: ${sn}
╰────
*se o seu SN estiver faltando, digite${usedPrefix}ceksn
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

