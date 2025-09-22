const fs = require("fs");
const path = require ("path");

const folderPath = path.join(__dirname, "Practice");
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log("Folder created successfully.");
}else {
    console.log("Folder already exists.");
}

const filePath = path.join(folderPath, "notes.txt");
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "Learning Node.js is fun!");
    console.log("File created and content written successfully.");
}else {
    console.log("File already exists.");
}

fs.appendFileSync(filePath, "Keep practicing daily !");
console.log("Content appended successfully.");

const data = fs.readFileSync(filePath, "utf-8");
console.log("File content:");
console.log(data);

console.log("file path:");
console.log(filePath);