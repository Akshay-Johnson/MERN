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

async function processData() {
    try {
        const result = await DataReceived(true);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

processData();
