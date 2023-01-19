// const {Router} = require('express');
// const path = require ('node:path');
// const router = Router();

// router.get('/man', (request, response)=>{
//     response.sendFile(path.resolve(__dirname, '../../frontend/public/index.html'))
// })

// module.exports = router;


const {Router} = require('express')
const router = Router()

const Product = require("../moduls/productMongoose")

router.get('man', async (request, response) => {
    const products = await Product.find();

    response.status(200).json({success: true, data: products});
});

router.post('man', async (request, response) => {

    const {src, title, description, prices, color, size, article, become} = request.body;

    const newProduct = {
        src: src,
        title: title,
        description: description,
        prices: {
            retail: Number(priceRetail),
            sale: priceSale ? Math.round(priceRetail - ((priceRetail*priceSale)/100)) : null,
            procent: Number(priceSale),
            currency: "$"
        }
    }

    const product = new Product(newProduct);

    // await product.saveProduct();

    try {
        await product.save()
        response.redirect('/product');

    } catch (e) {
        console.log(e);
    }
    
})

router.get('/api/edit/:productID', async (request, response) => {
    const {productID} = request.params;
    const product = await Product.findById(productID);
    response.status(200).json({success: true, data: product});
});

router.post('/api/edit/:productID', async (request, response) => {

    const {productID} = request.params;
    const product = request.body

    const statusLabel = [
        {"ТОП ПРОДАЖ":"top"},
        {"ТОЛЬКО В РОЗЕТКЕ":"rozetka"},
        {"АКЦИЯ":"sale"},
        {"НОВИНКА":"new"},
        {"ХИТ ПРОДАЖИ":"bests"},
    ]

    const newProduct = {
        src: product.src,
        title: product.title,
        label: {
            status: Object.values(statusLabel.find(item=> item[product.status]))[0],
            text: product.status
        },
        prices: {
            retail: product.priceRetail,
            sale: product.priceSale ? Math.round(product.priceRetail - ((product.priceRetail*product.priceSale)/100)) : null,
            procent: product.priceSale,
            currency: "грн"
        }
    }

    try {
        await Product.findByIdAndUpdate(productID,newProduct)
        response.redirect('/product');

    } catch (e) {
        console.log(e);
    }
});

router.delete('/api/edit/:productID', async (request, response) => {
    const {productID} = request.params;

    await Product.deleteOne({
        _id:productID
    });
    response.status(200).json({success: true})
    
})

module.exports = router