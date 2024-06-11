const mongoose = require("mongoose");

require("dotenv").config();

async function main() {
    await mongoose.connect(
        `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.scvvo5d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Conectado com sucesso!");
}

main().catch((err) => console.log(err));

module.exports = main;
