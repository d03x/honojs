import type { Handler } from "hono";
import type { BlankEnv, Input } from "hono/types";

export type AppControllerInterface<T extends string = any> = Handler<
  BlankEnv,
  T,
  Input,
  Response | Promise<Response>
>;
