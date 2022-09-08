const { Router } = require('express');
const { studentsController } = require('../controllers/students.controller.js');

const router = Router();


// router.post('/students', studentsController.createMessage);
// router.delete('/students/:id', studentsController.deleteMessage);
router.get('/students',  studentsController.getMessage)
router.patch('/students/:id', studentsController.updateMessage)


module.exports = router;