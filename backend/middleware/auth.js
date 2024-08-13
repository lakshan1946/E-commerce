import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const { token } = req.headers; // Extract token from request headers
  if (!token) {
    return res.json({ success: false, message: "Not Authorized login again" }); // If no token, respond with an error message
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET); // Verify the token using a secret key
    req.body.userId = token_decode.id; // Add the user ID from the token payload to the request body
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.log(error); // Log the error
    return res.json({ success: false, message: "Error" }); // Respond with an error message if token verification fails
  }
};

export default authMiddleware;
