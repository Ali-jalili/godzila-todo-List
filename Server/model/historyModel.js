const { Schema, model } = require('mongoose')


const historySchema = Schema({
    text: {
        type: String,
        require: true
    }
})

const historyModel = model('History', historySchema)

module.exports = historyModel