import * as z from "zod";

const Note = z.object({
  content: z.string().min(5),
  important: z.boolean(),
});

type Note = z.infer<typeof Note>;

export default Note;
