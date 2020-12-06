var express = require('express');
var router = express.Router();

const User = require('./models/User');
const UserSession = require('./models/UserSession');

router.post('/signup', function (request, response) {
    const { body } = request;
    const {
        firstName,
        lastName,
        age,
        password
    } = body;

    let { email } = body;

    if (!firstName) {
        return response.send({
            success: false,
            message: 'Error: First Name Missing.'
        });
    }
    if (!lastName) {
        return response.send({
            success: false,
            message: 'Error: Last Name Missing.'
        });
    }
    if (age == -1) {
        return response.send({
            success: false,
            message: 'Error: Age Missing.'
        });
    }
    if (!email) {
        return response.send({
            success: false,
            message: 'Error: Email Missing.'
        });
    }
    if (!password) {
        return response.send({
            success: false,
            message: 'Error: Password Missing.'
        });
    }
    email = email.toLowerCase();

    User.find({
        email: email,
    }, function (err, prevUsers) {
        if (err) {
            return response.send({
                success: false,
                message: 'Error: Server Error.'
            });
        }
        if (prevUsers.length > 0) {
            return response.send({
                success: false,
                message: 'Error: User Already Exists.'
            });
        }
        else {
            const newUser = new User();
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.age = age;
            newUser.email = email;
            newUser.password = password;

            newUser.save(function (err, user) {
                if (err) {
                    return response.send({
                        success: false,
                        message: 'Error: Server Error.'
                    });
                }

                return response.send({
                    success: true,
                    message: 'Signup Successful.'
                });
            });
        }
    });
});

router.post('/signin', function (request, response) {
    const { body } = request;
    const {
        password
    } = body;
    let { email } = body;

    if (!email) {
        return response.send({
            success: false,
            message: 'Error: Email Missing.'
        });
    }
    if (!password) {
        return response.send({
            success: false,
            message: 'Error: Password Missing.'
        });
    }
    email = email.toLowerCase();

    User.find({
        email: email
    }, function (err, prevUsers) {
        if (err) {
            return response.send({
                success: false,
                message: 'Error: Server Error.'
            });
        }
        if (prevUsers.length == 0) {
            return response.send({
                success: false,
                message: 'Error: Invalid Login.'
            })
        }
        if (!prevUsers[0].validPassword(password)) {
            return response.send({
                success: false,
                message: 'Error: Invalid Password.'
            });
        }

        const newUserSession = new UserSession();
        newUserSession.userID = prevUsers[0]._id;
        newUserSession.save(function (err, user) {
            if (err) {
                return response.send({
                    success: false,
                    message: 'Error: Server Error.'
                });
            }

            return response.send({
                success: true,
                message: 'Successfully Logged In.',
                token: user._id
            });
        });
    });
});

router.get('/verify', function (request, response) {
    const { query } = request;
    const {
        token
    } = query;

    const query_table = {
        _id: token,
        isDeleted: false
    };

    UserSession.find(query_table, function (err, prevUserSessions) {
        if (err) {
            return response.send({
                success: false,
                message: 'Error: Server Error.'
            });
        }

        if (prevUserSessions.length == 0) {
            return response.send({
                success: false,
                message: 'No Previous Sessions.'
            });
        }

        return response.send({
            success: true,
            message: 'Session Available.'
        });
    });
});

router.get('/logout', function (request, response) {
    const { query } = request;
    const {
        token
    } = query;
    
    const query_table = {
        _id: token,
        isDeleted: false
    };

    UserSession.findOneAndUpdate(query_table, {
        $set: { isDeleted: true }
    }, { new: true }, function (err, prevUserSessions) {
        if (err) {
            return response.send({
                success: false,
                message: 'Error: Server Error.'
            });
        }

        if (prevUserSessions == null) {
            return response.send({
                success: false,
                message: 'Error: Invalid Logout.'
            });
        }

        return response.send({
            success: true,
            message: 'Logout Successful.'
        });
    });
});

module.exports = router;
