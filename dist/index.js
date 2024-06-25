"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const sort_1 = require("./sort");
const bot = new grammy_1.Bot("7452038255:AAGotzzpObaBOBzpc4lDViCVPLfXlIdEwo8");
bot.command("start", (ctx) => {
    if (ctx.chat.id === -1002213183820) {
        setInterval(() => {
            ctx.reply((0, sort_1.Sortsignal)(), { parse_mode: "Markdown" });
        }, 300000);
    }
    else {
        ctx.reply(`
\*❌ Este bot não tem acessso a chats privados!\*

📲 Contate \*@tr4ckdnv\* para obter acesso ao grupo de sinais deste bot.
            `, { parse_mode: "Markdown" });
    }
});
bot.start();
