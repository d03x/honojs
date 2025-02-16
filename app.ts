import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { LoginController } from "./controllers/auth-controller";
const app = new Hono();
app.get("/api/login", LoginController);
//######### SETUP STATIC FILE################

// app.get("/assets",serveStatic({
//   root: "./public/assets"
// }))
app.get(
  "*",
  serveStatic({
    root: "./public",
  })
);

export default app;
