import app from "../src/server";

export default {
  fetch(request: Request) {
    return app.fetch(request, undefined, undefined);
  },
};
