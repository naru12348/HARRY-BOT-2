let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔ـ
⌟🖼️⌜ قـسـم الـصـور 
👑❯ ⏐ .اخرج
☫ ⌟يطلع البوت من الجروب⌜
👑❯ ⏐ .اذاعه
☫ ⌟يبعت رساله لجميع الجروبات⌜
👑❯ ⏐ فتح | قفل صوت_بوت
☫ ⌟يقفل و يفتح صوت البوت⌜
👑❯ ⏐ .فتح | قفل مضادالاسبام
☫ ⌟يقفل و يفتح الاسبام⌜
👑❯ ⏐ .فتح | قفل بوت-اللفرعي
☫ ⌟يقفل و يفتح البوتات الفرعي⌜
👑❯ ⏐ .فتح | قفل مضادالخاص
☫ ⌟يقفل و يفتح خاص البوت⌜
👑❯ ⏐ .فتح | قفل مضادالاتصالات
☫ ⌟يقفل و يفتح الاتصالات ب البوت⌜
👑❯ ⏐ .فتح | قفل جروبات
☫ ⌟يقفل و يفتح الجروبات فقط⌜
👑❯ ⏐ .فتح | قفل برايفت
☫ ⌟يقفل و يفتح البرايفت⌜
👑❯ ⏐ .فتح | قفل الصحين
☫ ⌟يقفل و يفتح أمر الصحين⌜👑❯ ⏐فتح| قفل تقيد☫ ⌟يقفل و يفتح تقيد البوت⌜
⦓           ⦓🏆⦔          ⦔ـ

 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(م11|م١١)$/i
export default handler
