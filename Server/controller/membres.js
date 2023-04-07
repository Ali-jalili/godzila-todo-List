
const membersModel = require('../model/membres')

module.exports.getAllMembres = async (req, res) => {

    try {
        const users = await membersModel.find();

        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }



};

module.exports.addNewMember = async (req, res) => {

    try {
        const newMember = req.body;

        const member = await membersModel.create(newMember);
        res.status(201).send(member)

    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }

};

module.exports.updateMember = async (req, res) => {

    try {
        const { id } = req.query;
        const newMember = req.body;

        const member = await membersModel.findByIdAndUpdate(id, newMember);
        res.status(200).send(member)

        // const member = await membersModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        // res.status(200).send(member)

    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }

};

module.exports.deletMember = async (req, res) => {

    try {
        const { id } = req.query;


        const member = await membersModel.findByIdAndDelete(id);
        res.status(200).send(member)



    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }

};