const jwt = require('jsonwebtoken');


function checkRole(roleRequired) {
    const secretKey = 'th1s1ss3cr3t';
    return (req, res, next) => {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                message: 'Authentication Failed, token not found'
            })
        }

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: 'Authentication Failed, token not valid'
                })
            }

            if (decoded.role !== roleRequired) {
                return res.status(401).json({
                    message: 'Authentication Failed, role not valid'
                })
            }
            req.user = decoded;
            next();
        }
        )
    }
}

module.exports = {
    checkRole
}