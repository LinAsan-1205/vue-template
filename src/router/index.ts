import type { App } from "vue";
import router from "./router";
export default {
  install: (app: App) => {
    app.use(router);
    router.beforeEach((_to, _form, next) => {
      next();
    });
  },
};
