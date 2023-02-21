/* 
There's a tournament of 2 team matches. The first team is the home team. A result of 1 means the home team wins.
Wins are worth 3 points.
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ],
  "results": [0, 1, 1]
}

Find the winner
*/

function tournamentWinner(competitions, results) {
  const score = {};
  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 1) {
      score[competitions[i][0]] = (score[competitions[i][0]] ?? 0) + 3;
    } else {
      score[competitions[i][1]] = (score[competitions[i][1]] ?? 0) + 3;
    }
  }
  return Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
}

//nullish coalescing operator ?? decides if score[competitions[i][0]] exists. If it does, add 3 to score.
// If not, set score to 0 and then add 3.

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;