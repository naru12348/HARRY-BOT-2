let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔ـ
⌟🖼️⌜ قـسـم الـصـور 
⦓           ⦓🏆⦔          ⦔ـ
🌱❯ ⏐ .كـانـيـكـي 
☫ ⌟يبعت صور كانيكي⌜
🌱❯ ⏐ . مـادارا 
☫ ⌟يبعت صور مادارا⌜
🌱❯ ⏐ .مـيـنـاتـو 
☫ ⌟يبعت صور ميناتو⌜
🌱❯ ⏐ .مـيـكاسـا 
☫ ⌟يبعت صور ميكاسا⌜
🌱❯ ⏐ . كيوت
☫ ⌟يبعت صور كيوت⌜
🌱❯ ⏐ .قـط 
☫ ⌟يبعت صور قطط⌜
🌱❯ ⏐ .كـلـب
☫ ⌟يبعت صور كلاب⌜
🌱❯ ⏐ .جيمينج 
☫ ⌟يبعت صور جيمينج⌜
🌱❯ ⏐ .رونـالـدو 
☫ ⌟يبعت صور رونالدو⌜
🌱❯ ⏐ .مـيـسـي 
☫ ⌟يبعت صور ميسي⌜
🌱❯ ⏐ .تكنولوجيا 
☫ ⌟يبعت صور تكنولوجيا⌜
🌱❯ ⏐ .عـشـوائـي 
☫ ⌟يبعت صور عشوائيه⌜
🌱❯ ⏐ .عـيـد 
☫ ⌟يبعت صور عيد صاحبي🗿⌜
🌱❯ ⏐ .جـبـل 
☫ ⌟يبعت صور جبال⌜
🌱❯ ⏐ .بـبـجـي 
☫ ⌟يبعت صور ببجي⌜
🌱❯ ⏐ .بلاك-بينك 
☫ ⌟يبعت صور بلاك بينك⌜
🌱❯ ⏐ .درايمون 
☫ ⌟يبعت صور معرفش⌜
🌱❯ ⏐ .هـكـر 
☫ ⌟يبعت صوري عشان انا هكر🗿⌜
🌱❯ ⏐ .كـوكـب 
☫ ⌟يبعت صور كواكب⌜
🌱❯ ⏐ . كـرتـون 
☫ ⌟يبعت صور كرتون⌜
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م9|م٩)$/i
export default handler
