import express, { Request, Response } from "express";

export const router = express.Router();

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
router.get("/", );

// Get a single post
router.get("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} was not found` });
  }
  res.status(200).json(post);
});

// Create new post
router.post("/", (req: Request, res: Response) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({
      msg: "Please include a title",
    });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Update post
router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} was not found` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

// Delete post
router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} was not found` });
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
