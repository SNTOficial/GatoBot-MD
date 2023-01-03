let handler = async (m, { conn, groupMetadata, text, command}) => {
  if (!m.mentionedJid[0] && !m.quoted) throw 'Etiqueta a alguien del grupo para hacerle alguna acción'
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let participants = groupMetadata.participants
  conn.reply(m.chat, `Le acabas de ${command} ${text} a *@${user.split('@')[0]}* 🥵`, null, { mentions: [user] })

}
handler.help = ['acciones']
handler.tags = ['acciones']
handler.command = /^(coger|dar|enviar|meter|chupar|metersela|retar)$/

handler.group = true

export default handler
