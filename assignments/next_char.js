
const alphabets = "abcdefghijklmnopqrstuvwxyz";
let content = "prithveeganesh";
let result;


for (let i = 0; i < content.length; i++) {
    
    const pos = alphabets.indexOf(content[i]);
    const nextchar = (pos + 1) % alphabets.length;
    result += alphabets[nextchar];

}

console.log(result);
