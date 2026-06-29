import * as Yup from "yup";

/* ===========================
   Contact Form Validation
=========================== */

export const ContactValidation = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit mobile number")
    .required("Phone number is required"),

  program: Yup.string()
    .required("Please select a program"),

  message: Yup.string()
    .min(10, "Minimum 10 characters")
    .required("Message is required"),
});

/* ===========================
   Admin Panel Validation
=========================== */

export const AdminValidation = Yup.object({
  gymName: Yup.string()
    .min(3, "Gym name must be at least 3 characters")
    .required("Gym Name is required"),

  heroTitle: Yup.string()
    .min(5, "Hero title must be at least 5 characters")
    .required("Hero Title is required"),

  gymDescription: Yup.string()
    .min(20, "Description must be at least 20 characters")
    .required("Gym Description is required"),

  programName: Yup.string()
    .required("Program Name is required"),

  trainerName: Yup.string()
    .required("Trainer Name is required"),

  membershipPlan: Yup.string()
    .required("Membership Plan is required"),

  planPrice: Yup.number()
    .typeError("Plan Price must be a number")
    .positive("Price must be greater than 0")
    .required("Plan Price is required"),

  timing: Yup.string()
    .required("Gym Timing is required"),

  buttonText: Yup.string()
    .required("Button Text is required"),

  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter valid 10 digit contact number")
    .required("Contact Number is required"),
});