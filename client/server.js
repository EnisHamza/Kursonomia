const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    if (dev) {
      server.use(
        "/api",
        createProxyMiddleware({
          target: "https://kursonomia-server.onrender.com",
          changeOrigin: true,
        })
      );
    }
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on https://kursonomia-server.onrender.com");
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
