const { Router } = require("express")

const { getAllMembres, addNewMember, updateMember, deletMember } = require('../controller/membres')

const router = Router();

router.get('/', getAllMembres)

router.post('/', addNewMember)

router.patch('/', updateMember)

router.delete('/', deletMember)

module.exports = router;