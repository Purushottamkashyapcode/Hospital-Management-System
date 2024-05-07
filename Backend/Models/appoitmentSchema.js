import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
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
    appointment_date: {
        type: Date,
        required: [true, "Appointment Date is required"],
      },

      doctor:{
        firstName:{
            type:String,
            required:true,
    
        },
        lastName:{
            type:String,
            required:true,
    },
    },
    department:{
        type:String,
        required:true,
    },
    hasVisited:{
        type:Boolean,
        default:false,
    },
    doctorId:{
        type:mongoose.Schema.ObjectId,
        ref:"Doctor",
        required:true,
    },
    patientId:{
        type:mongoose.Schema.ObjectId,
        ref:"Patient",
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending", "Accepted", "Rejected"],
        default:"Pending"
    }

  });

  export const Appointment= mongoose.model("Appointment", appointmentSchema);
    