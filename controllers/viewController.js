const path = require('path')

/* LOG IN PAGE*/
exports.getLoginForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signin.html'))
}

/* ADMIN LOG IN PAGE*/
exports.getAdminLoginForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'adminlogin.html'))
}
/* SIGN UP PAGE*/
exports.getSignupForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
}

/* HOME PAGE*/
exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'landing.html'))
}

/* SELLER HOME PAGE*/
exports.getSellerHome = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'sellerhome.html'))
}

// Add Items
exports.getAddProduct = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'))
}

// LoginForm
exports.getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
}