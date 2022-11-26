const getUser = async (req, res) => {
  // send back data to the user
  // mongoDB implementation example:
  // const { userID } = req.user;
  // const { username, email } = await Auth.findOne({ _id: userID });
  // res.status(200).json({ username, email });
  res.send("get user");
};

export { getUser };
