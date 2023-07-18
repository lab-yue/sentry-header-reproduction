import { defineConfig } from "vite";
import express from "express";

export default defineConfig({
  server: {
    proxy: {
      "/api/": "http://localhost:3000",
    },
  },
});

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.get("Origin") || "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range"
  );

  if (req.method === "OPTIONS") {
    return res.send(200);
  } else {
    return next();
  }
});

app.get("/api/download", (_, res) => {
  res.redirect("http://localhost:3000/real-download-path");
});

app.get("/real-download-path", (_, res) => {
  res.send("OK");
});

app.listen(3000).on("error", console.error);
console.log("start demo server on http://localhost:3000/");
