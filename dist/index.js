"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const sort_1 = require("./sort");
const bot = new grammy_1.Bot("7452038255:AAGotzzpObaBOBzpc4lDViCVPLfXlIdEwo8");
bot.command("start", (ctx) => {
    setInterval(() => {
        ctx.reply((0, sort_1.Sortsignal)(), { parse_mode: "Markdown" });
    }, 6000);
});
bot.start();
