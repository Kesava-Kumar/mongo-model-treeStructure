const express = require('express');
const router = express.Router();
const {create, findparent, getChildrens, getAll} = require('../controllers/modelTree');

router.post('/create', create.createTreeStrecture);
router.get('/:id', findparent.getParent);
router.get('/name/:parent', getChildrens.getChildrens);
router.get('/', getAll.get);
module.exports = router;