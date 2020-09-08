import express from "express";
import userRoutes from "./userRoute";

function getRoutes() {
  const Router = express.Router();
  Router.use("/user", userRoutes);

  return Router;
}

export default getRoutes;
