const {Router} = require('express');
const router = Router();
const passport = require('passport');
const {
    addComment,
    updateComment,
    deleteComment,
    getComments,
    getCustomerComments,
    getProductComments
} = require('../controllers/comments')

router.get("/comments", getComments);

router.post ("/comment", addComment);

router.put ("/comment", updateComment);

router.delete("/comment", deleteComment);

router.post(
    "/comment",
    passport.authenticate("jwt-admin", { session: false }),
    addColor
);

router.get("/comment", getCustomerComments)

router.get(
    "/comment",
    passport.authenticate("jwt-admin", { session: false }),
    getProductComments
);

module.exports = router;