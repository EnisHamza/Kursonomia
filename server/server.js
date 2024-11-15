import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import csrf from "csurf";
import cookieParser from "cookie-parser";

const morgan = require("morgan");
require("dotenv").config();

const csrfProtection = csrf({ cookie: true });

//express app
const app = express();

//databaza
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Ensure this is enabled
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("DB Connection Error ->", err));

//middleware
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));
app.use(cookieParser());

//route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

//csrf
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

//porti
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
