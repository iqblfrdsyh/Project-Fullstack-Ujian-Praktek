import Employee from '../models/employeeModel.js'

export const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.find()
        res.render('profile', {
            title: 'Product',
            layout: 'layouts/main-layout',
            data: employee
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}