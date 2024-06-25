import { Bot } from "grammy";
import { Sortsignal } from "./sort"
const bot = new Bot("7452038255:AAGotzzpObaBOBzpc4lDViCVPLfXlIdEwo8")

bot.command("start", (ctx) => {
    setInterval(() => {
    ctx.reply(Sortsignal(), {parse_mode: "Markdown"});
    }, 6000);
});

bot.start()

