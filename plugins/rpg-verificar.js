import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `${iig}ππΌ ππππΌπ ππππππππΌπΏπ(πΌ)!!\nππ ππππππ πΌππππΌπ ππ ππππππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}unreg numero de serie*\n\nππ ππ πππΎππππΏπΌ ππ ππππππ πΏπ πππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}myns*`
  if (!Reg.test(text)) throw `β οΈ πππππΌππ πππΎπππππΎππ\n\n β³οΈ πππ  ππ πΎπππΌππΏπ: *${usedPrefix + command} nombre.edad*\nππππππππ : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'π El nombre no puede esta vacio'
  if (!age) throw 'π La edad no puede esta vacia'
  if (name.length >= 30) throw 'Fuaaa que largo' 
  age = parseInt(age)
  if (age > 100) throw 'π΄π» Pa esta viejo'
  if (age < 5) throw 'πΌ  Basado, los bebes saben escribir.βοΈπ³ '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 800
global.db.data.users[m.sender].limit += 6
global.db.data.users[m.sender].exp += 305
global.db.data.users[m.sender].joincount += 4
  let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `β­βββ[ *πππππππΎπΌπ | ππππππ* ]βββββ¬£
β *NOMBRE* 
β ${name}
ββββββββββββββββββ
β *EDAD* 
β *${age} aΓ±os*
ββββββββββββββββββ
β *BONO* 
β *$350 XP*
β *$200 GATOCOINS*
β *$2 DIAMANTES*
β°βββββββββββββββββββ¬£`
//let author = global.author
await conn.sendButton(m.chat, caption, `ππ ππππππ πΏπ πππππ ππ πππππππΌ ππ πΎπΌππ πππ ππππππΌ π½ππππΌπ ππ ππππππππ\nπππππππ\n${usedPrefix}unreg numero de serie\n${wm}`, [['πΌππ€π§π ππ¨π©π€π? πππ§πππππππ€(π)!! β', '/profile']], m)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
