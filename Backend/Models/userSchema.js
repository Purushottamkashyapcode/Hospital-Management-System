import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    minLength: [3, "First Name must be at least 3 characters long"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    minLength: [3, "Last Name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required"],
    validate: {
      validator: function (value) {
        return validator.isMobilePhone(value, "any", { strictMode: false });
      },
      message: "Please provide a valid phone number",
    },
  },
  nic: {
    type: String,
    required: [true, "NIC is required"],
    validate: {
      validator: function (value) {
        return validator.isNumeric(value) && value.length === 5;
      },
      message: "NIC must contain exactly 5 digits",
    },
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be at least 8 characters long"],
    validate: {
      validator: function (value) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
          value
        );
      },
      message:
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
    },
    select: false,
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["Admin", "Patient", "Doctor"],
  },
  doctorDepartment: String,
  docAvatar: {
    public_id: String,
    url: String,
  },
});

// Define pre-save hook to hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Define method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Define method to generate JWT
userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

// Check if the model already exists, if not, create it
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User };
