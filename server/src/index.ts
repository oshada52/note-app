import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

//server static file
app.use(express.static(path.join(__dirname, "../../client/dist")));

// handle errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).send("Internal Server Error");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
