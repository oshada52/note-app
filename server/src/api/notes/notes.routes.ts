import { Router, Request, Response } from "express";
import Note from "./notes.model";

const router = Router();

router.get("/", (req: Request, res: Response<Note[]>) => {
  res.json([
    {
      content: "api",
      important: true,
    },
  ]);
});

export default router;
