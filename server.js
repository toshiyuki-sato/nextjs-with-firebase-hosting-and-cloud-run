const next = require("next");
const express = require("express");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({
  dev,
});

const handle = app.getRequestHandler();
const server = express();

server.get("*", (req, res) => {
  handle(req, res);
});

app
  .prepare()
  .then(() =>
    server.listen(port, () => {
      if (dev) console.log(`> Ready on http://localhost:${port}`);
    })
  )
  .catch(console.error);
