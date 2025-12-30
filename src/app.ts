import express from "express";
import cors from "cors";
import morgan from "morgan";

import { DATABASE_URL, PORT, DIRECT_URL } from "./config/index";
import { apiRouter } from "./api/routes/api.route";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", apiRouter);

app.get("/health-check", (_req, _res) => {
  console.log("Health check is successful !!!", DATABASE_URL, DIRECT_URL);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
