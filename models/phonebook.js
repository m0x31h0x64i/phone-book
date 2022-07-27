require('../database/mongoose')
const mongoose = require('mongoose')
const validator = require('validator')

const phonebook = mongoose.model('phonebook', {
    name: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        index: true,
        unique: true
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        index: true,
        validate(value) {
            if (value[0] != 0 && value.length != 11) {
                throw new Error(`${value} is not a valid number!
                1. Must start with 0.
                2. Must equal to 11 characters.`)
            }
        }
    },
    email: {
        type: String,
        required: false,
        default: 'example@email.com',
        trim: true,
        lowercase: true,
        index: true,
        validate(value) {
            if (!(validator.isEmail(value))) {
                throw new Error(`${value} is not a valid email address!`)
            }
        }
    }
})

module.exports = phonebook