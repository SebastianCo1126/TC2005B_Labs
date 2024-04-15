const express = require('express');
const router = express.Router();

const camarasController = require('../controllers/camaras.controller');
const isAuth = require('../util/isAuth.js');
const puedeCrear = require('../util/puedeCrear.js');
const puedeVer = require('../util/puedeVer.js');

router.get('/crear', isAuth, puedeCrear, camarasController.get_crear);
router.post('/crear', isAuth, puedeCrear, camarasController.post_crear)
router.get('/masInfo', isAuth, camarasController.get_masInfo);
router.get('camaras', camarasController.get_camaras);
router.get('/:camara_id', isAuth, puedeVer, camarasController.get_root);
router.get('/', isAuth, puedeVer, camarasController.get_root);

module.exports = router;