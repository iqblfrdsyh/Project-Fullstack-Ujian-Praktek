export const home = (req, res) => {
    res.render('home', {
        title: 'Home',
        layout: 'layouts/main-layout'
    })
}
export const about = (req, res) => {
    res.render('about', {
        title: 'About',
        layout: 'layouts/main-layout'
    })
}
export const addEmployee = (req, res) => {
    res.render('addEmployee', {
        title: 'Add Employee',
        layout: 'layouts/main-layout'
    })
}

export default { home, about, addEmployee }
