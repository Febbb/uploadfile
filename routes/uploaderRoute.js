const express = require('express');
const router = express.Router();
const uploaderController = require('../controller/uploaderController');

router.get("/index",uploaderController.index)
router.post("/store",uploaderController.store)
router.put("/update",uploaderController.update)
router.delete("/destroy",uploaderController.destroy)

module.exports = router;