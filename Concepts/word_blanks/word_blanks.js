function wordBlanks(mynoun, myadject, myverb, myadverb) {
    var result = 'The fans ' + myadverb + ' ' + myverb + ' ' + mynoun + '\'s race in the ' + myadject + '.';
    return result;
}

console.log(wordBlanks("Max Verstappen", "Tottenham Stadium", "watched", "eagerly"));
