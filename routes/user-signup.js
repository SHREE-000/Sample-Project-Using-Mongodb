var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers');


router.use((req, res, next) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        next();
    }
});

router.get('/', async (req, res, next) => {
    let userSignUpErr = req.session.userSignUpErr;
    req.session.userSignUpErr = null;
    res.render('user-signup', { userSignUpErr , title: 'Sign Up'})
});

router.post('/', async (req, res, next) => {
    console.log(req.body)
    userHelpers.doSignUp(req.body).then((response) => {
        if (response.status) {
            req.session.userSignupSuccess = 'Account created..'
            res.redirect('/user-login')
        } else {
            req.session.userSignUpErr = response.errorMsg
            res.redirect('/user-signup')
        }
    })
});

module.exports = router;