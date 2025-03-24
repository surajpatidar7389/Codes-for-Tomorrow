const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res , next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message : "Unauthorized"});

    }
    jwt.verify(token, process.env.JWT_SECRET, (err, denied) => {
        if(err){
            return res.status(401).json({message : "Unauthorizedx"});
        }
        req.user = denied;
        next();
    });
    
}