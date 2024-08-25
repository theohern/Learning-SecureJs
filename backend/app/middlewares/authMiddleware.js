const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        console.log("No Authorization header provided");
        return res.status(401).send('Accès refusé. Aucun token fourni.');
    }
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).send('Accès refusé. Aucun token fourni.');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Token invalide.');
    }
};
