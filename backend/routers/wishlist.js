const express = require("express");
const router = express.Router();
const passport = require("passport"); 

const {
  createWishlist,
  updateWishlist,
  addProductToWishlist,
  deleteProductFromWishlish,
  deleteWishlist,
  getWishlist,
} = require("../controllers/wishlist");
​
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createWishlist
);
​
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  updateWishlist
);

router.put(
    "/",
    passport.authenticate("jwt", { session: false }),
    addProductToWishlist
  );

router.delete(
    "/",
    passport.authenticate("jwt", { session: false }),
    deleteProductFromWishlish
)

router.delete(
    "/",
    passport.authenticate("jwt", { session: false }),
    deleteWishlist
)

router.get("/", getWishlist)

module.exports = router;