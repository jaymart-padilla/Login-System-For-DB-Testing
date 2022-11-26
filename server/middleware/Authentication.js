import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Authentication Invalid");
  }

  const token = authHeader.split(" ")[1];

  try {
    // verify if the provided token is not valid and not altered
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userID: payload.id };
    next();
  } catch (error) {
    throw new Error("Authentication Invalid");
  }
};

export default auth;
