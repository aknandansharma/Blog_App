const express = require('express')
const { getAllUsers, registerController, loginController } = require('../controllers/userControllers')


// Router Object
const router = express.Router()



// get all user || GET
router.get('/all-users', getAllUsers)

// Create Users || POST
router.post('/register', registerController)

// Login || POST
router.post('/login', loginController)





module.exports = router