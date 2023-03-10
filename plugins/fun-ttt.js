import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
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

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `${lenguajeGB['smsAvisoAG']()}πππΏπΌπππΌ πΌππππππ ππππΌ ππππΌππΏπ ππ ππΌ ππΌππΌ ππ πππππππ πΌπ½πΌππΏπππΌπ πππΎπππ½πΌ *salir*\nππΌππ½πππ ππππΏππ πππππππΌπ ππΌ ππΌππΌ πππΌππΏπ ππ πΎπππΌππΏπ *${usedPrefix}delttt*\n\nπππππππ ππ πππππ πππΌππππ ππ πππ ππππ\nππ πππ ππΌππ ππ πππΌππ, πππππ *out*\nπππ πΎπΌπ πΌπππ πΏπππππ πππ ππππ πππππ πππ πΎππππΌππΏ *${usedPrefix}delttt*`
if (!text) throw `${lenguajeGB['smsAvisoFG']()}πΏππ½π πΏπ πΌπππππΌπ ππ ππππ½ππ πΌ ππΌ ππΌππΌ\nπππππππ\n*${usedPrefix + command} Sala GatoBot*\n\nπππ ππππ πΌπΏπΏ πΌ ππΌππ ππ πππ ππππ\nπππΌππππ\n*${usedPrefix + command} Room GatoBot*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}πΌππππππ ππ ππΌ ππππΏπ πΌ ππΌ ππΌππΌ *${text}*\nππΌ ππππΏππ ππππΌπ!! πΌ\n\nπππππππ ππΌπ ππππππΏ πππ ππππ *${text}*\nπππ πΎπΌπ πππΌπ πππ!! π`, wm, null, [['ππͺπ πππ£π ππ‘ ππππ€π§ π€', 'π»'] ], fkontak, m)

await conn.sendButton(m.chat, `${lenguajeGB['smsAvisoRG']()}β­οΈ *ClΓ‘sico Juego del Gato o 3 en raya* β\n\n*ΒΏCΓ³mo jugar?*\n_Responde al Juego con un NΓΊmero, el mensaje debe contener la posiscion en la que quieras estar (1,2,3,4,5,6,7,8,9)_\n\n*How to play?*\n_Answer the Game with a Number, the message must contain the position you want to be in (1,2,3,4,5,6,7,8,9)_`, wm, null, [['π½ ππ πππΌπΎππΌπ', 'ok'] ], fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'β',
O: 'β­',
1: '1οΈβ£',
2: '2οΈβ£',
3: '3οΈβ£',
4: '4οΈβ£',
5: '5οΈβ£',
6: '6οΈβ£',
7: '7οΈβ£',
8: '8οΈβ£',
9: '9οΈβ£',
}[v]})
let str = `π πππππ ππππ ππ ππΌππΌ | ππΌππ
π« ππππΌπΏππππ *:* πππΌππππ
*βββββββββ*
β = @${room.game.playerX.split('@')[0]}
β­ = @${room.game.playerO.split('@')[0]}
*βββββββββ*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*βββββββββ*
πππππ πΏπ *:* ππππ ππ 
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendButton(m.chat, `πΌ πππππ ππππ ππ ππΌππΌ | ππΌππ

π ππππππΌππΏπ πΌπ ππππππΏπ ππππΌπΏππ ππππΏπ πππππππΌπ πΎππ ππ π½ππππ πΏπ πΌπ½πΌππ π πππΌππΏπ ππ πΎπππΌππΏπ 
*${usedPrefix + command} ${text}*

ππ πππππππ πΌπ½πΌππΏπππΌπ ππΌ ππΌππΌ πππΌ ππ πΎπππΌππΏπ *${usedPrefix}delttt*


ππΌπππππ πππ πππ πππΎπππΏ πππΌπππ πππ πΎπΌπ πππππ ππππ πππ π½πππππ π½ππππ ππ πππππ πππ πΎππππΌππΏ
*${usedPrefix + command} ${text}*

ππ πππ ππΌππ ππ πππΌππ πππ ππππ πππ πππ πΎππππΌππΏ *${usedPrefix}delttt*`, wm, imgplay, [['π ππππππ πΌπ πππππ | ππππ ππΌππ', `${usedPrefix + command} ${text}`]], fkontak, m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
