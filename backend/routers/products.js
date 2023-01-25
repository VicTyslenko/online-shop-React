const express = require("express");
const router = express.Router();
const passport = require("passport"); 

const {
  addImages,
  updateProduct,
  getProducts,
  getProductById,
  getProductsFilterParams,
  searchProducts
} = require("../controllers/products");
​
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addImages
);
​
router.put(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  updateProduct
);
​
router.get("/", getProducts)
​
router.get("/:id", getProductById);

router.get("/:filter", getProductsFilterParams);

router.get("/:search", searchProducts);

module.exports = router;