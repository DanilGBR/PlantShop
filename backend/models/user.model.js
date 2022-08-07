const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    // },
    fullName: {
      type: String,
      required: "Full name can't be empty",
      trim: true,
    },
    email: {
      type: String,
      required: "Email can't be empty",
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: "Password can't be empty",
      trim: true,
      minlength: [8, "Password must be at least 8 characters long"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      trim: true,
    },
    saltSecret: String,
  },
  {
    timestamps: true,
    collection: "Users",
  }
);

//custom validation functions
userSchema.path("email").validate((val) => {
  emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid e-mail!");

//check password
userSchema.path("password").validate((val) => {
  passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()_\-=\[\]{}+.,><?:;'"/|])[a-zA-Z`~!@#$%^&*()_\-\[\]{}=+.,><?:;'"/|\d]{8,}$/;
  return passwordRegex.test(val);
}, "Invalid password!");

//encrypt password
userSchema.pre("save", function (next) {
  console.log("bcrypt working");
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.saltSecret = salt;
      next();
    });
  });
});

// check if email is available
// userSchema.pre("resetPassword", function (next) {
//   console.log("test email is available");
//   userSchema.findOne({ email: email }).then(function (result) {
//     return result !== null;
//   });
// });

var User = mongoose.model("Users", userSchema);
module.exports = {
  User,
};
