"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("7452038255:AAGotzzpObaBOBzpc4lDViCVPLfXlIdEwo8");
bot.command("start", (ctx) => {
    setInterval(() => {
        ctx.reply("hello world!");
    }, 1000);
});
bot.start();
