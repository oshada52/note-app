import express from "express";
import morgan from "morgan";
import cors from "cors";

import MessageResponse from "./interfaces/MessageResponse";

require("dotenv").config;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "👋👋👋👋👋👋👋",
  });
});

export default app;
