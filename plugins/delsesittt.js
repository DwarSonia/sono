let handler = async (m, { conn, text }) => {
	conn.game = conn.game ? conn.game : {}
	try {
		if (conn.game) {
			delete conn.game
			conn.reply(m.chat, `Excluir sessão com sucesso ttt`, m)
		} else if (conn.game) {
			m.reply(`Sessão ttt🎮 não existe`)
		} else throw '?'
	} catch (e) {
		m.reply('danificado')
	}
}
//BY RIZXYU
handler.help = ['delsesittt']
handler.tags = ['game']
handler.command = /^(delsesittt|dellsesitt)$/i
handler.limit = true

handler.register = true
handler.fail = null

module.exports = handler
