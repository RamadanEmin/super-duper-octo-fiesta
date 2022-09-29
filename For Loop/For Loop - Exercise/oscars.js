function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let numberOfAssessors = Number(input[2]);
    let assesorsName = "";
    let assesorsPoint = 0;

    for (let i = 3; i < input.length; i++) {
        assesorsName = input[i].length;
        i++;
        assesorsPoint = Number(input[i]);
        academyPoints += (assesorsName * assesorsPoint) / 2;
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }
    if (academyPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);
