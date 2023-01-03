let handler = async (m, { conn, command, text }) => {
if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
🥵 *JODER ACABAS DE VIOLARL@ !*🥵
*Acabas de violar a la perra de* *${text}* ⁩ *a 4 patas mientras te gemias como una maldita zorra "𝐀𝐚𝐚𝐡.., 𝐀𝐚𝐚𝐡𝐡, 𝐬𝐢𝐠𝐮𝐞, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬, 𝐧𝐨 𝐩𝐚𝐫𝐞𝐬.." Y las has dejado tan reventada que no puede sostener ni su propio cuerpo la maldita puta!*
*${text}* 
🤤🥵 *¡YA TE VIOLARON!* 🥵🤤`, null, { mentions: [user] })
}

handler.command = /^(follar|violar)/i
handler.fail = null
handler.register = true
export default handler
