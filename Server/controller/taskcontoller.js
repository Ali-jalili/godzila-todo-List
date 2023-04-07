
const tasksModel = require('../model/taskModel')

module.exports.getAlltasks = async (req, res) => {

    try {
        const users = await tasksModel.find();

        res.status(200).send(users)
    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }



};

module.exports.addNewTasks = async (req, res) => {

    try {
        const newTask = req.body;

        const member = await tasksModel.create(newTask);
        res.status(201).send(member)

    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }

};

module.exports.updateTask = async (req, res) => {

    try {
        const { id } = req.query;
        const newMember = req.body;

        const member = await tasksModel.findByIdAndUpdate(id, newMember);
        res.status(200).send(member)

        // const member = await tasksModel.findByIdAndUpdate(req.params.id, { $set: req.body });
        // res.status(200).send(member)

    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }

};

module.exports.deletTask = async (req, res) => {

    try {
        const { id } = req.query;


        const member = await tasksModel.findByIdAndDelete(id);
        res.status(200).send(member)



    }
    catch (err) {
        res.status(500).send({ error: err.massage })
    }

};