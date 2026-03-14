import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];   // extract token
      console.log("HEADER:", req.headers.authorization);
      console.log("TOKEN:", token);
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = decoded.id;

      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Not authorized" });
    }
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
};

export default protect;