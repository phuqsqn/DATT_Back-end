const express = require('express');
const router = express.Router();

const {
  creatComment,
  getComment,
  deleteComment,
  updateComment,
  getAllComment
} = require('../controllers/comment.controller');

const asyncMiddleware = require("../middlewares/async.middleware")


//phải bao bọc nó bằng asyncMiddleware thì mới bắt lỗi chứ, bao bọc như vậy đó, 
router.route('/').get(getAllComment);
router.route('/:product_id').post(asyncMiddleware(creatComment)).get(asyncMiddleware(getComment));
router.route('/:id').patch(asyncMiddleware(updateComment)).delete(asyncMiddleware(deleteComment));
module.exports = router;
