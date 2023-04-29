const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')


// Create user register user
exports.registerController = async(req, res) => {
    try {
        const {username, email, password} = req.body

        // User Fields validation
        if(!username || !email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please fill all fields'
            })
        }
        // existting user
        const existtingUser = await userModel.findOne({email})
        if(existtingUser){
            return res.status(401).send({
                message:'User Already exisits',
                success: false
            })
        }

        // Password Hashing
        const hashPassword = await bcrypt.hash(password, 10)
      

        // Save/Creating New Users
        const user = new userModel({
            username,
            email,
            password: hashPassword
        })
        await user.save()
        return res.status(201).send({
            success: true,
            message: 'User Created successfully!',
            user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Error in Register',
            success: false,
            error
        })
    }
}

// Create user login user
exports.loginController = async(req, res) => {
    try {
        const {email, password} = req.body
        
        // Checking email and password filled or not!
        if(!email || !password) {
            return res.status(401).send({
                success: false,
                message: 'Please provide email or password',

            })
        }
        
        // Checking Email Regiser Or Not
        const user = await userModel.findOne({email})
        if(!user) {
            return res.status(200).send({
                success: false,
                message: 'This is email Not Registerd!'
            })
        }

        // password checking
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).send({
                success: false,
                message: 'Invalid username or password'
            })
        }

        // Login
        return res.status(200).send({
            success: true,
            message: 'login successfully!',
            user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Error in Login',
            success: false,
            error
        })
    }
}

// Get All Users
exports.getAllUsers = async(req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            usersCount: users.length,
            success: true,
            message: 'Getting All User Data',
            users
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: 'Error in Get All Users',
            success: false,
            error
        })
    }
}




