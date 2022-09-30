const express = require('express');
const router = express.Router();

const clientecontroller = require ('../controllers/clientecontroller')

router.get('/',clientecontroller.list);
router.post('/',clientecontroller.save);

module.exports = router;