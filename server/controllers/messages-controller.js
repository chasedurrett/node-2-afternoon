let messages = [];
let id = 0;
module.exports = {
  createMessage: (req, res) => {
    const { text, time } = req.body;
    const newMessage = { id, text, time };
    messages.push(newMessage);
    id++;
    res.status(200).send(messages);
  },
  readMessage: (req, res) => {
    res.status(200).send(messages);
  },
  editMessage: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(
      (message) => message.id == updateID
    );
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time,
    };

    res.status(200).send(messages);
  },
  deleteMessage: (req, res) => {
    const deleteID = req.params.id;
    const messageIndex = messages.findIndex(
      (message) => message.id == deleteID
    );
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  },
};
