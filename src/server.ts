import express, { Request, Response } from "express";
import path from "path";
import dotenv, { parse } from "dotenv";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3030;

const app = express();


//setup static folder
// app.use(express.static(path.join(__dirname, 'public')));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
