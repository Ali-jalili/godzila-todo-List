const { Schema, model } = require('mongoose')


const taskSchema = Schema({
    title: {
        type: String,
        require: true
    },

    completed: {
        type: Boolean,
        default: false
    }
})

const taskModal = model('Tasks', taskSchema)

module.exports = taskModal