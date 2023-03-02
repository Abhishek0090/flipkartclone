import express, { Router } from "express";
import { getProducts } from "../controllers/product-controllers.js";
import { userSignup, userLogin } from "../controllers/user-controllers.js";

const router = express.Router();

router.post("/signup", userSignup);

router.post("/login", userLogin);

router.get("/products", getProducts);

export default router;
