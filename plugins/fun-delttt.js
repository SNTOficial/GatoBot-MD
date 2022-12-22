import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, `${lenguajeGB['smsAvisoFG']()}𝑵𝒐 𝒆𝒔𝒕𝒂𝒔 𝒆𝒏 𝒏𝒊𝒏𝒈𝒖𝒏𝒂 𝒑𝒂𝒓𝒕𝒊𝒅𝒂 𝒆𝒏 𝒆𝒍 𝒋𝒖𝒂𝒈𝒐 𝒕𝒓𝒆𝒔 𝒆𝒔 𝒓𝒂𝒚𝒂\n\n𝒀𝒐𝒖 𝒂𝒓𝒆 𝒏𝒐𝒕 𝒊𝒏 𝒂𝒏𝒚 𝒈𝒂𝒎𝒆𝙄 𝑮𝒂𝒎𝒆 3 𝒊𝒏 𝒔𝒕𝒓𝒊𝒑𝒆𝒔`, wm, null, [['💫 𝑰𝒏𝒊𝒄𝒊𝒂𝒓 𝒑𝒂𝒓𝒕𝒊𝒅𝒂 | 𝒔𝒕𝒂𝒓𝒕 𝒈𝒂𝒎𝒆', `${usedPrefix}ttt sala nueva`]], fkontak, m)
delete conn.game[room.id]

await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}𝑳𝒂 𝒔𝒂𝒍𝒂 𝒕𝒓𝒆𝒔 𝒆𝒏 𝒓𝒂𝒚𝒂 𝒇𝒖𝒆 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒂\n\n𝑻𝒉𝒆 𝒕𝒉𝒓𝒆𝒆 𝒊𝒏 𝒂 𝒓𝒐𝒘 𝒓𝒐𝒐𝒎 𝒘𝒂𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒕𝒆𝒅`, wm, null, [['ᵛᵒˡᵛᵉʳ ᵃˡ ᵐᵉⁿᵘ | ᵇᵃᶜᵏ ᵗᵒ ᵐᵉⁿᵘ ☘️', '/menu'] ], fkontak, m)}  
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
