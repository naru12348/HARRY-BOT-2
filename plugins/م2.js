let handler = async (m, { conn, command, text }) => {
let love = `
⦓           ⦓🏆⦔          ⦔ـ
⌟🎡⌜ قـسـم الاعـضـاء
⦓           ⦓🏆⦔          ⦔ـ
🍓❯ ⏐ .الـبـنـك 
☫ ⌟لعرض قائمة البنك⌜
🍓❯ ⏐ .الـمـتـجـر 
☫ ⌟لعرض قائمة اصور المتجر⌜
🍓❯ ⏐ .الـوجـوهـات 
☫ ⌟لعرض قائمة الوجوهات⌜ 
🍓❯ ⏐ .لـوجـو-حـب
☫ ⌟لعرض قائمه الاصوات⌜ 
🍓❯ ⏐ .كـومـنـت 
☫ ⌟يعملك كومنت مشهور⌜ 
🍓❯ ⏐ .الـدعـم 
☫ ⌟يبعتلك الفروع الأساسيه⌜
🍓❯ ⏐ .الـمـطـور 
☫ ⌟يبعتلك رقم صاحب البوت⌜
🍓❯ ⏐ .بـروفـايـل 
☫ ⌟يبعتلك قائمة بروفايلك⌜
🍓❯ ⏐ .مـيـمـز 
☫ ⌟يبعتلك ميمز عن الانمي⌜
🍓❯ ⏐ .تـطـقـيـم 
☫ ⌟يبعتلك صور بنت و ولد⌜
🍓❯ ⏐ .جـوده  
☫ ⌟لتحسين جودة الصوره⌜
🍓❯ ⏐ .الـطـقـس  
☫ ⌟يجبلك طقس البلاد⌜
🍓❯ ⏐ .بـاركـود  
☫ ⌟يعملك النص qr code⌜
🍓❯ ⏐ .زخـرفـه 
☫ ⌟يزخرف الكلام بالانجليزي⌜
🍓❯ ⏐ .حـكـمـه 
☫ ⌟البوت يعطيك حـكـمـه⌜
🍓❯ ⏐ .نـصـيـحـه 
☫ ⌟يزخرف الكلام بالانجليزي⌜
🍓❯ ⏐ .تـصـليـح 
☫ ⌟ليظهرلك رسائل البوت⌜
🍓❯ ⏐ .تـنـضـيف 
☫ ⌟لتنضيف اوامر البوت⌜
🍓❯ ⏐ .مـعـلـومـات 
☫ ⌟يبعتلك كل معلومات البوت⌜
🍓❯ ⏐ .الـحـالـه 
☫ ⌟يبعتلك وقت تشغيل البوت⌜
🍓❯ ⏐ .انـضـم 
☫ ⌟ليتم انضمام البوت لي جروبك⌜
🍓❯ ⏐ .الـسـرعـه 
☫ ⌟يبعتلك سرعة البوت⌜
⦓           ⦓🏆⦔          ⦔ـ
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(|م2|م٢| )$/i
export default handler
