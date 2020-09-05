import express from "express";
import User from "../controller/userController";
import authentication from "../middleware/auth";

const { authenticate } = authentication;

const { createUser, loginUser, protectedRoute } = User;
const Router = new express.Router();
Router.use(express.json());

Router.post("/signup", createUser);

Router.post("/login", loginUser);

Router.get("/profile", authenticate, protectedRoute);

export default Router;
