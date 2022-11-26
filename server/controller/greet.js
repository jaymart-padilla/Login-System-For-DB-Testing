import { Auth } from "../model/User.js";

const getUser = async (req, res) => {
  const { userID } = req.user;
  const { username, email } = await Auth.findOne({ _id: userID });
  res.status(200).json({ username, email });
};

export { getUser };
