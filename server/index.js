import express from 'express';
import Connection from './database/db.js';
import dotenv from "dotenv";
import DefaultData from './default.js';
import router from './routes/routes.js';
import cors from "cors";
import bodyParser from 'body-parser';


const app = express();
const PORT = 8000;

dotenv.config();


//cors 

app.use(cors());

// accept json request

app.use(express.json());


//body parser

// app.use(bodyParser.json({extended : true}))
// app.use(bodyParser.urlencoded({extended : true})) 

//routes setup

app.use('/api/', router);


//db

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

await Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
    console.log(`Server Running Successfully on PORT http://localhost:${PORT}`);
})

DefaultData(); //exectuning manual product data in db 