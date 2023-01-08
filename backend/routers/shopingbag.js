const {Router} = require('express');
const path = require ('node:path');
const router = Router();

router.get('/busket', (request, response)=>{
    response.sendFile(path.resolve(__dirname, '../../frontend/public/index.html'))
})

module.exports = router;