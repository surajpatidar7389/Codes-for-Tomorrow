const jwt = require('jsonwebtoken');

const users = [
    {
        email : "admin@codesfortomorrow.com",   
        password : "Admin123!@#",
    }
];


exports.login = (req, res) => {
    const {email, password} = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if(!user){
        return res.status(401).json({message : "Invalid email or password"});
    }
    const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn : '1h'});
    res.json({token});
}


  