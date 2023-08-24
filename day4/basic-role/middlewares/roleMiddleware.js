module.exports = (allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.query.role;

        if (allowedRoles.includes(userRole)) {
            next();
        } else {
            res.status(403).send('Access denied. Insufficient role.');
        }
    };
};
