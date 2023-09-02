const fs = require('fs');
const path = require('path');

module.exports = function (req, res, next) {
    const logDir = path.join(__dirname, '../logs');
    
    try {
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir);
        }

        const logEntry = `[${new Date().toISOString()}] [${req.method}] ${req.url}\n`;
        fs.appendFileSync(path.join(logDir, 'combined.log'), logEntry);
        
        next();
    } catch (error) {
        console.error('Error writing to log file:', error);
        next(error); // Pass the error to the error-handling middleware
    }
};
