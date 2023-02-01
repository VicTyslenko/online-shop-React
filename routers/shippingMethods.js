const express = require("express");
const router = express.Router();
const passport = require("passport"); 

const {
  addShippingMethod,
  updateShippingMethod,
  deleteShippingMethod,
  getShippingMethods,
  getShippingMethodById,
} = require("../controllers/shippingMethods");
​
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  addShippingMethod
);
​
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  updateShippingMethod
);

router.delete(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    deleteShippingMethod
)
​
router.get("/", getShippingMethods)
​
router.get("/:id", getShippingMethodById);

module.exports = router;