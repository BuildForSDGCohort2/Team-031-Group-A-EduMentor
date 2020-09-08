import express from "express";
import userRoutes from "./userRoute";

function getRoutes() {
  const router = express.Router();
  router.use("/user", userRoutes);

  return router;
}

export default getRoutes;
