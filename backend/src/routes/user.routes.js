import { Router } from 'express'
import { login, register } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/login', login)
userRouter.post('/register', register)
// userRouter.route('/add_to_activity')
// userRouter.route('/get_all_activity')
export default userRouter
