
const historyModel = require('../model/historyModel');

module.exports.getAllhistory = async (req, res) => {

    try {
        const history = await historyModel.find();

        res.status(200).send(history)
    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }



};

module.exports.addNewHistory = async (req, res) => {

    try {
        const newhistory = req.body;

        const history = await historyModel.create(newhistory);
        res.status(201).send(history)

    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }

};
