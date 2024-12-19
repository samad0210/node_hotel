const jwt = require("jsonwebtoken");

const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization
  if(!authorization) return res.status(401).json({ error: 'Token Not Found' });
  //extract the jwt from the request headers
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "unauthorized" });
  try {
    // verify the jwt token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // attach user information to request object
    req.user = decoded;
    next()
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Invalid token" });
  }
};

// function to generate jwt token
const generateToken = (userdata) => {
   // generate a new jwt token using userdata
  return jwt.sign(userdata, process.env.JWT_SECRET);
};

module.exports = {jwtAuthMiddleware,generateToken};
