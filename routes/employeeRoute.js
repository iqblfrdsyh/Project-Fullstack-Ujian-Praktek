import express from 'express'
import { getEmployee, addEmployee, deleteEmployee } from '../controllers/employeeController.js'

const router = express.Router()

router.get('/profile', getEmployee)
router.post('/profile', addEmployee)
router.get('/deleteEmployee/:id', deleteEmployee)

export default router
