rows = 5;

for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let forward = "";
    for (let j = 0; j < i; j++) {
        forward += String.fromCharCode(65 + j); 
    }
    let backward = "";
    for (let j = i - 2; j >= 0; j--) {
        backward += String.fromCharCode(65 + j);
    }
    console.log(spaces + forward + backward + spaces);
}

