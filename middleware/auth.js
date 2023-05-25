import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  // split the string "bearer 'token' "
  if (!token) {
    req.user = null; // no token and no user logged in
  } else {
    var decoded = jwt.verify(token, "brooklyn");
    if (decoded) {
      // if token is correct
      req.user = decoded;
    } else {
      req.user = null;
    }
  }
  next(); // go to next router
};
