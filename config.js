const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
global.log0 = fs.readFileSync("./media/fenzo.jpg")
global.thumb = fs.readFileSync("./media/fenzo.jpg")
global.err4r = "https://telegra.ph/file/7188012d573871aaf4fa0.jpg"
global.owner = ['62859194145686','62859194145686','62859194145686']
global.lolhuman = "RelzzAPIs"
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = []
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "© AzzBotz"
global.packname2 = "ᴿ᭄ AZZ ×፝֟͜×"
global.author = "ᴿ᭄ AZZ ×፝֟͜×"
global.sessionName = "session"
global.namebot = "©AzzBotz"
global.linkgrupss = "https://chat.whatsapp.com/G3ydGzHeZ825IU4RjLuToY"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: '*Success!*',
    admin: '*Fitur Khusus Admin Group!*',
    botAdmin: '*Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '*Fitur Khusus Owner Bot*',
    group: '*Fitur Digunakan Hanya Untuk Group!*',
    private: '*Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '*Fitur Khusus Pengguna Nomor Bot*',
    wait: '*Silahkan Menunggu!*',
    linkm: 'Linknya Mana Kak?',
    ban: '*Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner*'
}
global.limitawal = {
    premium: "Infinity",
    free: 9999,
    monayawal: 99999
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 9999
}
// Beli Di Zenz Yo
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Isi Api Mu Di sini
global.APIKeys = {
	'https://zenzapis.xyz': 'BagasPrdn',
	'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://violetics.pw': 'beta'
}
//Thank Fax Bot
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
