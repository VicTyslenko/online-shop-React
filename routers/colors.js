const {Router} = require('express');
const router = Router();
const passport = require('passport');
const {
    addColor,
    updateColor,
    deleteColor,
    getColors,
} = require('../controllers/colors')

router.get("/color", getColors);

router.post(
    "/color",
    passport.authenticate("jwt-admin", { session: false }),
    addColor
);

router.put(
    "/color",
    passport.authenticate("jwt-admin", { session: false }),
    updateColor
);

router.delete(
    "/color",
    passport.authenticate("jwt-admin", { session: false }),
    deleteColor
);

module.exports = router;