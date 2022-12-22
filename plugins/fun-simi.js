import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝑬𝒔𝒄𝒓𝒊𝒃𝒂 𝒖𝒏 𝒕𝒆𝒙𝒕𝒐 𝒑𝒂𝒓𝒂 𝒉𝒂𝒃𝒍𝒂𝒓 𝒄𝒐𝒏𝒎𝒊𝒈𝒐\n\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎\n*${usedPrefix + command} Hola Gato Bot*\n\n𝙒𝙍𝙄𝙏𝙀 𝘼 𝙏𝙀𝙓𝙏 𝙏𝙊 𝙏𝘼𝙇𝙆 𝙏𝙊 𝙈𝙀\n\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Hello Gato Bot*`
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=es`)    //(`https://simsimi.info/api/?text=${text}&lc=es`)    
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
//m.reply(`${tes}`) 
conn.sendHydrated(m.chat, `${tes}`, `𝘼𝙄 | ${wm}`, null, null, null, null, null, [
['𝐕𝐨𝐥𝐯𝐞𝐫 𝐚𝐥 𝐦𝐞𝐧𝐮 | 𝐁𝐚𝐜𝐤 𝐭𝐨 𝐦𝐞𝐧𝐮 ☘️', '/menu']
], m)
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'gato']
export default handler



