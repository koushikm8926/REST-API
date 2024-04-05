const express  = require("express")
const router  = express.router();


router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;