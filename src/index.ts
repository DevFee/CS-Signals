import { Bot } from "grammy";
import { Sortsignal } from "./sort"
const bot = new Bot("7452038255:AAGotzzpObaBOBzpc4lDViCVPLfXlIdEwo8")

bot.command("start", (ctx) => {
    if (ctx.chat.id === -1002213183820) {
        ctx.reply("🎲 \*Iniciando...\*", {parse_mode: "Markdown"})
        setInterval(() => {
            ctx.reply(Sortsignal(), {parse_mode: "Markdown"});
        }, 300000);
    } else {
        ctx.reply(`
\*❌ Este bot não tem acessso a chats privados!\*

📲 Contate \*@tr4ckdnv\* para obter acesso ao grupo de sinais deste bot.
            `, {parse_mode: "Markdown"});
    }
});

bot.start()

