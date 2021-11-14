const { Router } = require('express');
const { getItemsQuery, getItem } = require('../controllers/items');

const router = Router();

router.get('/items', getItemsQuery);

router.get('/items/:id', getItem);

module.exports = router;
