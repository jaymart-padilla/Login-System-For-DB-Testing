import { Auth } from "../model/User.js";

const userRegister = async (req, res) => {
  const newUser = await Auth.create({ ...req.body });
  const token = newUser.generateJWT();
  res.status(200).json({
    success: true,
    newUser: {
      username: newUser.username,
      email: newUser.email,
    },
    token,
  });
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Incomplete credentials");
  }
  // if user with such email exist
  const user = await Auth.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  const isPasswordValid = await user.validatePassword(password);
  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = newUser.generateJWT();
  res.status(200).json({
    success: true,
    newUser: {
      username: newUser.username,
      email: newUser.email,
    },
    token,
  });
};

export { userRegister, userLogin };
