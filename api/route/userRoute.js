import express from "express";
import User from "../controller/userController";

const router = express.Router();
router.use(express.json());

router.post("/signup", User.createUser);

export default router;
