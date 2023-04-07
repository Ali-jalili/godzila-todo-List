const { Router } = require("express")

const { getAllhistory, addNewHistory } = require('../controller/historycontroller')

const router = Router();

router.get('/', getAllhistory)

router.post('/', addNewHistory)


module.exports = router;
