import { Request, Response, NextFunction } from "express";

// @desc Get all posts
// @route Get /api/posts

const posts: any[] = []; // Declare and initialize the 'posts' variable

const getPosts = (req: Request, res: Response) => {
  // deal with query string
  const limit: number = parseInt(req.query.limit as string) || 0;

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
};
