import Employee from '../models/employeeModel.js'

// get data
export const getEmployee = async (req, res) => {
    try {
        const employee = await Employee.find()
        res.render('profile', {
            title: 'Profile',
            layout: 'layouts/main-layout',
            data: employee
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Insert Data
export const addEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee({
            employeeName: req.body.employeeName,
            position: req.body.position,
            skill: req.body.skill
        })
        await newEmployee.save()
        res.redirect('/profile')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Delete Data 
export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id
        await Employee.findByIdAndDelete(id)
        res.redirect('/profile')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
