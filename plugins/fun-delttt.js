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
if (room == undefined) return conn.sendButton(m.chat, `${lenguajeGB['smsAvisoFG']()}๐ต๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐ ๐๐ ๐๐๐๐\n\n๐๐๐ ๐๐๐ ๐๐๐ ๐๐ ๐๐๐ ๐๐๐๐๐ ๐ฎ๐๐๐ 3 ๐๐ ๐๐๐๐๐๐๐`, wm, null, [['๐ซ ๐ฐ๐๐๐๐๐๐ ๐๐๐๐๐๐๐ | ๐๐๐๐๐ ๐๐๐๐', `${usedPrefix}ttt sala nueva`]], fkontak, m)
delete conn.game[room.id]

await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}๐ณ๐ ๐๐๐๐ ๐๐๐๐ ๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐\n\n๐ป๐๐ ๐๐๐๐๐ ๐๐ ๐ ๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐๐`, wm, null, [['แตแตหกแตแตสณ แตหก แตแตโฟแต | แตแตแถแต แตแต แตแตโฟแต โ๏ธ', '/menu'] ], fkontak, m)}  
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
