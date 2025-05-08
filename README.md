# ✨ JavaScript Name Formatter

This project demonstrates how to capitalize the first letter of each name in an array using JavaScript. It loops through a list of lowercase names and transforms them into proper format (e.g., "umer" → "Umer").

---

## 📜 Description

Given an array of names written in lowercase, this script formats each name by capitalizing the first letter and making the rest of the letters lowercase. The final formatted names are stored in a new array and printed to the console.

---

## ✅ Learning Outcomes

- Working with arrays and loops in JavaScript
- Using `slice()` and `toUpperCase()/toLowerCase()` for string manipulation
- Creating and populating new arrays

---

## 💻 Code Example

```javascript
let name = ['umer', 'tabish', 'faiq', 'ahmeed'];
let finalNames = [];  

for (let i = 0; i < name.length; i++) {
    let firstLetter = name[i].slice(0, 1).toUpperCase();
    let restLetters = name[i].slice(1).toLowerCase();
    let finalName = firstLetter + restLetters;

    finalNames.push(finalName); 
}

console.log(finalNames);

🔎 Output

[ 'Umer', 'Tabish', 'Faiq', 'Ahmeed' ]

📁 Project Structure

JavaScript Name Formatter/
├── index.js        # Main JavaScript file
└── README.md       # Documentation
