const expres = require('express');
const router = expres.Router();
const {create, findParent, getChildrens} = require('../../controllers/ChildReference');

router.post('/',create.createChild);
router.get('/:id', findParent.getParent);
router.get('/:parent', getChildrens.getChildrens);

module.exports = router;