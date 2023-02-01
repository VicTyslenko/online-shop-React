const express = require("express");
const router = express.Router();
const passport = require("passport"); 

const {
  placeOrder,
  updateOrder,
  cancelOrder,
  deleteOrder,
  getOrders,
  getOrder
} = require("../controllers/orders");
​
router.post(
  "/order",
  passport.authenticate("jwt", { session: false }),
  placeOrder
);
​
router.put(
  "/order",
  passport.authenticate("jwt", { session: false }),
  updateOrder
);
​
router.delete(
    "/order",
    passport.authenticate("jwt", { session: false }),
    cancelOrder
);

router.delete(
  "/order",
  passport.authenticate("jwt", { session: false }),
  deleteOrder
);
​
router.get("/", getOrders);
​
router.get("/:order", getOrder);
​
module.exports = router;