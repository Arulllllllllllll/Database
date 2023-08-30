case 'ssweb': {
if (command && !isGroup) throw grupOnly()
if (!text) throw `Example: ${prefix + command} query`
arul09.sendFile(m.chat, global.api("zenz", "/convert/ssweb/v2", { 
url: text 
}, "apikey"), "", m)
}
break