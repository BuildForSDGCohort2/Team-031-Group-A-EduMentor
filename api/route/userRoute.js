import Express from "express";
import User from "../controller/userController";

const Router = Express.Router();
Router.use(Express.json());

Router.post("/signup", User.createUser);

export default Router;
