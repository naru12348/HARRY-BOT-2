let handler = async (m, { conn, command, text }) => {
let love = `
*✥━─━⌬〘🏆〙⌬━─━✥*

⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪  ࣪    ࣭     ࣪     ࣭   𝅦𝅦   ࣭     ࣪     ࣭    ࣪  ⬫
⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪▭̷໋̟  ۫ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ۫  ▭̷໋̟۪۬໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪
   ‏

*✥━─━⌬〘🏆〙⌬━─━✥*

 w乇ﾚcoﾶ乇 ｲo 乃oｲ ん乇刀尺ﾘ

乃ﾘ ﾶo丂ｲﾑｷﾑ ﾶoんﾑﾶ乇d

*✥━─━⌬〘🏆〙⌬━─━✥

⦓           ⦓لوفي-بوت⦔          ⦔ـ
قـائـمـة المهام ⁦ᕙ⁠(⁠⇀⁠‸⁠↼⁠‶⁠)⁠ᕗ⁩
⦓           ⦓🏆⦔          ⦔
ـ⌟🛰️⌜ قـسـم الـذكـاء الاصـطـيـنـعـي 
          🏆
اكتب (.م1)
⦓           ⦓🏆⦔          ⦔ـ
⌟🎡⌜ قـسـم الاعـضـاء
          🏆
اكتب (.م2)
⦓           ⦓🏆⦔          ⦔ـ
⌟🍀⌜ قـسـم الـجـروب
          🏆
اكتب (.م3)
⦓           ⦓🏆⦔          ⦔ـ
⌟🌐⌜ قـسـم الـبـحـث
          🏆
اكتب (.م4)
⦓           ⦓🏆⦔          ⦔ـ
⌟🎗️⌜ قـسـم الـتـنـزيـلات 
          🏆
اكتب (.م5)
⦓           ⦓🏆⦔          ⦔ـ
⌟🍄⌜ قـسـم الـتـحـويـلات 
          🏆
اكتب (.م6)
⦓           ⦓🏆⦔          ⦔ـ
⌟🎯⌜ قـسـم الالـعـاب 
          🏆
اكتب (.م7)
⦓           ⦓🏆⦔          ⦔ـ
⌟🔊⌜ قـسـم الاصـوات 
          🏆
اكتب (.م8)
⦓           ⦓🏆⦔          ⦔ـ
⌟🖼️⌜ قـسـم الـصـور 
          🏆
اكتب (.م9)
⦓           ⦓🏆⦔          ⦔ـ
⌟🖼️⌜ قـسـم الاستيكرات
          🏆
اكتب (.م10)
⦓           ⦓🏆⦔          ⦔ـ
⌟🖼️⌜ قـسـم الـمـطـور
          🏆
اكتب (.م11)
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(المهام)$/i
export default handler
