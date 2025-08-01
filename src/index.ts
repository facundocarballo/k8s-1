import { bootstrapApp } from "#bootstraps/app";

async function init() {
  const app = bootstrapApp();
  app.listen(8080, () => {
    console.log("Server listening on port 8080.");
  });
}

init();
