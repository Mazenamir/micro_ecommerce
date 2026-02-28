const express = required("express") ;

const router = express.Router() ;
const {addCar , getCart , removeCart}  = require("../controller/cartController") ;

router.post("/cart" , addCart);
router.get("/cart" , getCart);
router.delete("/cart" , removeCart);

module.exports = router;