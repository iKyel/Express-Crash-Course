import express, { Request, Response, NextFunction } from "express";
import path from "path";
import dotenv, { parse } from "dotenv";
import router from "./routes/posts";

// Middlewares
import logger from "./middlewares/logger";
import notFound from "./middlewares/notFound";
// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3030;

const app = express();

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Loger middleware
app.use(logger);

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Catch all route for undefined routes (404 Not Found)
app.use(notFound);

// Routes
app.use("/api/posts", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
