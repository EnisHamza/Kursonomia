import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import { createServer } from "http";

const morgan = require("morgan");
require("dotenv").config();

const csrfProtection = csrf({ cookie: true });

// Express app
const app = express();

// Database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("DB Connection Error ->", err));

// Middleware
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// CSRF protection
app.use(csrfProtection);
app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Default handler for serverless deployment
export default app;
