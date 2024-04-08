var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];

function golfScore(par, strokes) {
    var score = strokes - par;

    if (strokes === 1) {
        return names[0];
    } else if (score <= -2) {
        return names[1];
    } else if (score === -1) {
        return names[2];
    } else if (score === 0) {
        return names[3];
    } else if (score === 1) {
        return names[4];
    } else if (score === 2) {
        return names[5];
    } else {
        return names[6];
    }
}

console.log(golfScore(4, 1));
console.log(golfScore(4, 3)); 
console.log(golfScore(4, 4)); 
console.log(golfScore(4, 5)); 
console.log(golfScore(4, 6)); 
console.log(golfScore(4, 7)); 
console.log(golfScore(4, 9)); 
