var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers');

/* GET home page. */

router.use((req, res, next) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        next();
    }
});

router.get('/', async (req, res, next) => {
    let userLoginErr = req.session.userLoginErr;
    req.session.userLoginErr = null;
    let userSignupSuccess = req.session.userSignupSuccess;
    req.session.userSignupSuccess = null;
    res.render('user-login', { userLoginErr, userSignupSuccess, title: 'Login' })
});

router.post('/', (req, res) => {
    userHelpers.doLogin(req.body).then((response) => {
        if (response.status) {
            req.session.user = response.user
            req.session.userLoggedIn = true
            res.redirect('/')
        } else {
            req.session.userLoginErr = response.errorMessage
            res.redirect('/user-login')
        }
    })
})

module.exports = router;
