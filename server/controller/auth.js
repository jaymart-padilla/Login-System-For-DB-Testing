const userRegister = async (req, res) => {
  // create user from req.body
  // generate jwt
  // send data back
  // mongoDB implementation example:
  // const token = newUser.generateJWT();
  // res.status(200).json({
  //   success: true,
  //   newUser: {
  //     username: newUser.username,
  //     email: newUser.email,
  //   },
  //   token,
  // });
  res.send("user register");
};

const userLogin = async (req, res) => {
  // username is no longer typed & handled
  // check if user with the email exist
  // check password
  // generate jwt
  // send data back
  // mongoDB implementation example:
  // const token = newUser.generateJWT();
  // res.status(200).json({
  //   success: true,
  //   newUser: {
  //     username: newUser.username,
  //     email: newUser.email,
  //   },
  //   token,
  // });
  res.send("user login");
};

export { userRegister, userLogin };
