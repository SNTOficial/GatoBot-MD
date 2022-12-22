global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`${lenguajeGB['smsAvisoIIG']()}✨ 𝑷𝒖𝒆𝒅𝒆𝒔 𝒖𝒔𝒂𝒓 𝒍𝒐𝒔 𝒃𝒐𝒕𝒐𝒏𝒆𝒔 𝒐 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓 𝒍𝒂 𝒅𝒊𝒇𝒊𝒄𝒖𝒍𝒕𝒂𝒅\n✨ 𝒀𝒐𝒖 𝒄𝒂𝒏 𝒖𝒔𝒆 𝒕𝒉𝒆 𝒃𝒖𝒕𝒕𝒐𝒏𝒔 𝒐𝒓 𝒘𝒓𝒊𝒕𝒆 𝒕𝒉𝒆 𝒅𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒚

𝑵𝒊𝒗𝒆𝒍 𝒅𝒆 𝒅𝒊𝒇𝒊𝒄𝒖𝒍𝒕𝒂𝒅 | 𝑫𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒚 
${Object.keys(modes).join('  |  ')}

𝑬𝒋𝒆𝒎𝒑𝒍𝒐 | 𝑬𝒙𝒂𝒎𝒑𝒍𝒆
${usedPrefix + command} noob
${usedPrefix + command} impossible2

😼 𝑴𝒊𝒆𝒏𝒕𝒓𝒂𝒔 𝒎𝒂𝒔 𝒅𝒊𝒇𝒊𝒄𝒖𝒍𝒕𝒂𝒅 𝒎𝒂𝒚𝒐𝒓 𝒓𝒆𝒄𝒐𝒎𝒑𝒆𝒏𝒔𝒂
😼 𝑴𝒐𝒓𝒆 𝒅𝒊𝒇𝒇𝒊𝒄𝒖𝒍𝒕𝒚 𝒚𝒐𝒖 𝒄𝒂𝒏 𝒈𝒆𝒕 𝒕𝒉𝒆 𝒈𝒓𝒆𝒂𝒕𝒆𝒓 𝒓𝒆𝒘𝒂𝒓𝒅
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝑭𝒂𝒄𝒊𝒍 | 𝑬𝒂𝒔𝒚', `${usedPrefix + command} easy`], 
['😎 𝑫𝒊𝒇𝒊𝒄𝒊𝒍 | 𝑯𝒂𝒓𝒅', `${usedPrefix + command} hard`], 
['🤑 𝑬𝒙𝒕𝒓𝒆𝒎𝒐 | 𝑬𝒙𝒕𝒓𝒆𝒎𝒆', `${usedPrefix + command} extreme`]], m)
  
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, wm, mat, null, null, null, null, null, [
['😋 𝑭𝒂𝒄𝒊𝒍 | 𝑬𝒂𝒔𝒚', `${usedPrefix + command} easy`], 
['😎 𝑫𝒊𝒇𝒊𝒄𝒊𝒍 | 𝑯𝒂𝒓𝒅', `${usedPrefix + command} hard`], 
['🤑 𝑬𝒙𝒕𝒓𝒆𝒎𝒐 | 𝑬𝒙𝒕𝒓𝒆𝒎𝒆', `${usedPrefix + command} extreme`]], m) 
  
let id = m.chat
if (id in global.math) return conn.reply(m.chat, `${lenguajeGB['smsAvisoAG']()}𝑯𝒂𝒚 𝒑𝒓𝒆𝒈𝒖𝒏𝒕𝒂𝒔 𝒔𝒊𝒏 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒆𝒏 𝒆𝒍 𝒄𝒉𝒂𝒕!!\n\n𝒕𝒉𝒆𝒓𝒆 𝒂𝒓𝒆 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏𝒔 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒂𝒏𝒔𝒘𝒆𝒓𝒊𝒏𝒈 𝒊𝒏 𝒕𝒉𝒆 𝒄𝒉𝒂𝒕!!`, global.math[id][0])
//let ii = global.db.data.users[m.sender].limit += 10 math.dia
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `𝑪𝒖𝒂𝒍 𝒆𝒔 𝒆𝒍 𝒓𝒆𝒔𝒖𝒍𝒕𝒂𝒅𝒐 𝒅𝒆 *${math.str} = ?*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝑻𝒊𝒆𝒎𝒑𝒐 | 𝑻𝒊𝒎𝒆
🧭 *${(math.time / 1000).toFixed(0)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒆𝒔𝒕𝒆 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒚 𝒈𝒂𝒏𝒂
🏆 *${math.bonus} 𝑿𝑷*
`, m),
math, 4,
  
await conn.sendHydrated(m.chat, `⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️`, `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒅𝒆 𝒂𝒓𝒓𝒊𝒃𝒂 𝒄𝒐𝒏 𝒍𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂\n\n𝘼𝙉𝙎𝙒𝙀𝙍 𝙏𝙃𝙀 𝙈𝙀𝙎𝙎𝘼𝙂𝙀 𝘼𝘽𝙊𝙑𝙀 𝙏𝙊 𝙆𝙉𝙊𝙒 𝙔𝙊𝙐𝙍 𝘼𝙉𝙎𝙒𝙀𝙍`, null, md, '𝐆𝐚𝐭𝐨𝐁𝐨𝐭-𝐌𝐃', null, null, [ 
['𝑻𝒐𝒑𝒔 | 𝑹𝒂𝒏𝒌𝒊𝒏𝒈 🏆', `${usedPrefix}top`],
['𝑽𝒐𝒍𝒗𝒆𝒓 𝒂𝒍 𝒎𝒆𝒏𝒖 | 𝑩𝒂𝒄𝒌 𝒕𝒐 𝒎𝒆𝒏𝒖 ☘️', `${usedPrefix}menu`]
], m), math, 4,
  
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}𝑺𝒆 𝒂𝒄𝒂𝒃𝒐 𝒆𝒍 𝒕𝒊𝒆𝒎𝒑𝒐!!\n𝑳𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂 𝒆𝒔 *${math.result}*\n\n𝙏𝙄𝙈𝙀 𝙄𝙎 𝙐𝙋!!\n𝙏𝙃𝙀 𝘼𝙉𝙎𝙒𝙀𝙍 𝙄𝙎 *${math.result}*`, wm, null, [['𝙄𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤 | 𝙏𝙧𝙮 𝙖𝙜𝙖𝙞𝙣', `${usedPrefix + command} ${math.mode}`], ['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', `/juegosmenu`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i

export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 30], 
easy: [-10, 10, -10, 10, '*/+-', 20000, 50],
medium: [-40, 40, -20, 20, '*/+-', 30000, 200],
hard: [-100, 100, -70, 70, '*/+-', 40000, 500],
extreme: [-999999, 999999, -999999, 999999, '*/', 40000, 2500],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 50000, 5500],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 60000, 8500]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

// XP
function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
