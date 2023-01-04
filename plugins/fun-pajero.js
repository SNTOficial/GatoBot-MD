let handler = async (m, { conn, command, text }) => {
  if (!text) throw `*Ingrese el @ o el nombre de la persona que desee calcular su porcentaje de ${command.replace('how', '')}*`
  conn.reply(m.chat, `
_*${text}* *es 🤪* *${Math.floor(Math.random() * 1039193829)}%* *${command.replace('how', '').toUpperCase()}*_
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'lesbi'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang']
handler.command = /^(pajero|pajera|puto|puta|perra|gay|peruano|peruana|chupapija|pelotudo|pelotuda|sucio|sucia|pendejo|pendeja|ladrón|ladrona|insano|insana|boludo|boluda|pelotudo|pelotuda|lindo|linda|hermosa|hermoso|sexy|loco|loca|trans|©|)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
