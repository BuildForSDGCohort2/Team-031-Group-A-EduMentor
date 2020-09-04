import express from "express";
import User from "../controller/userController";

const Router = new express.Router();
Router.use(express.json());

Router.post("/signup", User.createUser);

export default Router;
