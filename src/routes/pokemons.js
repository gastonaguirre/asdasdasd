const { Router } = require('express');

const router = Router();


// muestra todos los pokemones o los busca por nombre

router.get('/', async (req, res) => {


        res.status(200).send("hola")
    
})



module.exports = router