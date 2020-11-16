const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const imageToBase64 = require('image-to-base64');
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const menu = require("./lib/menu.js");
const tambahan = require("./lib/tambahan.js")
const donasi = require("./lib/donasi.js");
const info = require("./lib/info.js");
/////////////////
const BotName = 'NAMA BOTMU'; 
const instagram = 'LINK INSTAGRAMU'; 
const telegram = 'LINK TELEMU'; 
const kapanbotaktif = 'KETIKA HANYA DIAKTIFKAN'; 
const youtube = 'LINK YTMU';
//const grupch1 = 'belum ada grup'; 
//const grupch2 = 'belum ada grup' ; 
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] Scan kode qr dengan whatsapp!`);
});

conn.on('credentials-updated', () =>
{

/////fitur////
$url = "https://api.i-tech.id/tools/nulis?key=X6VSmL-Prc4ls-MzSmcG-c2nFM7-Unnm5y&text=restu+ganteng\nbanget";
$header = array(
'Accept: application/json',
);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
$result = curl_exec($ch);
echo $result;

Response Success

{
    "code": "200",
    "status": "success",
    "result": "https://api.i-tech.id/img/nulis.jpg"
}

Response Error

{
    "code": "404",
    "status": "error",
    "pesan": "Data tidak ditemukan."
}