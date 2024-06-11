const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://daniel:OuoUaarAmBckQ5mw@cluster0.jne7lib.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("Conectado ao banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;
