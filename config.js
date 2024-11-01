const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here okay here remind it in your brain not in your ass get it we're mendez🫵,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255749750707";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_43_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQzLFxuICAgICAgICA1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM5LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU4LFxuICAgICAgICA4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDTTZyU2lXTkFHelRncElaN1BrdjZ3U2F1QlFCeE93Q0JpQU9ML2dnZjRZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjTktLVVpQeVRFLTlKbjFFcU5ETUd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzMjg2Y2VhLTlmMDQtNDNmMC05YmU4LWNjMDEzZjE4NjBiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDYsXG4gICAgICAyMTUsXG4gICAgICAxMDEsXG4gICAgICAyNSxcbiAgICAgIDExOCxcbiAgICAgIDIyNCxcbiAgICAgIDE0NCxcbiAgICAgIDE1NCxcbiAgICAgIDIyLFxuICAgICAgMzEsXG4gICAgICAxNjMsXG4gICAgICAyMjMsXG4gICAgICAyMjUsXG4gICAgICAxNjQsXG4gICAgICAxODYsXG4gICAgICAyNDYsXG4gICAgICA4LFxuICAgICAgMTYzLFxuICAgICAgNTIsXG4gICAgICAyMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTgsXG4gICAgICAyMzksXG4gICAgICAxNTcsXG4gICAgICAxMjIsXG4gICAgICAyMDgsXG4gICAgICAxNDQsXG4gICAgICAyMixcbiAgICAgIDE0NCxcbiAgICAgIDE3NSxcbiAgICAgIDIyLFxuICAgICAgMjMzLFxuICAgICAgNTgsXG4gICAgICAxNjUsXG4gICAgICAxODQsXG4gICAgICA2NSxcbiAgICAgIDU2LFxuICAgICAgOTEsXG4gICAgICAxNzgsXG4gICAgICAxNzksXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDU3VEVEUkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc0OTc1MDcwNzo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIigtXy0pIPCdkIPwnZCU8J2Qg/CdkJTwnZCUX/CdkIzwnZCE8J2QjfCdkIPwnZCZIPCdkJXwnZ+SICgtXy0pXCIsXG4gICAgXCJsaWRcIjogXCIyNjI2NTkxMjc2NDAxNjk6OTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVBnM3JVRkVKZnhrYmtHR0FzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZRWR3MmFIUFdmd092ck1UQWFrdjBiVEZlWkRMTlNRMnlkQ05uRXZ1WUZZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImp3WjdBZ3MzS2duV3NuYjUvL1htTTB0V05rSzU0TTJQNFBkblNCNXlDTlN5YVdLTkpyb0ErM0RvL0dSZURwUWdMd3ovd01sUnJyZzZZMmtpYmMwL0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitpZEw4U0IrendwV01qamVJdVhLdXo2dm5sM2xTNDdNdDdJWVpJeDZRYmJkSVRrcjVQc00wM2ZGY1g5OElZRWFnWEtoUkxKdUxTOVZyVHlzbGE0TkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc0OTc1MDcwNzo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA0NDM0MjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQaVFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBpUS5qc29uIjogIntcImtleURhdGFcIjpcIjc5dmtQbEROaDlFM2J0dmk1U1ErekkyQzNrZzVwUWIvaXE5RWk0dnZMTUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1NDg3ODcyMyxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDUsOV19LFwidGltZXN0YW1wXCI6XCIxNzMwNDQzMzk1MDA3XCJ9Igp9"  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
