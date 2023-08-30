case 'slot': {
const sotoy = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇 Win',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🔔',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔 Win',
'🍒 : 🍒 : 🍒 Win',
'🍌 : 🍌 : 🍌 Win'
]
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
 setTimeout( () => {
let sloth =`[  🎰 VIRTUAL SLOT 🎰  ]
------------------------

🍒 : 🍌 : 🍇
${somtoy}<=====
🍇 : 🍌 : 🍒

------------------------

*Keterangan* :
_Jika Mendapatkan 3 Buah Yang Sama_
_Berarti Kamu Menang_

_Contoh : 🍒 : 🍒 : 🍒_ <=====`
arul09.sendButtonText(m.chat, [{ buttonId: '.slot', buttonText: { displayText: '🎰 Slot' }, type: 1 }], sloth, footer, m)
}, 4000)
}
break