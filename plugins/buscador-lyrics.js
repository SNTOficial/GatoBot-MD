import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππ½ππ πΏπ πππΌ πΎπΌππΎπππ ππΌππΌ ππ½πππππ ππΌ πππππΌ\nπππππππ\n*${usedPrefix + command} Squeeze*\n\nπππππ πππ ππΌππ ππ πΌ ππππ ππ πππ πππ πππππΎπ\nπππΌππππ\n*${usedPrefix + command} Me volvΓ­ a enamorar*`
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
ππππππ | πππππ 
π *${result.title}*

πΌππππ(πΌ) | πΌπππππ
π *${result.author}*


${result.lyrics}


ππππΌπΎπ | πππ
π§‘ *${result.link}*
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['πΏππ¨πππ§πππ§ | πΏπ€π¬π£π‘π€ππ π', `/play ${text}`],
['πππ£πͺ π½πͺπ¨π¦πͺππππ¨ | ππππ§ππππ¨ π', '#buscarmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m)
}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
handler.limit = 1
handler.level = 3
handler.exp = 55
export default handler 
