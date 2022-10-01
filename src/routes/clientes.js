const express = require('express');
const router = express.Router();

const clientecontroller = require ('../controllers/clientecontroller')

router.get('/',clientecontroller.list);
router.post('/',clientecontroller.save);
router.get('/update/:id',clientecontroller.edit);
router.post('/update/:id',clientecontroller.update);
router.get('/delete/:id',clientecontroller.delete);

module.exports = router;