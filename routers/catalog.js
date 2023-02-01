const {Router} = require('express');
const router = Router();
const passport = require('passport');
const {
    addCategory,
    aupdateCategory,
    deleteCategory,
    getCategories,
    getCategory,
} = require('../controllers/catalog')

router.get("/catalog/:category", getCategory);

router.get("/catalog/:categories", getCategories);

router.post(
    "/catalog",
    passport.authenticate("jwt-admin", { session: false }),
    addCategory
);

router.put(
    "/catalog",
    passport.authenticate("jwt-admin", { session: false }),
    aupdateCategory
);

router.delete(
    "/catalog/:category",
    passport.authenticate("jwt-admin", { session: false }),
    deleteCategory
);

module.exports = router;