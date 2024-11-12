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

//databaza
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("DB Connection Error ->", err));

//middleware
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));
app.use(cookieParser());

const loadRoutes = async () => {
  const routeFiles = readdirSync("./routes");

  for (const routeFile of routeFiles) {
    if (routeFile.endsWith(".js")) {
      const routePath = `./routes/${routeFile}`;
      try {
        const routeModule = await import(routePath);
        app.use("/api", routeModule.default);
      } catch (error) {
        console.error(`Error loading route ${routeFile}:`, error);
      }
    } else if (fs.statSync(`./routes/${routeFile}`).isDirectory()) {
      // Optionally, check if it's a directory and load index.js from there
      const routePath = `./routes/${routeFile}/index.js`;
      try {
        const routeModule = await import(routePath);
        app.use("/api", routeModule.default);
      } catch (error) {
        console.error(`Error loading route directory ${routeFile}:`, error);
      }
    }
  }
};

//csrf
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

//porti
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
