let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔ـ
⌟🖼️⌜ قـسـم الـصـور 
⦓           ⦓🏆⦔          ⦔ـ
🧨❯ ⏐ .اسـتـيـكر
☫ ⌟لتحول الصوره لملصق كامل⌜
🧨❯ ⏐ .مـلـصـق
☫ ⌟لتحويل الفيديو لملصق متحرك⌜
🧨❯ ⏐.دائري
☫ ⌟لعمل استيكرات بشكل دائري⌜
🧨❯ ⏐ .سـرقـه
☫ ⌟يغير حقوق الملصقات⌜
🧨❯ ⏐ .فـلـتـر
☫ ⌟يعمل فلتر للملصقات⌜
🧨❯ ⏐ .تـاثـيـر
☫ ⌟يعمل فلتر للملصقات⌜
🧨❯ ⏐ .صـفـع
☫ ⌟لصفع الناس الرخمه 😡❤️⌜
🧨❯ ⏐ .طـبـطـبـه
☫ ⌟لطبطبه علي الناس الكيوت👾⌜
🧨❯ ⏐ .اسـتـيك
☫ ⌟يحول النص لملصق ⌜
🧨❯ ⏐ .ستاكت
☫ ⌟يحول النص لملصق⌜
🧨❯ ⏐ .دمـج ☺+😈
☫ ⌟يدمج اتنين من الايمواجي⌜
🧨❯ ⏐ .نــرد
☫ ⌟جرب حظك كده 😀⌜
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م١٠|م10)$/i
export default handler
