function buildLogin(req, res) {
  // get the user's email address
  var email = req.query.email;
  // check if we have a valid email
  if (!email) {
    return res.status(400).json({
      error: "Email is required",
    });
  }
  // check if the email is valid
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: "Email is invalid",
    });
  }
  // get the user's password
  var password = req.query.password;
  // check if we have a valid password
  if (!password) {
    return res.status(400).json({
      error: "Password is required",
    });
  }
  // check if the password is valid
  if (!validator.isLength(password, { min: 6 })) {
    return res.status(400).json({
      error: "Password must be at least 6 characters",
    });
  }
  // get the user's name
  var name = req.query.name;
  // check if we have a valid name
  if (!name) {
    return res.status(400).json({
      error: "Name is required",
    });
  }
  // check if the name is valid
  if (!validator.isLength(name, { min: 2 })) {
    return res.status(400).json({
      error: "Name must be at least 2 characters",
    });
  }
  // get the user's last name
  var lastName = req.query.lastName;
  // check if we have a valid last name
  if (!lastName) {
    return res.status(400).json({
      error: "Last name is required",
    });
  }
  // check if the last name is valid
  if (!validator.isLength(lastName, { min: 2 })) {
    return res.status(400).json({
      error: "Last name must be at least 2 characters",
    });
  }
  // get the user's phone number
  var phone = req.query.phone;
  // check if we have a valid phone number
  if (!phone) {
    return res.status(400).json({
      error: "Phone number is required",
    });
  }
  // check if the phone number is valid
  if (!validator.isMobilePhone(phone, "any")) {
    return res.status(400).json({
      error: "Phone number is invalid",
    });
  }

  // find the user in the database
  User.findOne({ email: email })
    .then(function (user) {
      // check if we found a user
      if (!user) {
        return res.status(400).json({
          error: "User not found",
        });
      }
      // check if the password is correct
      if (!user.checkPassword(password)) {
        return res.status(400).json({
          error: "Password is incorrect",
        });
      }
      // create a token
      var token = jwt.sign({ _id: user._id }, process.env.SECRET);
      // return the token and user information
      return res.json({
        token: token,
        user: {
          _id: user._id,
          name: user.name,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      });
    })
    .catch(function (err) {
      return res.status(400).json({
        error: err,
      });
    });
}

module.exports = buildLogin;
