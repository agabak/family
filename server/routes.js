var express = require('express'),
router = express.Router();

router.get('/heroes', (req, res) => {
res.send(200, [
    { "id": 10, "name": "Starlord", "saying": "oh yeah" }
]);
});

module.exports = router;