//
//By @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad máxima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `𝑬𝒍 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 @${m.sender.split("@")[0]} 𝒂𝒄𝒂𝒃𝒂 𝒅𝒆 𝒆𝒏𝒗𝒊𝒂𝒓 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒒𝒖𝒆 𝒄𝒐𝒏𝒕𝒊𝒆𝒏𝒆 𝒎𝒖𝒄𝒉𝒐𝒔 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] 𝑺𝒆 𝒅𝒆𝒕𝒆𝒄𝒕𝒐 𝒖𝒏 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒒𝒖𝒆 𝒄𝒐𝒏𝒕𝒊𝒆𝒏𝒆 𝒎𝒖𝒄𝒉𝒐𝒔 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 [ ! ]*\n`, `${isBotAdmin ? '' : '𝑵𝒐 𝒔𝒐𝒚 𝒂𝒅𝒎𝒊𝒏, 𝒏𝒐 𝒑𝒖𝒆𝒅𝒐 𝒉𝒂𝒄𝒆𝒓 𝒏𝒂𝒅𝒂 :v'}`, author, ['[ 𝐃𝐞𝐬𝐚𝐜𝐭𝐢𝐯𝐚𝐫 𝐀𝐧𝐭𝐢 𝐓𝐫𝐚𝐛𝐚𝐬 ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `𝐌𝐚𝐫𝐜𝐚𝐫 𝐞𝐥 𝐜𝐡𝐚𝐭 𝐜𝐨𝐦𝐨 𝐥𝐞𝐢𝐝𝐨 ✓\n${"\n".repeat(400)}\n=> 𝑬𝒍 𝒏𝒖𝒎𝒆𝒓𝒐 : wa.me/${m.sender.split("@")[0]}\n=> 𝑨𝒍𝒊𝒂𝒔 : ${name}\n[ ! ] 𝑨𝒄𝒂𝒃𝒂 𝒅𝒆 𝒆𝒎𝒗𝒊𝒂𝒓 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒒𝒖𝒆 𝒄𝒐𝒏𝒕𝒊𝒆𝒏𝒆 𝒎𝒖𝒄𝒉𝒐𝒔 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 𝒒𝒖𝒆 𝒑𝒖𝒆𝒅𝒆 𝒐𝒄𝒂𝒔𝒊𝒐𝒏𝒂𝒓 𝒇𝒂𝒍𝒍𝒐𝒔 𝒆𝒏 𝒍𝒐𝒔 𝒅𝒊𝒔𝒑𝒐𝒔𝒊𝒕𝒊𝒗𝒐𝒔`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] 𝑷𝒂𝒓𝒂 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒓 𝒂𝒄𝒄𝒊𝒐𝒏𝒆𝒔 𝒅𝒆 𝒅𝒍𝒊𝒎𝒊𝒏𝒂𝒄𝒊𝒐𝒏, 𝒎𝒊 𝒑𝒂𝒑𝒊 𝒕𝒊𝒆𝒏𝒆 𝒒𝒖𝒆 𝒆𝒏𝒄𝒆𝒏𝒅𝒆𝒓 𝒆𝒍 𝒎𝒐𝒅𝒐 𝒓𝒆𝒔𝒕𝒓𝒊𝒏𝒈𝒊𝒅𝒐!')
    }
    return !0
}
