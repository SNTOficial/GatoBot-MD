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
  let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'πππ πΌπ’ππππ - π±ππ', 'jpegThumbnail': null}}}
   if (chat.antiTraba && m.text.length > 4000) { //Cantidad mΓ‘xima de caracteres aceptados en un mensaje//
    if (isAdmin) return conn.sendMessage(m.chat, { text: `π¬π πππππππππππππ @${m.sender.split("@")[0]} πππππ ππ ππππππ ππ πππππ πππ ππππππππ ππππππ ππππππππππ -.-!`, mentions: [m.sender] }, { quoted: fakemek })
    await conn.sendButton(m.chat, `*[ ! ] πΊπ πππππππ ππ πππππππ πππ ππππππππ ππππππ ππππππππππ [ ! ]*\n`, `${isBotAdmin ? '' : 'π΅π πππ πππππ, ππ πππππ πππππ ππππ :v'}`, author, ['[ πππ¬πππ­π’π―ππ« ππ§π­π’ ππ«ππππ¬ ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin) {
        conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
        	setTimeout(() => { 
        	conn.sendMessage(m.chat, { text: `πππ«πππ« ππ₯ ππ‘ππ­ ππ¨π¦π¨ π₯ππ’ππ¨ β\n${"\n".repeat(400)}\n=> π¬π ππππππ : wa.me/${m.sender.split("@")[0]}\n=> π¨ππππ : ${name}\n[ ! ] π¨ππππ ππ ππππππ ππ πππππ πππ ππππππππ ππππππ ππππππππππ πππ πππππ πππππππππ ππππππ ππ πππ ππππππππππππ`, mentions: [m.sender] }, { quoted: fakemek })
        }, 0)
        setTimeout(() => { 
        	conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }, 1000)
        } else if (!bot.restrict) return m.reply('[ ! ] π·πππ ππππππππ ππππππππ ππ πππππππππππ, ππ ππππ πππππ πππ ππππππππ ππ ππππ πππππππππππ!')
    }
    return !0
}
