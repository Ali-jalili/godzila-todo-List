const { Schema, model } = require('mongoose')


const membersSchema = Schema({
    name: {
        type: String,
        require: true,
    },

    age: Number,

    rol: {
        type: String,
        default: 'user'
    },

    soctialMedia: [],

    skills: Array,
    laguage: Array,
    tasks: Array,

    // linkdin: String,
    // github: String,
})

const memberModal = model('Members', membersSchema)

module.exports = memberModal