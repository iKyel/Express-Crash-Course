import express, { Request, Response } from "express";
import path from "path";
import dotenv, { parse } from "dotenv";
import router from "./routes/posts";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3030;

const app = express();

//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/api/posts", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
