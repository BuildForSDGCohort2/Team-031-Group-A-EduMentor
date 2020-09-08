import express from "express";
import User from "../controllers/userController";

const router = new express.Router();

router.post("/signup", User.createUser);

export default router;
