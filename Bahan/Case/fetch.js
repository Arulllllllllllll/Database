case 'fetch':
if(!q) throw noLink()
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
m.reply(bu)
})   
break