const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    console.log(req.headers);

    jwt.verify(req.headers.token, 'secret_key', (err, decodedToken) => {
        if (err) {
            res.send('Token verification failed');

        } else {
            console.log('Decoded token:', decodedToken);
            next();
        }
    });

}

module.exports = authMiddleware;