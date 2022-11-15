import { home, about, addEmployee } from '../controllers/indexController.js'
import express from 'express'

const router = express.Router()

router.get('/', home)
router.get('/about', about)
router.get('/addEmployee', addEmployee)

export default router