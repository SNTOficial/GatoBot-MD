let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}š¬ššššššš @ššš š ššššššš šš šššššš\nššš ššššššš @ššš šš šššš ššš šššš` 

if (command == 'gay2') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *GAY*_ š³ļøāš`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'lesbiana') { 
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ š³ļøāš`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'pajero') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ šš¦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'pajera') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()}*_ šš¦`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'puto') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MĆS INFORMACIĆN A SU PRIVADO š„š„µ XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'puta') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()},* *MĆS INFORMACIĆN A SU PRIVADO š„š„µ XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}

 // ------------------------------------------------------------------------------------------------------------------------------------------------
  
if (command == 'manco') {
let juego = `_*${text.toUpperCase()}* *ES/IS* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} š©*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------  
  
if (command == 'manca') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} š©*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------ 
  
if (command == 'rata') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} š COME QUESO š§*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
  
if (command == 'prostituto') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} š«¦š, QUIEN QUIERE DE SUS SERVICIOS? XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
// ------------------------------------------------------------------------------------------------------------------------------------------------   
  
if (command == 'prostituta') {
let juego = `_*${text.toUpperCase()}* *ES* *${(500).getRandom()}%* *${command.replace('how', '').toUpperCase()} š«¦š, QUIEN QUIERE DE SUS SERVICIOS? XD*_`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
  
 // ------------------------------------------------------------------------------------------------------------------------------------------------   
if (command == 'love') {
let juego = `*ā¤ļøā¤ļø MEDIDOR DE AMOR ā¤ļøā¤ļø*\n*_El amor de ${text.toUpperCase()} ES DE ${(500).getRandom()}% Deberias pedirle que sea tu  novia/o ?_*`.trim()
await conn.reply(m.chat, juego, m, m.mentionedJid ? { mentions: m.mentionedJid } : {})}
//conn.sendHydrated(m.chat, juego, wm, null, md, 'š®šššš©šš-š“š«', null, null, [
//['š“ššš šššššš | š®šššš šššš š”', '#juegosmenu'],
//['š¶ššš ššš | šØšššš š¤­', `${usedPrefix + command} ${text.toUpperCase()}`],
//['š½ššššš šš šššš | š©ššš šš šššš āļø', '/menu']
//], m, m.mentionedJid ? {
//mentions: m.mentionedJid
//} : {})} 
}
handler.help = ['love', 'gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map(v => v + ' @tag | nombre')
handler.tags = ['calculator']
handler.command = /^love|gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto/i
handler.exp = 100
export default handler
