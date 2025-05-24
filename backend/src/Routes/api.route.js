const express = require("express");
const { userRouter, postRouter, chatRouter, messageRouter } = require("./api");
const apiRouter = express.Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/post/", postRouter);
apiRouter.use("/chat/", chatRouter);
apiRouter.use("/message/", messageRouter);

module.exports.apiRouter=apiRouter