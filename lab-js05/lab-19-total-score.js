const FootballPoints = (wins, draws) => {
    const winPoints = 3;
    const drawPoints = 1;
    const totalPoints = (wins * winPoints) + (draws * drawPoints);
    return totalPoints;
}
const wins = 10;
const draws = 7;
const totalPoints = FootballPoints(wins, draws);
console.log(`Win : ${wins} Draw : ${draws} Total : ${totalPoints}`);