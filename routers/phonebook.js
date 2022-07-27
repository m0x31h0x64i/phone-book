const express = require('express')
const router = new express.Router()
const phonebook = require('../models/phonebook')

router.get('/phonebook', async (req, res) => {
    try {
        const foundData = await phonebook.findOne(req.body)

        if (!foundData) {
            return res.status(404).send()
        }

        res.send(foundData)
    } catch (e) {
        res.status(500).send(e)
    } 
})

router.post('/phonebook', async (req, res) => {
    try {
        const newDocument = new phonebook(req.body)
        await newDocument.save()

        if (!newDocument) {
            return res.status(400).send()
        }
        
        res.status(201).send(`${req.body.name} saved successfuly!`)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/phonebook/:id', async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const allowdUpdates = ['name', 'email', 'phone']
        const isValidOperation = updates.every((update) => allowdUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).send()
        }

        const updateData = await phonebook.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!updateData) {
            return res.status(404).send()
        }

        res.send(updateData)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/phonebook/:id', async (req, res) => {
    try {
        const deleteData = await phonebook.findByIdAndDelete(req.params.id)

        if (!deleteData) {
            return res.status(400).send()
        }

        res.send(`${deleteData.name} deleted successfully!`)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router