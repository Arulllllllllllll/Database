case 'culik': {
if (args.length < 1) return m.reply('Masukkan Id Grup !!')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
arul09.groupParticipantsUpdate(args[0], pantek)
}
break