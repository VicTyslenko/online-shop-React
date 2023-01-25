const {Router} = require('express');
const router = Router();
const passport = require('passport');
const {
    createCart, 
    updateCart, 
    addProductToCart, 
    decreaseCartProductQuantity, 
    deleteCart, 
    deleteProductFromCart, 
    getCart
} = require('../controllers/cart')
// создаем карту заказа
router.post("/", createCart);

// получаем в админке товар заказ
router.get(
    "/cart", 
    passport.authenticate("jwt-admin", {session: false}),
    getCart
);

// обновление заказа
router.put(
    "/cart", 
    passport.authenticate("jwt-admin", {session: false}),
    updateCart
);

// удаление заказа
router.delete(
    "/cart", 
    passport.authenticate("jwt-admin", {session: false}),
    deleteCart
);

// добавление товара в заказ
router.post(
    "/cart", 
    passport.authenticate("jwt", {session: false}),
    addProductToCart
);

// удаление товара из заказа
router.delete(
    "/cart", 
    passport.authenticate("jwt", {session: false}),
    deleteProductFromCart
);

// уменьшение количества товара в заказе
router.delete(
    "/cart", 
    passport.authenticate("jwt", {session: false}),
    decreaseCartProductQuantity
);


module.exports = router;