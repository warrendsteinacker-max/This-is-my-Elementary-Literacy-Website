import jwt from "jsonwebtoken"

function protection(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    // 1. Safely check if the Authorization header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    // 2. Safely extract the token
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token missing from bearer header" });
    }

    // 3. Verify the token (jwt.verify throws its own error if invalid)
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 

    // 4. Attach decoded user data to the request object so future routes can use it
    req.user = decoded;

    // 5. Move to the next middleware/route handler
    next();

  } catch (error) {
    // jwt.verify throws specific errors (like TokenExpiredError or JsonWebTokenError)
    if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Fallback for unexpected server errors
    return res.status(500).json({ message: "Internal server error during authentication" });
  }
}

export default protection;
