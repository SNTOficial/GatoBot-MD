import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}š¬šššššš šš ššššš šššš šššššš ššššššš\n\nššššššš\n*${usedPrefix + command} Hola Gato Bot*\n\nššššš š¼ šššš šš šš¼šš šš šš\n\nššš¼šššš\n*${usedPrefix + command} Hello Gato Bot*`
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=es`)    //(`https://simsimi.info/api/?text=${text}&lc=es`)    
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
//m.reply(`${tes}`) 
conn.sendHydrated(m.chat, `${tes}`, `š¼š | ${wm}`, null, null, null, null, null, [
['ššØš„šÆšš« šš„ š¦šš§š® | šššš¤ š­šØ š¦šš§š® āļø', '/menu']
], m)
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'gato']
export default handler



