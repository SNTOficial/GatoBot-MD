let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
๐ฅต *JODER ACABAS DE VIOLARL@ !*๐ฅต
*Acabas de violar a la perra de* *${text}* โฉ *a 4 patas mientras te gemias como una maldita zorra "๐๐๐๐ก.., ๐๐๐๐ก๐ก, ๐ฌ๐ข๐ ๐ฎ๐, ๐ง๐จ ๐ฉ๐๐ซ๐๐ฌ, ๐ง๐จ ๐ฉ๐๐ซ๐๐ฌ.." Y las has dejado tan reventada que no puede sostener ni su propio cuerpo la maldita puta!*
*${text}* 
๐คค๐ฅต *ยกYA TE VIOLARON!* ๐ฅต๐คค`, null, { mentions: [user] })
}

handler.command = /^(follar|violar)/i
handler.fail = null
handler.register = true
export default handler
