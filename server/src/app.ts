import express from "express";
import morgan from "morgan";
import cors from "cors";

require("dotenv").config;

import * as middlewares from "./middlewares";
import MessageResponse from "./interfaces/MessageResponse";
import api from "./api";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "👋👋👋👋👋👋👋",
  });
});

app.use("/api/v1", api);
app.use(middlewares.notFound);

export default app;
