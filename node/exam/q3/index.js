function DataReceived(Data) {
    return new Promise((resolve, reject) => {
        if (Data){
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject("No data");
        }
    });
}

DataReceived(true)
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});