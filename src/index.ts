import { Bot } from "grammy";
const bot = new Bot("7452038255:AAGotzzpObaBOBzpc4lDViCVPLfXlIdEwo8")

bot.command("start", (ctx) => {
    setInterval(() => {
        ctx.reply("hello world!");    
    }, 1000)
})

bot.start()