let levelling = require('../lib/levelling')
module.exports = {
	before(m) {
		let user = global.db.data.users[m.sender]
		if (!user.autolevelup) return !0
		let before = user.level * 1
		while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++

		if (before !== user.level) {
			m.reply(`
Parab?ns, voc? subiu de n?vel!
*${before}* -> *${user.level}*
use *.profile* para verificar
	`.trim())
		}
	}
}
