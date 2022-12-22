let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝒀𝒂 𝒆𝒔 𝒉𝒐𝒓𝒂 𝒅𝒆 𝒒𝒖𝒆 𝒕𝒆 💍 𝑪𝒂𝒔𝒆𝒔 𝒄𝒐𝒏 ${toM(b)}, 𝑳𝒊𝒏𝒅𝒂 𝑷𝒂𝒓𝒆𝒋𝒂 😉💓*

*${toM(a)}, 𝙄𝙩'𝙨 𝙖𝙗𝙤𝙪𝙩 𝙩𝙞𝙢𝙚 𝙮𝙤𝙪 💍 𝙈𝙖𝙧𝙧𝙮 ${toM(b)}, 𝘾𝙪𝙩𝙚 𝙋𝙤𝙪𝙥𝙡𝙚 🤩💓*`, null, {
mentions: [a, b]
  
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
export default handler
