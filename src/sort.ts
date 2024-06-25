export function Sortsignal() {
    const signalMap: string[] = [
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦",
        "🟦", "🟦", "🟦", "🟦", "🟦"
    ];

    let starsCount = 0;
    const maxBombs = 6;
    const minBombs = 3;
    const starEmoji = "⭐";
    const chanceThreshold = 0.4;

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

    let newMap = `
🚨 \*ENTRADA CONFIRMADA\* 🚨

💣 Bombas: \*${Math.round(Math.random() + 3)}\*
🎲 Acerto: \*${Math.round(Math.random() * 30 + 70)}\*
⏳ Valido: \*${new Date().getHours()}:${new Date().getMinutes()+3}\*
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
\*VALIDO PARA TODAS AS PLATAFORMAS!\*
    `
    if (starsCount < minBombs) {
        return `
\* Opps... \*🫤
Parece que o horario não tá pagando bem, Mas iremos realizar outra pesquisa para verificar o melhor sinal para você usuario!

⏳ o proximo sinal será enviado as ${new Date().getHours()}:${new Date().getMinutes()+5}`}
    return newMap;
}
