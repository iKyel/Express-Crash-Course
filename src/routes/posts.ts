import express, { Request, Response } from "express";

const router = express.Router();
const app = express();
interface Post {
  id: number;
  title: string;
}

let posts: Post[] = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all post
app.get("/api/posts", (req: Request, res: Response) => {
  // deal with query string
  const limit: number = parseInt(req.query.limit as string) || 0;

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get a single post
app.get("/api/posts/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} was not found` });
  }
  res.status(200).json(post);
});
