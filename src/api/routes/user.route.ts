import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (_req, _res) => {
  console.log("user check is successful !!!");
});
