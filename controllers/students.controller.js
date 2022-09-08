const Student = require('../models/Student.model.js')

module.exports.studentsController = {
    getMessage: (req, res) => {
        Student.find().then((data) => {
            res.json(data)
        })
    },

    createMessage: (req, res) => {
const {name, phone, age} = req.body
        Student.create({
            name,
            phone,
            age,
        }).then(() => {
            res.json("Студент добавлен")
        })
    },
    
    deleteMessage: (req, res) => {
        Student.findByIdAndRemove(req.params.id).then(() => {
            res.send("Студент удален")
        })
    },

    updateMessage: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, {name: req.body.name}).then((data) => {
            res.json(data)
        })
    },
} 