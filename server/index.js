import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import router from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

import cookieParser from "cookie-parser";

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

//cookies

app.use(cookieParser());

//routes setup

app.use("/", router);

//db

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

await Connection(USERNAME, PASSWORD);

app.listen(PORT, () => {
  console.log(`Server Running Successfully on PORT http://localhost:${PORT}`);
});

DefaultData(); //exectuning manual product data in db

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
(paytmParams["MID"] = process.env.PAYTM_MID),
  (paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE),
  (paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID),
  (paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID),
  (paytmParams["ORDER_ID"] = uuid()),
  (paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID),
  (paytmParams["TXN_AMOUNT"] = "100"),
  (paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback");
paytmParams["EMAIL"] = "palabhishek411@gmail.com";
paytmParams["MOBILE_NO"] = "1234567852";
