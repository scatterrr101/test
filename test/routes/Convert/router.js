const router = require("express").Router();
const controller = require('../../controller/controller');

router.get('/string', controller.checkString);

module.exports = router;
