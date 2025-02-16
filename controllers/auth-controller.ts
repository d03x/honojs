import type { AppControllerInterface } from "../interfaces/app-controller-interfae";

export const LoginController: AppControllerInterface = (c) =>
  c.json({ statusbar: true });
