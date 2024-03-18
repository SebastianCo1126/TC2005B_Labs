const express = require('express');
const router = express.Router();

const camarasController = require('../controllers/camaras.controller');

router.get('/crear', camarasController.get_crear);
router.post('/crear', camarasController.post_crear)
router.get('/masInfo', camarasController.get_masInfo);
router.get('camaras', camarasController.get_camaras);
router.get('/', camarasController.get_root);

module.exports = router;