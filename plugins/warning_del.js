let handler = async (m) => {
  let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  if (!mention) throw `Tag/mencione a pessoa!`
  let warn = global.db.data.users[mention].warn
  if (warn > 0) {
    global.db.data.users[mention].warn -= 1
    m.reply('⚠️ *WARNING -1*')
    m.reply(`O administrador reduziu seu aviso, avise agora ${warn - 1}`, mention)
  } else if (warn == 0) {
    m.reply('O usuário não tem aviso')
  }
}

handler.help = ['Delwarn @user']
handler.tags = ['group']
handler.command = /^delwarn$/i

handler.group = true
handler.admin = true

module.exports = handler