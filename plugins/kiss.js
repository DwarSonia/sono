let fetch = require("node-fetch");
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command }) => {
	if (m.quoted && m.quoted.sender) m.mentionedJid.push(m.quoted.sender);
	if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
	link = 'https://hardianto.xyz/api/anime/random?sfw=kiss&apikey=hardianto'
	stiker = await sticker(false, link, global.packname, global.author)
	await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
		quoted: m
	})
	await conn.reply(m.chat, `@${m.sender.split("@")[0]} Acabou de dar um Beijo Gostosinho no ${m.mentionedJid
			.map((user) =>
				user === m.sender ? "themselves " : `@${user.split("@")[0]}`
			)
			.join(", ")}`,m
		);
	
	//else throw json;
};
handler.help = ["kiss", "beijo", "beijao"];
handler.tags = ["fun"];
handler.command = /^(kiss|beijo|beijao)$/i;

module.exports = handler;
