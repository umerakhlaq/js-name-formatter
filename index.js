let name = ['umer', 'tabish', 'faiq', 'ahmeed'];
let finalNames = [];  

for (let i = 0; i < name.length; i++) {
    let firstLetter = name[i].slice(0, 1).toUpperCase();
    let restLetters = name[i].slice(1).toLowerCase();
    let finalName = firstLetter + restLetters;

    finalNames.push(finalName); 
}

console.log(finalNames);  

