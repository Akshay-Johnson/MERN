const fs = require('fs');

fs.writeFile("example.txt", 'hello world' , (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File created and written successfully");


    fs.appendFile("example.txt", '\nAppended text', (err) => {
        if (err) {
            console.error("Error appending to file:", err);
            return;
        }
        console.log("Text appended successfully");
    
        fs.readFile("example.txt", 'utf8', (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            console.log("File contents:", data);
        });
        
        fs.open("exampl.txt", 'r+', (err, fd) => {
            if (err) {
                console.error("Error opening file:", err);
                return;
            }
            console.log("file opened successfully");

            fs.close(fd, (err) => {
                if (err) {
                    console.error("Error closing file:", err);
                    return;
                }
                console.log("File closed successfully");
            });
        });
    });
});
