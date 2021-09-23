const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const productController = require("../controllers/userController");
//const { catchErrors } = require("../handlers/errorHandlers");

const auth = require("../middlewares/auth");

router.get("/", auth, catchErrors(productController.getAllProduct));
router.post("/", auth, catchErrors(productController.creatProduct));

module.exports = router;
