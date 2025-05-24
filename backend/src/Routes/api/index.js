const { chatRouter } = require("./chat.route");
const { messageRouter } = require("./message.route");
const { postRouter } = require("./post.route");
const { userRouter } = require("./user.route");

module.exports = {
    chatRouter,
    messageRouter,
    postRouter,
    userRouter
  };