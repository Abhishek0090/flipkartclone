import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv";
import DefaultData from './default.js';



const app = express();
const PORT = 8000;

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

await Connection(USERNAME,PASSWORD);

app.listen(PORT, () => {
    console.log(`Server Running Successfully on PORT http://localhost:${PORT}`);
})

DefaultData(); //exectuning manual product data in db 