import express from "express"
const indexRouter = express.Router();

indexRouter.route('/').get(function(_req, res) {
  res.json({"íėŽėę° : ": new Date().toLocaleString()})
});

export default indexRouter;