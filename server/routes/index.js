const { Router } = require('express');
const router = new Router();
const service = require('../services/scrapping-service');

router.get('/:id', async (req, res) => {
    if (req.params.id) {
        const data = await service.getDataOfProfile(req.params.id);
        res.json(data);
    }
    else {
        res.json({ error: "Error" });
    }
});

module.exports = router;