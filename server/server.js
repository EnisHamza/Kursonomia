import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const csrfProtection = csrf({ cookie: true });

//express app
const app = express();

mongoose.set("strictQuery", false);

//databaza
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("DB Connection Error ->", err));

//middleware
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));
app.use(cookieParser());

//route
const routeFiles = readdirSync("./routes");
routeFiles.forEach(async (file) => {
  const route = await import(`./routes/${file}`);
  app.use("https://kursonomia-server.onrender.com/api", route.default); // Ensure your route exports are default
});

//csrf
app.use(csrfProtection);

app.get("https://kursonomia-server.onrender.com/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

//porti
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
