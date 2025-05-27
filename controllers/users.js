const User = require('../models/user');

module.exports.renderSignupForm = (req, res) => {
    res.render('users/signup');
};

module.exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        
         // Log the user in after successful registration
         await new Promise((resolve, reject) => {
            req.login(registeredUser, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });
        req.flash('success', 'Welcome to Wanderlust!');
        res.redirect('/listings');
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/signup');
    }
};

module.exports.renderLoginForm =  (req, res) => {
    res.render('users/login');
};

module.exports.login =  (req, res) => {
    req.flash('success', 'Welcome back!');
    res.redirect(res.locals.redirectUrl || '/listings');  
};

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'You have logged out!');
        res.redirect('/listings');
    });
};