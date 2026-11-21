const express = require('express');
const { requireAuth, requireRole } = require('../middleware/auth');
const { list, getOne, create, update, remove } = require('../controllers/projectController');

const router = express.Router();

router.use(requireAuth);
router.get('/', list);
router.get('/:id', getOne);
router.post('/', requireRole('admin'), create);
router.put('/:id', requireRole('admin'), update);
router.delete('/:id', requireRole('admin'), remove);

module.exports = router;