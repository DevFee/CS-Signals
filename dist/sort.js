"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sortsignal = void 0;
function Sortsignal() {
    const signalMap = [
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦"
    ];
    let starsCount = 0;
    const maxBombs = 5;
    const minBombs = 3;
    const starEmoji = "⭐";
    const chanceThreshold = 0.4;
    // Obtém a hora atual e adiciona 5 minutos
    let now = new Date();
    now.setMinutes(now.getMinutes() + 5);
    let horas = now.getHours();
    let minutos = now.getMinutes();
    // Formata as horas e minutos para garantir dois dígitos
    let horarioFormatado = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    // Sorteia as estrelas no mapa de sinais
    for (let i = 0; i < signalMap.length; i++) {
        if (starsCount >= maxBombs) {
            break;
        }
        const randomCalculation = Math.random() * 2;
        if (randomCalculation >= 1 && Math.random() < chanceThreshold) {
            signalMap[i] = starEmoji;
            starsCount++;
        }
    }
    // Monta a nova mensagem do mapa
    let newMap = `
🚨 *ENTRADA CONFIRMADA* 🚨

💣 Bombas: *${Math.round(Math.random() + 3)}*
🎲 Acerto: *${Math.round(Math.random() * 30 + 70)}%*
⏳ Válido: *${horarioFormatado}*
🎯 Entrada:

`;
    let letters = 0;
    for (let i = 0; i < signalMap.length; i++) {
        newMap += `${signalMap[i]}`;
        letters++;
        if (letters === 5) {
            newMap += `\n`;
            letters = 0;
        }
    }
    newMap += `
*VÁLIDO PARA TODAS AS PLATAFORMAS!*
    `;
    // Verifica se o número de estrelas é menor que o mínimo e retorna uma mensagem diferente se necessário
    if (starsCount < minBombs) {
        let nextSignalTime = new Date();
        nextSignalTime.setMinutes(nextSignalTime.getMinutes() + 5);
        let nextSignalHour = nextSignalTime.getHours();
        let nextSignalMinute = nextSignalTime.getMinutes();
        let nextSignalFormatted = `${nextSignalHour.toString().padStart(2, '0')}:${nextSignalMinute.toString().padStart(2, '0')}`;
        return `
* Ops... *🫤
Parece que o horário não está pagando bem, mas iremos realizar outra pesquisa para verificar o melhor sinal para você usuário!

⏳ O próximo sinal será enviado às ${nextSignalFormatted}`;
    }
    return newMap;
}
exports.Sortsignal = Sortsignal;
