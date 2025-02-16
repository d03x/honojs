import { serve } from "@hono/node-server";
import APP from "./app";

serve({
  fetch: APP.fetch,
  port:8080,
});
