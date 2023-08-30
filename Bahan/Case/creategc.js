case 'creategroup':
if (!q) return reply("Masukkan text")
const group = await arul09.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply("sukses", arul09, m.chat)
arul09.sendMessage(group.id, { text: 'Halo!!' })
break