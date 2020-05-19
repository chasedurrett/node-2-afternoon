const express = require("express");
const app = express();
const SERVER_PORT = 3001;
const ctrl = require("./controllers/messages-controller");

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", ctrl.readMessage);
app.post("/api/messages", ctrl.createMessage);
app.put("/api/messages/:id", ctrl.editMessage);
app.delete("/api/messages/:id", ctrl.deleteMessage);

app.listen(SERVER_PORT, () => {
  console.log(`Serving running on port ${SERVER_PORT}`);
});
