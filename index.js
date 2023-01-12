const express = require("express");
const app = express();
const port = process.env.PORT || 8888;

app.get("/", (req, res) => res.type("html").send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Paulina Patterson</title>
  </head>
  <body>
    <p>Paulina Patterson</p>
  </body>
</html>
`;
